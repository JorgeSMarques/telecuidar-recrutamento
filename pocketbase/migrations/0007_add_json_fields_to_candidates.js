migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('candidates')

    if (!col.fields.getByName('buscaWeb')) {
      col.fields.add(new JSONField({ name: 'buscaWeb' }))
    }

    if (!col.fields.getByName('formulario')) {
      col.fields.add(new JSONField({ name: 'formulario' }))
    }

    app.save(col)
  },
  (app) => {
    const col = app.findCollectionByNameOrId('candidates')

    col.fields.removeByName('buscaWeb')
    col.fields.removeByName('formulario')

    app.save(col)
  },
)
