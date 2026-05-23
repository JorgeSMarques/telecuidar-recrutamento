routerAdd('POST', '/backend/v1/communication/email', (e) => {
  const body = e.requestInfo().body || {}
  const to = body.to
  const template = body.template
  if (!to) throw new BadRequestError('Email de destino (to) é obrigatório')

  $app.logger().info(`E-mail simulado enviado para ${to} usando template ${template}`)
  return e.json(200, { success: true, message: `E-mail enviado para ${to}` })
})
