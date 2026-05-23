migrate(
  (app) => {
    const users = app.findCollectionByNameOrId('_pb_users_auth_')
    const candidatesCol = app.findCollectionByNameOrId('candidates')

    try {
      app.findFirstRecordByData('candidates', 'email', 'joao.teste@example.com')
      return
    } catch (_) {}

    let user
    try {
      user = app.findAuthRecordByEmail('_pb_users_auth_', 'joao.teste@example.com')
    } catch (_) {
      user = new Record(users)
      user.setEmail('joao.teste@example.com')
      user.setPassword('Skip@Pass')
      user.setVerified(true)
      user.set('name', 'João Teste')
      user.set('role', 'Candidato')
      app.save(user)
    }

    const candidate = new Record(candidatesCol)
    candidate.set('userId', user.id)
    candidate.set('nome', 'João Teste')
    candidate.set('email', 'joao.teste@example.com')
    candidate.set('telefone', '(11) 98765-4321')
    candidate.set('linkedinUrl', 'https://www.linkedin.com/in/joaoteste')
    candidate.set('profissao', 'Médico')
    candidate.set('especialidade', 'Cardiologia')
    candidate.set('experienciaTotal', '5-10 anos')
    candidate.set('experienciaSUS', '1-3 anos')
    candidate.set('telemedicina', 'Sim, tenho experiência')
    candidate.set('canalCaptacao', 'LinkedIn')
    candidate.set('status', 'Captação')
    app.save(candidate)
  },
  (app) => {
    try {
      const candidate = app.findFirstRecordByData('candidates', 'email', 'joao.teste@example.com')
      app.delete(candidate)
    } catch (_) {}
    try {
      const user = app.findAuthRecordByEmail('_pb_users_auth_', 'joao.teste@example.com')
      app.delete(user)
    } catch (_) {}
  },
)
