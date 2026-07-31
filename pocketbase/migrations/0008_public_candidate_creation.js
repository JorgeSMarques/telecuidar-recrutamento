migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('candidates')

    const userIdField = col.fields.getByName('userId')
    if (userIdField) {
      userIdField.required = false
    }

    app.save(col)
  },
  (app) => {
    const col = app.findCollectionByNameOrId('candidates')

    const userIdField = col.fields.getByName('userId')
    if (userIdField) {
      userIdField.required = true
    }

    app.save(col)
  },
)
