onRecordAfterUpdateSuccess((e) => {
  const { record } = e
  const original = record.original()

  const realizadaAtual = record.getBool('realizada')
  const aprovadoAtual = record.getBool('aprovacaoFinal')

  const realizadaAntiga = original.getBool('realizada')
  const aprovadoAntigo = original.getBool('aprovacaoFinal')

  if (realizadaAtual && aprovadoAtual && (!realizadaAntiga || !aprovadoAntigo)) {
    const candidatoId = record.getString('candidatoId')
    if (candidatoId) {
      try {
        const candidate = $app.findRecordById('candidates', candidatoId)
        candidate.set('status', 'Contratado')
        $app.saveNoValidate(candidate)

        $app.logger().info('Mocked communication sent: contratado', 'candidatoId', candidatoId)
      } catch (err) {
        $app.logger().error('Erro ao atualizar candidato contratado', 'error', err.message)
      }
    }
  }
  e.next()
}, 'interviews')
