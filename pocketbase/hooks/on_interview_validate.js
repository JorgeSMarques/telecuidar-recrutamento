onRecordValidate((e) => {
  const record = e.record
  const dataAgendada = record.getString('dataAgendada')
  if (dataAgendada) {
    const parts = dataAgendada.split(' ')[0].split('-')
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10)
      const month = parseInt(parts[1], 10) - 1
      const day = parseInt(parts[2], 10)
      const data = new Date(year, month, day)

      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const maxDate = new Date(today)
      maxDate.setDate(maxDate.getDate() + 14)
      maxDate.setHours(23, 59, 59, 999)

      if (data < today) {
        throw new BadRequestError('Dados inválidos', {
          dataAgendada: new ValidationError(
            'invalid_date',
            'A data da entrevista não pode ser no passado.',
          ),
        })
      }

      if (data > maxDate) {
        throw new BadRequestError('Dados inválidos', {
          dataAgendada: new ValidationError(
            'invalid_date',
            'A data da entrevista não pode ser maior que 14 dias no futuro.',
          ),
        })
      }
    }
  }

  const horarioAgendado = record.getString('horarioAgendado')
  if (horarioAgendado && !/^([01]\d|2[0-3]):[0-5]\d$/.test(horarioAgendado)) {
    throw new BadRequestError('Dados inválidos', {
      horarioAgendado: new ValidationError('invalid_time', 'Horário deve estar no formato HH:mm.'),
    })
  }

  const emailConfirmacao = record.getString('emailConfirmacao')
  if (emailConfirmacao && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailConfirmacao)) {
    throw new BadRequestError('Dados inválidos', {
      emailConfirmacao: new ValidationError('invalid_email', 'Formato de e-mail inválido.'),
    })
  }

  e.next()
}, 'interviews')
