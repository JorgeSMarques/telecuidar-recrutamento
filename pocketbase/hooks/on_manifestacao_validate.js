onRecordValidate((e) => {
  const { record } = e
  const errors = {}

  const confirmado = record.getBool('confirmado')
  const telefone = record.getString('telefone')
  const mensagem = record.getString('mensagem')

  if (confirmado && !telefone) {
    errors['telefone'] = new ValidationError('required', 'Telefone é obrigatório quando confirmado')
  } else if (telefone && !/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(telefone)) {
    errors['telefone'] = new ValidationError(
      'invalid_format',
      'Formato de telefone inválido. Use (XX) XXXXX-XXXX',
    )
  }

  if (mensagem && mensagem.length > 300) {
    errors['mensagem'] = new ValidationError(
      'max_length',
      'Mensagem deve ter no máximo 300 caracteres.',
    )
  }

  if (Object.keys(errors).length > 0) {
    throw new BadRequestError('Dados inválidos', errors)
  }

  e.next()
}, 'manifestacoes')
