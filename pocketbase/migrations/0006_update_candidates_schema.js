migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId('candidates')

    const nomeField = collection.fields.getByName('nome')
    if (nomeField) {
      nomeField.required = false
    }

    const emailField = collection.fields.getByName('email')
    if (emailField) {
      emailField.required = false
    }

    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('candidates')

    const nomeField = collection.fields.getByName('nome')
    if (nomeField) {
      nomeField.required = true
    }

    const emailField = collection.fields.getByName('email')
    if (emailField) {
      emailField.required = true
    }

    app.save(collection)
  },
)
