onRecordValidate((e) => {
  const { record } = e
  const errors = {}

  const dataStr = record.getString('dataAgendada')
  if (dataStr) {
    const dateAgendada = new Date(dataStr)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const target = new Date(dateAgendada)
    target.setHours(0, 0, 0, 0)
    const diffDays = Math.round((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

    if (diffDays < 1 || diffDays > 14) {
      errors['dataAgendada'] = new ValidationError(
        'invalid_date',
        'A data agendada deve estar entre 1 e 14 dias no futuro.',
      )
    }
  }

  if (Object.keys(errors).length > 0) {
    throw new BadRequestError('Dados inválidos', errors)
  }

  e.next()
}, 'interviews')
