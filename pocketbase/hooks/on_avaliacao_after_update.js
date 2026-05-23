onRecordAfterUpdateSuccess((e) => {
  const { record } = e
  const original = record.original()

  const notaAtual = record.getString('notaAlinhamento')
  const notaAntiga = original.getString('notaAlinhamento')

  if (notaAtual !== '' && notaAtual !== notaAntiga) {
    const candidatoId = record.getString('candidatoId')
    if (candidatoId) {
      try {
        const candidate = $app.findRecordById('candidates', candidatoId)
        const recomendacao = record.getString('recomendacao')

        if (recomendacao === 'Recomendado') {
          candidate.set('status', 'Aprovação Diretor Pendente')
        } else if (recomendacao === 'Não Recomendado') {
          candidate.set('status', 'Rejeitado')
        } else {
          candidate.set('status', 'Avaliação RH Concluída')
        }
        $app.saveNoValidate(candidate)
      } catch (err) {
        $app.logger().error('Erro ao atualizar candidato na avaliacao rh', 'error', err.message)
      }
    }
  }
  e.next()
}, 'avaliacoes')
