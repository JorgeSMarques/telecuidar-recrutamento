migrate(
  (app) => {
    const candidates = new Collection({
      name: 'candidates',
      type: 'base',
      listRule:
        "@request.auth.id != '' && (userId = @request.auth.id || @request.auth.role = 'Gerente RH' || @request.auth.role = 'Diretor Técnico')",
      viewRule:
        "@request.auth.id != '' && (userId = @request.auth.id || @request.auth.role = 'Gerente RH' || @request.auth.role = 'Diretor Técnico')",
      createRule: "@request.auth.id != '' && userId = @request.auth.id",
      updateRule: "@request.auth.id != '' && userId = @request.auth.id",
      deleteRule: null,
      fields: [
        {
          name: 'userId',
          type: 'relation',
          required: true,
          collectionId: '_pb_users_auth_',
          cascadeDelete: true,
          maxSelect: 1,
        },
        { name: 'nome', type: 'text', required: true, max: 100 },
        { name: 'email', type: 'email', required: true },
        { name: 'telefone', type: 'text' },
        { name: 'linkedinUrl', type: 'url' },
        {
          name: 'profissao',
          type: 'select',
          values: ['Médico', 'Enfermeiro', 'Psicólogo', 'Nutricionista', 'Fisioterapeuta', 'Outro'],
          maxSelect: 1,
        },
        { name: 'especialidade', type: 'text' },
        {
          name: 'experienciaTotal',
          type: 'select',
          values: ['Menos de 2 anos', '2-5 anos', '5-10 anos', '10-15 anos', 'Mais de 15 anos'],
          maxSelect: 1,
        },
        {
          name: 'experienciaSUS',
          type: 'select',
          values: ['Nenhuma', 'Menos de 1 ano', '1-3 anos', '3-5 anos', 'Mais de 5 anos'],
          maxSelect: 1,
        },
        { name: 'descricaoSUS', type: 'text', max: 500 },
        {
          name: 'telemedicina',
          type: 'select',
          values: ['Nenhuma', 'Sim, tenho experiência'],
          maxSelect: 1,
        },
        { name: 'descricaoTelemedicina', type: 'text', max: 500 },
        {
          name: 'canalCaptacao',
          type: 'select',
          values: [
            'LinkedIn',
            'Google Ads',
            'Instagram',
            'E-mail',
            'Contato Direto',
            'Comunidade/Associação',
            'Parceria',
            'Outro',
          ],
          maxSelect: 1,
        },
        { name: 'especifiqueOutro', type: 'text' },
        {
          name: 'status',
          type: 'select',
          values: [
            'Captação',
            'Manifestação Pendente',
            'Avaliação Pendente',
            'Busca Web Pendente',
            'Avaliação RH Pendente',
            'Avaliação RH Concluída',
            'Aprovação Diretor Pendente',
            'Aprovado',
            'Rejeitado',
            'Contratado',
          ],
          maxSelect: 1,
        },
        { name: 'dataCaptura', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'dataManifestacao', type: 'date' },
        { name: 'dataAvaliacao', type: 'date' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: [
        'CREATE INDEX idx_candidates_userId ON candidates (userId)',
        'CREATE UNIQUE INDEX idx_candidates_email ON candidates (email)',
        'CREATE INDEX idx_candidates_status ON candidates (status)',
        'CREATE INDEX idx_candidates_dataCaptura ON candidates (dataCaptura)',
      ],
    })
    app.save(candidates)

    const manifestacoes = new Collection({
      name: 'manifestacoes',
      type: 'base',
      listRule:
        "@request.auth.id != '' && (candidatoId.userId = @request.auth.id || @request.auth.role = 'Gerente RH' || @request.auth.role = 'Diretor Técnico')",
      viewRule:
        "@request.auth.id != '' && (candidatoId.userId = @request.auth.id || @request.auth.role = 'Gerente RH' || @request.auth.role = 'Diretor Técnico')",
      createRule: "@request.auth.id != '' && candidatoId.userId = @request.auth.id",
      updateRule: "@request.auth.id != '' && candidatoId.userId = @request.auth.id",
      deleteRule: null,
      fields: [
        {
          name: 'candidatoId',
          type: 'relation',
          required: true,
          collectionId: candidates.id,
          cascadeDelete: true,
          maxSelect: 1,
        },
        { name: 'confirmado', type: 'bool' },
        { name: 'telefone', type: 'text' },
        { name: 'mensagem', type: 'text', max: 300 },
        { name: 'dataConfirmacao', type: 'date' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: ['CREATE INDEX idx_manifestacoes_candidatoId ON manifestacoes (candidatoId)'],
    })
    app.save(manifestacoes)

    const avaliacoes = new Collection({
      name: 'avaliacoes',
      type: 'base',
      listRule:
        "@request.auth.id != '' && (candidatoId.userId = @request.auth.id || @request.auth.role = 'Gerente RH' || @request.auth.role = 'Diretor Técnico')",
      viewRule:
        "@request.auth.id != '' && (candidatoId.userId = @request.auth.id || @request.auth.role = 'Gerente RH' || @request.auth.role = 'Diretor Técnico')",
      createRule: "@request.auth.id != '' && candidatoId.userId = @request.auth.id",
      updateRule:
        "@request.auth.id != '' && (candidatoId.userId = @request.auth.id || @request.auth.role = 'Gerente RH' || @request.auth.role = 'Diretor Técnico')",
      deleteRule: null,
      fields: [
        {
          name: 'candidatoId',
          type: 'relation',
          required: true,
          collectionId: candidates.id,
          cascadeDelete: true,
          maxSelect: 1,
        },
        { name: 'respostasLikert', type: 'json' },
        { name: 'respostasAbertas', type: 'json' },
        { name: 'notaAlinhamento', type: 'number', min: 0, max: 10 },
        { name: 'justificativaAlinhamento', type: 'text' },
        { name: 'notaCompetencia', type: 'number', min: 0, max: 10 },
        { name: 'justificativaCompetencia', type: 'text' },
        {
          name: 'recomendacao',
          type: 'select',
          values: ['Recomendado', 'Não Recomendado'],
          maxSelect: 1,
        },
        { name: 'observacoes', type: 'text' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: ['CREATE INDEX idx_avaliacoes_candidatoId ON avaliacoes (candidatoId)'],
    })
    app.save(avaliacoes)

    const interviews = new Collection({
      name: 'interviews',
      type: 'base',
      listRule:
        "@request.auth.id != '' && (candidatoId.userId = @request.auth.id || @request.auth.role = 'Gerente RH' || @request.auth.role = 'Diretor Técnico')",
      viewRule:
        "@request.auth.id != '' && (candidatoId.userId = @request.auth.id || @request.auth.role = 'Gerente RH' || @request.auth.role = 'Diretor Técnico')",
      createRule:
        "@request.auth.id != '' && (@request.auth.role = 'Gerente RH' || @request.auth.role = 'Diretor Técnico')",
      updateRule:
        "@request.auth.id != '' && (@request.auth.role = 'Gerente RH' || @request.auth.role = 'Diretor Técnico')",
      deleteRule: null,
      fields: [
        {
          name: 'candidatoId',
          type: 'relation',
          required: true,
          collectionId: candidates.id,
          cascadeDelete: true,
          maxSelect: 1,
        },
        { name: 'dataAgendada', type: 'date' },
        { name: 'horarioAgendado', type: 'text' },
        { name: 'emailConfirmacao', type: 'email' },
        { name: 'criarCalendar', type: 'bool' },
        { name: 'enviarWhatsApp', type: 'bool' },
        { name: 'linkMeet', type: 'url' },
        { name: 'realizada', type: 'bool' },
        { name: 'aprovacaoFinal', type: 'bool' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: ['CREATE INDEX idx_interviews_candidatoId ON interviews (candidatoId)'],
    })
    app.save(interviews)
  },
  (app) => {
    app.delete(app.findCollectionByNameOrId('interviews'))
    app.delete(app.findCollectionByNameOrId('avaliacoes'))
    app.delete(app.findCollectionByNameOrId('manifestacoes'))
    app.delete(app.findCollectionByNameOrId('candidates'))
  },
)
