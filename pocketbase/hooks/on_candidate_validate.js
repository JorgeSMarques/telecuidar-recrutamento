onRecordValidate((e) => {
  const { record } = e
  const errors = {}

  const telefone = record.getString('telefone')
  if (telefone && !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone)) {
    errors['telefone'] = new ValidationError(
      'invalid_format',
      'Formato de telefone inválido. Use (XX) XXXXX-XXXX',
    )
  }

  const linkedinUrl = record.getString('linkedinUrl')
  if (linkedinUrl && !/^https:\/\/(www\.)?linkedin\.com/.test(linkedinUrl)) {
    errors['linkedinUrl'] = new ValidationError(
      'invalid_url',
      'URL deve ser do LinkedIn (https://linkedin.com/...)',
    )
  }

  const canalCaptacao = record.getString('canalCaptacao')
  const especifiqueOutro = record.getString('especifiqueOutro')
  if (canalCaptacao === 'Outro' && !especifiqueOutro) {
    errors['especifiqueOutro'] = new ValidationError('required', 'Especifique o canal de captação')
  }

  if (Object.keys(errors).length > 0) {
    throw new BadRequestError('Dados inválidos', errors)
  }

  e.next()
}, 'candidates')
