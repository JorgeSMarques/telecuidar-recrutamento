routerAdd(
  'POST',
  '/backend/v1/candidates/capture',
  (e) => {
    const body = e.requestInfo().body || {}
    const user = e.auth
    if (!user) throw new UnauthorizedError('Autenticação necessária')

    const collection = $app.findCollectionByNameOrId('candidates')
    const record = new Record(collection)

    record.set('userId', user.id)
    record.set('status', 'Captação')

    const fields = [
      'nome',
      'email',
      'telefone',
      'linkedinUrl',
      'profissao',
      'especialidade',
      'experienciaTotal',
      'experienciaSUS',
      'descricaoSUS',
      'telemedicina',
      'descricaoTelemedicina',
      'canalCaptacao',
      'especifiqueOutro',
    ]
    fields.forEach((f) => {
      if (body[f] !== undefined) record.set(f, body[f])
    })

    $app.save(record)

    return e.json(200, {
      success: true,
      candidatoId: record.id,
      message: 'Candidatura recebida com sucesso',
    })
  },
  $apis.requireAuth(),
)
