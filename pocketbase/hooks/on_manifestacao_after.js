onRecordAfterCreateSuccess((e) => {
  const record = e.record
  const candidateId = record.getString('candidatoId')
  if (!candidateId) return e.next()

  const confirmado = record.getBool('confirmado')

  try {
    const candidate = $app.findRecordById('candidates', candidateId)
    if (confirmado) {
      candidate.set('status', 'Manifestação Pendente')
    } else {
      candidate.set('status', 'Rejeitado')
    }
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19) + 'Z'
    candidate.set('dataManifestacao', now)
    $app.save(candidate)

    $app
      .logger()
      .info('Mocked communication sent: manifestacao_confirmada', 'candidateId', candidateId)
  } catch (err) {
    $app
      .logger()
      .error(
        'Candidato não encontrado ao atualizar status da manifestação',
        'candidateId',
        candidateId,
      )
  }

  e.next()
}, 'manifestacoes')
