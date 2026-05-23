onRecordValidate((e) => {
  const record = e.record
  const telefone = record.getString('telefone')
  if (telefone && !/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(telefone)) {
    throw new BadRequestError('Dados inválidos', {
      telefone: new ValidationError(
        'invalid_phone',
        'Formato de telefone inválido. Use (XX) XXXXX-XXXX',
      ),
    })
  }

  const linkedinUrl = record.getString('linkedinUrl')
  if (linkedinUrl && !/^https:\/\/(www\.)?linkedin\.com/.test(linkedinUrl)) {
    throw new BadRequestError('Dados inválidos', {
      linkedinUrl: new ValidationError('invalid_url', 'URL do LinkedIn inválida.'),
    })
  }

  const email = record.getString('email')
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new BadRequestError('Dados inválidos', {
      email: new ValidationError('invalid_email', 'Formato de e-mail inválido.'),
    })
  }

  const canal = record.getString('canalCaptacao')
  const especifique = record.getString('especifiqueOutro')
  if (canal === 'Outro' && !especifique) {
    throw new BadRequestError('Dados inválidos', {
      especifiqueOutro: new ValidationError('required', 'Por favor, especifique o outro canal.'),
    })
  }

  e.next()
}, 'candidates')
