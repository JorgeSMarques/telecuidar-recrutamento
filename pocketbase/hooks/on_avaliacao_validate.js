onRecordValidate((e) => {
  const record = e.record

  const respostasLikert = record.get('respostasLikert')
  if (respostasLikert && typeof respostasLikert === 'object') {
    let count = 0
    for (let key in respostasLikert) {
      const val = Number(respostasLikert[key].valor || respostasLikert[key])
      if (val < 1 || val > 5) {
        throw new BadRequestError('Dados inválidos', {
          respostasLikert: new ValidationError(
            'invalid_range',
            'Valores Likert devem ser entre 1 e 5.',
          ),
        })
      }
      count++
    }
    if (Object.keys(respostasLikert).length > 0 && count !== 5) {
      throw new BadRequestError('Dados inválidos', {
        respostasLikert: new ValidationError(
          'invalid_count',
          'Devem ser enviadas exatamente 5 respostas Likert.',
        ),
      })
    }
  }

  const respostasAbertas = record.get('respostasAbertas')
  if (respostasAbertas && typeof respostasAbertas === 'object') {
    let count = 0
    for (let key in respostasAbertas) {
      const val = respostasAbertas[key]
      if (val && String(val).length < 10) {
        throw new BadRequestError('Dados inválidos', {
          respostasAbertas: new ValidationError(
            'min_length',
            'Respostas abertas devem ter pelo menos 10 caracteres.',
          ),
        })
      }
      count++
    }
    if (Object.keys(respostasAbertas).length > 0 && count !== 4) {
      throw new BadRequestError('Dados inválidos', {
        respostasAbertas: new ValidationError(
          'invalid_count',
          'Devem ser enviadas exatamente 4 respostas abertas.',
        ),
      })
    }
  }

  const notaAlinhamento = Number(record.get('notaAlinhamento') || 0)
  const notaCompetencia = Number(record.get('notaCompetencia') || 0)
  const recomendacao = record.getString('recomendacao')
  const justificativaAlinhamento = record.getString('justificativaAlinhamento')
  const justificativaCompetencia = record.getString('justificativaCompetencia')
  const observacoes = record.getString('observacoes')

  if (record.get('notaAlinhamento') !== null && (notaAlinhamento < 0 || notaAlinhamento > 10)) {
    throw new BadRequestError('Dados inválidos', {
      notaAlinhamento: new ValidationError('invalid_range', 'Nota deve ser entre 0 e 10.'),
    })
  }

  if (record.get('notaCompetencia') !== null && (notaCompetencia < 0 || notaCompetencia > 10)) {
    throw new BadRequestError('Dados inválidos', {
      notaCompetencia: new ValidationError('invalid_range', 'Nota deve ser entre 0 e 10.'),
    })
  }

  if (
    (notaAlinhamento > 0 || notaCompetencia > 0) &&
    !justificativaAlinhamento &&
    !justificativaCompetencia &&
    !observacoes
  ) {
    throw new BadRequestError('Dados inválidos', {
      justificativaAlinhamento: new ValidationError(
        'required',
        'Justificativa é obrigatória quando as notas são preenchidas.',
      ),
    })
  }

  if (
    (recomendacao === 'Não Recomendado' || recomendacao === 'Não recomendo') &&
    !observacoes &&
    !justificativaAlinhamento
  ) {
    throw new BadRequestError('Dados inválidos', {
      observacoes: new ValidationError(
        'required',
        'Observações são obrigatórias para candidatos não recomendados.',
      ),
    })
  }

  e.next()
}, 'avaliacoes')
