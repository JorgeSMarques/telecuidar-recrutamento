routerAdd(
  'POST',
  '/backend/v1/avaliacoes/rh',
  (e) => {
    const body = e.requestInfo().body || {}
    const id = body.avaliacaoId
    if (!id) throw new BadRequestError('avaliacaoId é obrigatório')

    try {
      const avaliacao = $app.findRecordById('avaliacoes', id)

      if (body.notaAlinhamento !== undefined) avaliacao.set('notaAlinhamento', body.notaAlinhamento)
      if (body.justificativaAlinhamento !== undefined)
        avaliacao.set('justificativaAlinhamento', body.justificativaAlinhamento)
      if (body.notaCompetencia !== undefined) avaliacao.set('notaCompetencia', body.notaCompetencia)
      if (body.justificativaCompetencia !== undefined)
        avaliacao.set('justificativaCompetencia', body.justificativaCompetencia)
      if (body.recomendacao !== undefined) avaliacao.set('recomendacao', body.recomendacao)
      if (body.observacoes !== undefined) avaliacao.set('observacoes', body.observacoes)

      $app.save(avaliacao)

      return e.json(200, { success: true, message: 'Avaliação de RH atualizada' })
    } catch (err) {
      throw new BadRequestError('Avaliação não encontrada ou dados inválidos', err.data)
    }
  },
  $apis.requireAuth(),
)
