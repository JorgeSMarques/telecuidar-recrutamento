migrate(
  (app) => {
    const users = app.findCollectionByNameOrId('_pb_users_auth_')

    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'consultoriaconexoes@gmail.com')
      return // already seeded
    } catch (_) {}

    const record = new Record(users)
    record.setEmail('consultoriaconexoes@gmail.com')
    record.setPassword('Skip@Pass')
    record.setVerified(true)
    record.set('name', 'Admin')
    record.set('role', 'Gerente RH')
    app.save(record)
  },
  (app) => {
    try {
      const record = app.findAuthRecordByEmail('_pb_users_auth_', 'consultoriaconexoes@gmail.com')
      app.delete(record)
    } catch (_) {}
  },
)
