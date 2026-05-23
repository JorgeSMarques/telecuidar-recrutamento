routerAdd(
  'POST',
  '/backend/v1/manifestacoes/create',
  (e) => {
    const body = e.requestInfo().body || {}
    const user = e.auth
    if (!user) throw new UnauthorizedError('Autenticação necessária')

    let candidateId = body.candidatoId
    if (!candidateId) {
      try {
        const candidate = $app.findFirstRecordByData('candidates', 'userId', user.id)
        candidateId = candidate.id
      } catch (err) {
        throw new BadRequestError('Candidato não encontrado para este usuário')
      }
    }

    const col = $app.findCollectionByNameOrId('manifestacoes')
    const record = new Record(col)
    record.set('candidatoId', candidateId)
    record.set('confirmado', body.confirmado !== false)
    if (body.telefone) record.set('telefone', body.telefone)
    if (body.mensagem) record.set('mensagem', body.mensagem)

    const now = new Date().toISOString().replace('T', ' ').substring(0, 19) + 'Z'
    record.set('dataConfirmacao', now)

    $app.save(record)

    return e.json(200, {
      success: true,
      manifestacaoId: record.id,
      message: 'Manifestação registrada com sucesso',
    })
  },
  $apis.requireAuth(),
)
