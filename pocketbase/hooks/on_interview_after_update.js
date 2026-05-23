onRecordAfterUpdateSuccess((e) => {
  const { record } = e
  const original = record.original()

  const aprovadoAtual = record.getBool('aprovacaoFinal')
  const aprovadoAntigo = original.getBool('aprovacaoFinal')

  if (aprovadoAtual && !aprovadoAntigo) {
    const candidatoId = record.getString('candidatoId')
    if (candidatoId) {
      try {
        const candidate = $app.findRecordById('candidates', candidatoId)
        candidate.set('status', 'Contratado')
        $app.saveNoValidate(candidate)

        $app
          .logger()
          .info('Mocked notification sent: Welcome to the team!', 'candidatoId', candidatoId)
      } catch (err) {
        $app.logger().error('Erro ao atualizar candidato contratado', 'error', err.message)
      }
    }
  }
  e.next()
}, 'interviews')
