cronAdd('cleanup-expired-drafts', '0 3 * * *', () => {
  $app.logger().info('Running cleanup-expired-drafts')
})

cronAdd('interview-reminder-24h', '0 9 * * *', () => {
  $app.logger().info('Running interview-reminder-24h')
  try {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const dateStr = tomorrow.toISOString().split('T')[0]

    const interviews = $app.findRecordsByFilter(
      'interviews',
      `dataAgendada >= '${dateStr} 00:00:00' && dataAgendada <= '${dateStr} 23:59:59'`,
    )

    for (const iv of interviews) {
      $app
        .logger()
        .info(
          'Mock notification sent: Interview Reminder',
          'interviewId',
          iv.id,
          'email',
          iv.getString('emailConfirmacao'),
        )
    }
  } catch (err) {
    $app.logger().error('Error running interview-reminder-24h', 'error', err.message)
  }
})

cronAdd('evaluation-pending-reminder', '0 10 * * 1-5', () => {
  $app.logger().info('Running evaluation-pending-reminder')
  try {
    const candidates = $app.findRecordsByFilter(
      'candidates',
      "status = 'Avaliação Pendente' || status = 'Avaliação RH Pendente'",
    )

    for (const c of candidates) {
      $app.logger().info('Mock notification sent: Evaluation Pending', 'candidateId', c.id)
    }
  } catch (err) {
    $app.logger().error('Error running evaluation-pending-reminder', 'error', err.message)
  }
})
