onRecordValidate((e) => {
  const { record } = e
  const errors = {}

  const likertStr = record.getString('respostasLikert')
  if (likertStr) {
    try {
      const arr = JSON.parse(likertStr)
      if (
        !Array.isArray(arr) ||
        arr.length !== 5 ||
        !arr.every((n) => typeof n === 'number' && n >= 1 && n <= 5)
      ) {
        errors['respostasLikert'] = new ValidationError(
          'invalid_format',
          'Deve conter 5 respostas entre 1 e 5.',
        )
      }
    } catch (err) {
      errors['respostasLikert'] = new ValidationError('invalid_format', 'Deve ser um JSON válido.')
    }
  }

  const abertasStr = record.getString('respostasAbertas')
  if (abertasStr) {
    try {
      const arr = JSON.parse(abertasStr)
      if (
        !Array.isArray(arr) ||
        arr.length !== 4 ||
        !arr.every((s) => typeof s === 'string' && s.length >= 10)
      ) {
        errors['respostasAbertas'] = new ValidationError(
          'invalid_format',
          'Deve conter 4 respostas com pelo menos 10 caracteres cada.',
        )
      }
    } catch (err) {
      errors['respostasAbertas'] = new ValidationError('invalid_format', 'Deve ser um JSON válido.')
    }
  }

  const recomendacao = record.getString('recomendacao')
  const observacoes = record.getString('observacoes')
  if (recomendacao === 'Não Recomendado' && !observacoes) {
    errors['observacoes'] = new ValidationError(
      'required',
      'Observações são obrigatórias quando não recomendado.',
    )
  }

  if (Object.keys(errors).length > 0) {
    throw new BadRequestError('Dados inválidos', errors)
  }

  e.next()
}, 'avaliacoes')
