routerAdd('POST', '/backend/v1/public/candidates/capture', (e) => {
  const body = e.requestInfo().body || {}

  const collection = $app.findCollectionByNameOrId('candidates')
  const record = new Record(collection)

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
    if (body[f] !== undefined && body[f] !== '') {
      record.set(f, body[f])
    }
  })

  try {
    $app.save(record)
  } catch (err) {
    return e.badRequestError('Dados inválidos. Verifique os campos e tente novamente.')
  }

  return e.json(200, {
    success: true,
    candidatoId: record.id,
    message: 'Candidatura recebida com sucesso',
  })
})
