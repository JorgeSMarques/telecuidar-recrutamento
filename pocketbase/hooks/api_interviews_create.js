routerAdd(
  'POST',
  '/backend/v1/interviews/create',
  (e) => {
    const body = e.requestInfo().body || {}
    const candidatoId = body.candidatoId
    if (!candidatoId) throw new BadRequestError('candidatoId é obrigatório')

    let candidate
    try {
      candidate = $app.findRecordById('candidates', candidatoId)
    } catch (err) {
      throw new BadRequestError('Candidato não encontrado')
    }

    const decisao = body.decisao

    if (decisao === 'rejeitar') {
      candidate.set('status', 'Rejeitado')
      $app.save(candidate)

      try {
        $http.send({
          url: 'http://127.0.0.1:8090/backend/v1/communication/email',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: e.request.header.get('Authorization') || '',
          },
          body: JSON.stringify({ to: candidate.getString('email'), template: 'rejeicao' }),
          timeout: 10,
        })
      } catch (err) {
        $app.logger().error('Erro ao simular email de rejeição', 'error', err.message)
      }

      return e.json(200, { success: true, message: 'Candidato rejeitado' })
    }

    const col = $app.findCollectionByNameOrId('interviews')
    const record = new Record(col)

    record.set('candidatoId', candidatoId)
    if (body.dataEntrevista || body.dataAgendada)
      record.set('dataAgendada', body.dataEntrevista || body.dataAgendada)
    if (body.horarioEntrevista || body.horarioAgendado)
      record.set('horarioAgendado', body.horarioEntrevista || body.horarioAgendado)
    record.set('emailConfirmacao', body.emailConfirmacao || candidate.getString('email'))
    record.set('criarCalendar', body.criarCalendar !== false)
    record.set('enviarWhatsApp', body.enviarWhatsApp !== false)
    record.set('linkMeet', 'https://meet.google.com/mock-link-123')
    record.set('aprovacaoFinal', true)

    $app.save(record)

    candidate.set('status', 'Aprovado')
    $app.save(candidate)

    try {
      $http.send({
        url: 'http://127.0.0.1:8090/backend/v1/communication/email',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: e.request.header.get('Authorization') || '',
        },
        body: JSON.stringify({
          to: record.getString('emailConfirmacao'),
          template: 'entrevista_agendada',
        }),
        timeout: 10,
      })

      if (record.get('enviarWhatsApp')) {
        $http.send({
          url: 'http://127.0.0.1:8090/backend/v1/communication/whatsapp',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: e.request.header.get('Authorization') || '',
          },
          body: JSON.stringify({
            to: candidate.getString('telefone'),
            template: 'entrevista_agendada',
          }),
          timeout: 10,
        })
      }
    } catch (err) {
      $app.logger().error('Erro ao simular comunicação', 'error', err.message)
    }

    return e.json(200, {
      success: true,
      interviewId: record.id,
      message: 'Entrevista agendada com sucesso',
    })
  },
  $apis.requireAuth(),
)
