onRecordAfterCreateSuccess((e) => {
  const { record } = e
  const candidatoId = record.getString('candidatoId')

  try {
    const meetId = $security
      .randomString(10)
      .toLowerCase()
      .replace(/(.{3})(.{4})(.{3})/, '$1-$2-$3')
    const linkMeet = `https://meet.google.com/${meetId}`

    record.set('linkMeet', linkMeet)
    $app.saveNoValidate(record)

    if (candidatoId) {
      const candidate = $app.findRecordById('candidates', candidatoId)
      candidate.set('status', 'Aprovado')
      $app.saveNoValidate(candidate)
    }

    $app
      .logger()
      .info(
        'Mocked notification sent: Interview scheduled',
        'candidatoId',
        candidatoId,
        'email',
        record.getString('emailConfirmacao'),
      )
  } catch (err) {
    $app.logger().error('Erro ao processar entrevista criada', 'error', err.message)
  }
  e.next()
}, 'interviews')
