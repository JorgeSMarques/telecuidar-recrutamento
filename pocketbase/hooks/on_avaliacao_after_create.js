onRecordAfterCreateSuccess((e) => {
  const { record } = e
  const candidatoId = record.getString('candidatoId')
  if (candidatoId) {
    try {
      const candidate = $app.findRecordById('candidates', candidatoId)
      candidate.set('status', 'Busca Web Pendente')
      candidate.set('dataAvaliacao', new Date().toISOString())
      $app.saveNoValidate(candidate)
    } catch (err) {
      $app.logger().error('Erro ao atualizar candidato na avaliacao create', 'error', err.message)
    }
  }
  e.next()
}, 'avaliacoes')
