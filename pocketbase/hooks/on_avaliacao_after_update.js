onRecordAfterUpdateSuccess((e) => {
  const record = e.record
  const candidateId = record.getString('candidatoId')
  if (!candidateId) return e.next()

  try {
    const candidate = $app.findRecordById('candidates', candidateId)

    const recomendacao = record.getString('recomendacao')
    if (
      recomendacao === 'Recomendado' ||
      recomendacao === 'Recomendo fortemente' ||
      recomendacao === 'Recomendo com ressalvas'
    ) {
      candidate.set('status', 'Aprovação Diretor Pendente')
      $app.save(candidate)
      $app.logger().info('Mocked communication sent: avaliacao_enviada', 'candidateId', candidateId)
    } else if (recomendacao === 'Não Recomendado' || recomendacao === 'Não recomendo') {
      candidate.set('status', 'Rejeitado')
      $app.save(candidate)
      $app.logger().info('Mocked communication sent: rejeicao', 'candidateId', candidateId)
    }
  } catch (err) {
    $app.logger().error('Erro ao atualizar candidato após avaliação RH', 'candidateId', candidateId)
  }

  e.next()
}, 'avaliacoes')
