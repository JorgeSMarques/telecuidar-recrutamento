routerAdd(
  'POST',
  '/backend/v1/scoring/alinhamento',
  (e) => {
    const body = e.requestInfo().body || {}
    const respostasLikert = body.respostasLikert || {}

    let sum = 0
    let count = 0
    for (let key in respostasLikert) {
      sum += Number(respostasLikert[key])
      count++
    }

    const avg = count > 0 ? sum / count : 1
    const partA = (avg - 1) * 2.5
    const partB = 7.5

    const score = partA * 0.4 + partB * 0.6
    const finalScore = Math.round(score * 10) / 10

    const recomendacao = finalScore >= 7.0 ? 'Recomendado para Entrevista' : 'Não Recomendado'

    return e.json(200, { score: finalScore, recomendacao })
  },
  $apis.requireAuth(),
)
