onRecordAfterUpdateSuccess((e) => {
  const texto = e.record.getString('textoCurriculo')
  const textoOriginal = e.record.original().getString('textoCurriculo')

  // Apenas processa se o texto foi preenchido/modificado
  if (!texto || texto === textoOriginal) return e.next()

  const url = $secrets.get('SKIP_AI_GATEWAY_URL')
  const key = $secrets.get('SKIP_AI_GATEWAY_API_KEY')

  if (!url || !key) {
    $app.logger().error('Missing AI Gateway secrets')
    return e.next()
  }

  try {
    const res = $http.send({
      url: url + '/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + key,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'Você é um assistente especializado em extrair informações de currículos. Extraia o "Nome" e o "Email" do candidato a partir do texto fornecido. Retorne estritamente um JSON no formato: {"nome": "Nome Encontrado", "email": "email@encontrado.com"}. Se não encontrar alguma informação, retorne null para o campo.',
          },
          { role: 'user', content: texto.substring(0, 10000) },
        ],
        response_format: { type: 'json_object' },
      }),
      timeout: 45,
    })

    if (res.statusCode === 200) {
      const data = res.json
      const content = data.choices?.[0]?.message?.content
      if (content) {
        const parsed = JSON.parse(content)
        const candidate = $app.findRecordById('candidates', e.record.id)

        let updated = false
        const currentName = candidate.getString('nome')
        const currentEmail = candidate.getString('email')

        // No update substituímos apenas se ainda tiver os placeholders,
        // ou se os dados estavam totalmente vazios
        if (
          parsed.nome &&
          parsed.nome.trim() !== '' &&
          (currentName.indexOf('Candidato Temporário') !== -1 || currentName === '')
        ) {
          candidate.set('nome', parsed.nome.trim())
          updated = true
        }

        if (
          parsed.email &&
          parsed.email.trim() !== '' &&
          (currentEmail.indexOf('@exemplo.com') !== -1 || currentEmail === '')
        ) {
          candidate.set('email', parsed.email.trim().toLowerCase())
          updated = true
        }

        if (updated) {
          $app.saveNoValidate(candidate)
          $app.logger().info('Candidato atualizado pela IA no update', 'id', e.record.id)
        }
      }
    } else {
      $app.logger().error('AI Gateway returned non-200', 'status', res.statusCode)
    }
  } catch (err) {
    $app.logger().error('Error calling AI Gateway', 'error', err.message)
  }

  return e.next()
}, 'candidates')
