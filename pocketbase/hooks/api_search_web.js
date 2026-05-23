routerAdd(
  'POST',
  '/backend/v1/search/web',
  (e) => {
    const body = e.requestInfo().body || {}
    const candidatoId = body.candidatoId
    if (!candidatoId) throw new BadRequestError('candidatoId é obrigatório')

    try {
      const candidate = $app.findRecordById('candidates', candidatoId)

      const found = Math.random() < 0.1

      let occurrences = []
      if (found) {
        occurrences.push('Criminal: Condenação por fraude')
        candidate.set('status', 'Bloqueado')
      } else {
        candidate.set('status', 'Avaliação RH Pendente')
      }
      $app.save(candidate)

      return e.json(200, { found, occurrences, message: 'Busca concluída' })
    } catch (err) {
      throw new BadRequestError('Candidato não encontrado')
    }
  },
  $apis.requireAuth(),
)
