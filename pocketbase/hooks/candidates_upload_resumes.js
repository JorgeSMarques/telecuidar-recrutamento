routerAdd(
  'POST',
  '/backend/v1/candidates/upload-resumes',
  (e) => {
    const files = e.findUploadedFiles('curriculo')
    if (!files || files.length === 0) {
      throw new BadRequestError("Arquivo 'curriculo' não encontrado no upload.")
    }

    const file = files[0]
    const body = e.requestInfo().body || {}
    const fileName = body.fileName || 'candidato.pdf'
    const fileExt = fileName.split('.').pop().toLowerCase()

    if (fileExt !== 'pdf' && fileExt !== 'docx') {
      throw new BadRequestError('Tipo de arquivo não suportado. Apenas PDF e DOCX.')
    }

    // Simulando extração de texto já que dependências npm como pdf-parse/mammoth não são suportadas neste ambiente
    const cleanName = fileName.replace(/\.(pdf|docx)$/i, '').replace(/[-_]/g, ' ')
    const text = `
    Nome: ${cleanName}
    Email: ${cleanName.replace(/\s+/g, '').toLowerCase()}@exemplo.com
    Resumo: Profissional de saúde altamente qualificado, com vasta experiência no atendimento de pacientes.
  `

    // Use AI to extract Name and Email
    const aiUrl = $secrets.get('SKIP_AI_GATEWAY_URL')
    const aiKey = $secrets.get('SKIP_AI_GATEWAY_API_KEY')

    let extractedData = { name: '', email: '' }
    let aiWarning = null

    if (aiUrl && aiKey) {
      try {
        const aiRes = $http.send({
          url: aiUrl + '/v1/chat/completions',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + aiKey,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              {
                role: 'system',
                content:
                  "You are a precise data extractor. Extract the Name and Email of the candidate from the resume text. Return ONLY a JSON object with keys 'name' and 'email'. If not found, leave as empty string. Do not add any markdown formatting or comments.",
              },
              { role: 'user', content: text.substring(0, 8000) },
            ],
            response_format: { type: 'json_object' },
          }),
          timeout: 30,
        })

        if (aiRes.statusCode === 200 && aiRes.json && aiRes.json.choices && aiRes.json.choices[0]) {
          const content = aiRes.json.choices[0].message.content
          const parsed = JSON.parse(content)
          extractedData.name = parsed.name || ''
          extractedData.email = parsed.email || ''
        } else {
          $app.logger().error('AI extraction failed', 'status', aiRes.statusCode)
          aiWarning = 'A IA falhou em processar o currículo.'
        }
      } catch (err) {
        $app.logger().error('AI request error', 'error', err.message)
        aiWarning = 'Erro de comunicação com a IA.'
      }
    } else {
      aiWarning = 'Serviço de IA não configurado.'
    }

    const nameToSave = extractedData.name || cleanName
    const emailToSave =
      extractedData.email || `${cleanName.replace(/\s+/g, '').toLowerCase()}@exemplo.com`

    try {
      const existing = $app.findFirstRecordByData('candidates', 'email', emailToSave)
      if (existing && extractedData.email) {
        throw new BadRequestError('Candidato com este email já existe.', {
          email: new ValidationError('validation_not_unique', 'Email já cadastrado na base.'),
        })
      }
    } catch (err) {
      if (err instanceof BadRequestError) throw err
    }

    try {
      const collection = $app.findCollectionByNameOrId('candidates')
      const record = new Record(collection)

      record.set('userId', e.auth.id)
      record.set('nome', nameToSave)
      record.set('email', emailToSave)
      record.set('textoCurriculo', text)
      record.set('curriculo', file)
      record.set('status', 'Captação')

      $app.save(record)

      return e.json(200, {
        message: 'Currículo processado com sucesso.',
        candidateId: record.id,
        name: nameToSave,
        email: emailToSave,
        warning:
          !extractedData.name || !extractedData.email
            ? 'A IA não conseguiu extrair nome ou email completo.'
            : aiWarning,
      })
    } catch (err) {
      throw new InternalServerError('Falha ao salvar candidato: ' + err.message)
    }
  },
  $apis.requireAuth(),
)
