routerAdd('POST', '/backend/v1/communication/whatsapp', (e) => {
  const body = e.requestInfo().body || {}
  const to = body.to
  const template = body.template
  if (!to) throw new BadRequestError('Número de destino (to) é obrigatório')

  $app.logger().info(`WhatsApp simulado enviado para ${to} usando template ${template}`)
  return e.json(200, { success: true, message: `WhatsApp enviado para ${to}` })
})
