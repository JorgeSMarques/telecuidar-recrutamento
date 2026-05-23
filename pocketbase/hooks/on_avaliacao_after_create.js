onRecordAfterCreateSuccess((e) => {
  const record = e.record
  const candidateId = record.getString('candidatoId')
  if (!candidateId) return e.next()

  try {
    const candidate = $app.findRecordById('candidates', candidateId)
    candidate.set('status', 'Busca Web Pendente')
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19) + 'Z'
    candidate.set('dataAvaliacao', now)
    $app.save(candidate)

    const respostasLikert = record.get('respostasLikert') || {}
    let sum = 0
    let count = 0
    for (let key in respostasLikert) {
      sum += Number(respostasLikert[key].valor || respostasLikert[key])
      count++
    }
    const avg = count > 0 ? sum / count : 1
    const partA = (avg - 1) * 2.5
    const partB = 7.5
    const finalScore = Math.round((partA * 0.4 + partB * 0.6) * 10) / 10
    record.set('notaAlinhamento', finalScore)
    record.set('notaCompetencia', finalScore)
    $app.saveNoValidate(record)
  } catch (err) {
    $app.logger().error('Erro ao processar avaliação', 'candidateId', candidateId)
  }

  e.next()
}, 'avaliacoes')
