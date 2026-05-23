onRecordAfterCreateSuccess((e) => {
  const { record } = e
  if (record.getBool('confirmado')) {
    const candidatoId = record.getString('candidatoId')
    if (candidatoId) {
      try {
        const candidate = $app.findRecordById('candidates', candidatoId)
        candidate.set('status', 'Manifestação Pendente')
        candidate.set('dataManifestacao', new Date().toISOString())
        $app.saveNoValidate(candidate)
      } catch (err) {
        $app
          .logger()
          .error(
            'Erro ao atualizar candidato na manifestacao',
            'candidatoId',
            candidatoId,
            'error',
            err.message,
          )
      }
    }
  }
  e.next()
}, 'manifestacoes')
