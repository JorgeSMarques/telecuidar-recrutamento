routerAdd(
  'POST',
  '/backend/v1/avaliacoes/create',
  (e) => {
    const body = e.requestInfo().body || {}
    const user = e.auth

    let candidateId = body.candidatoId
    if (!candidateId && user) {
      try {
        const candidate = $app.findFirstRecordByData('candidates', 'userId', user.id)
        candidateId = candidate.id
      } catch (err) {
        // Falha ignorada para deixar a criação falhar na validação da tabela se vazio
      }
    }

    const col = $app.findCollectionByNameOrId('avaliacoes')
    const record = new Record(col)

    record.set('candidatoId', candidateId)
    record.set('respostasLikert', body.respostasLikert || {})
    record.set('respostasAbertas', body.respostasAbertas || {})

    $app.save(record)

    return e.json(200, {
      success: true,
      avaliacaoId: record.id,
      message: 'Avaliação registrada com sucesso',
    })
  },
  $apis.requireAuth(),
)
