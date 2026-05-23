migrate(
  (app) => {
    const users = app.findCollectionByNameOrId('_pb_users_auth_')

    if (!users.fields.getByName('role')) {
      users.fields.add(
        new SelectField({
          name: 'role',
          values: ['Candidato', 'Gerente RH', 'Diretor Técnico'],
          maxSelect: 1,
          required: true,
        }),
      )
    }

    users.listRule = 'id = @request.auth.id'
    users.viewRule = 'id = @request.auth.id'
    users.createRule = ''
    users.updateRule = 'id = @request.auth.id'
    users.deleteRule = null

    app.save(users)
  },
  (app) => {
    const users = app.findCollectionByNameOrId('_pb_users_auth_')

    if (users.fields.getByName('role')) {
      users.fields.removeByName('role')
    }

    // Reset rules to default public fallback for rollback
    users.createRule = null
    app.save(users)
  },
)
