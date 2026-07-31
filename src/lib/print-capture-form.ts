function fieldRow(label: string, placeholder = ''): string {
  return `
    <div class="field-row">
      <span class="field-label">${label}</span>
      <span class="field-value">${placeholder ? `<span class="placeholder">${placeholder}</span>` : ''}</span>
    </div>`
}

function section(title: string, rows: string): string {
  return `
    <section class="form-section">
      <h2>${title}</h2>
      <div class="fields-grid">${rows}</div>
    </section>`
}

export function printCaptureForm(): void {
  const today = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  const personalData = section(
    'Dados Pessoais',
    fieldRow('Nome') + fieldRow('E-mail') + fieldRow('Telefone') + fieldRow('LinkedIn'),
  )

  const profession = section(
    'Profissão e Especialidade',
    fieldRow('Profissão') + fieldRow('Especialidade') + fieldRow('Experiência Total'),
  )

  const susExp = section(
    'Experiência no SUS',
    fieldRow('Tempo de Experiência') +
      `<div class="field-row field-row--full">
        <span class="field-label">Descrição da Experiência</span>
        <span class="field-value"><span class="placeholder multiline"></span></span>
      </div>`,
  )

  const telemed = section(
    'Experiência em Telemedicina',
    fieldRow('Experiência') +
      `<div class="field-row field-row--full">
        <span class="field-label">Descrição da Experiência</span>
        <span class="field-value"><span class="placeholder multiline"></span></span>
      </div>`,
  )

  const channel = section(
    'Canal de Captação',
    fieldRow('Canal') + fieldRow('Especifique o Canal (se Outro)'),
  )

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Formulário de Captação – Telecuidar</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #1a1a1a;
      line-height: 1.6;
      padding: 32px;
      max-width: 800px;
      margin: 0 auto;
    }
    .print-header {
      text-align: center;
      border-bottom: 3px solid #0d9488;
      padding-bottom: 16px;
      margin-bottom: 32px;
    }
    .print-header h1 {
      font-size: 24px;
      font-weight: 700;
      color: #0f766e;
      letter-spacing: -0.02em;
    }
    .print-header p {
      font-size: 14px;
      color: #64748b;
      margin-top: 4px;
    }
    .form-section {
      margin-bottom: 28px;
      break-inside: avoid;
    }
    .form-section h2 {
      font-size: 16px;
      font-weight: 600;
      color: #0f766e;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 8px;
      margin-bottom: 16px;
    }
    .fields-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px 24px;
    }
    .field-row { display: flex; flex-direction: column; gap: 4px; }
    .field-row--full { grid-column: 1 / -1; }
    .field-label {
      font-size: 12px;
      font-weight: 600;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .field-value {
      min-height: 28px;
      border-bottom: 1px solid #cbd5e1;
      display: flex;
      align-items: flex-end;
    }
    .placeholder {
      width: 100%;
      color: #94a3b8;
      font-size: 14px;
      padding-bottom: 2px;
    }
    .placeholder.multiline {
      min-height: 72px;
      border-bottom: none;
    }
    .print-footer {
      margin-top: 48px;
      padding-top: 16px;
      border-top: 1px solid #e2e8f0;
      text-align: center;
      font-size: 12px;
      color: #94a3b8;
    }
    @media print {
      body { padding: 16px; max-width: none; }
      @page { margin: 1.5cm; }
    }
    @media (max-width: 640px) {
      body { padding: 16px; }
      .fields-grid { grid-template-columns: 1fr; }
      .print-header h1 { font-size: 20px; }
    }
  </style>
</head>
<body>
  <div class="print-header">
    <h1>Formulário de Captação – Telecuidar</h1>
    <p>Plataforma de Recrutamento de Profissionais de Saúde</p>
  </div>
  ${personalData}
  ${profession}
  ${susExp}
  ${telemed}
  ${channel}
  <div class="print-footer">
    Gerado em ${today}
  </div>
  <script>
    window.onload = function() { setTimeout(function() { window.print(); }, 300); };
  </script>
</body>
</html>`

  const printWindow = window.open('', '_blank')
  if (!printWindow) {
    alert('Por favor, permita pop-ups para baixar o formulário.')
    return
  }
  printWindow.document.open()
  printWindow.document.write(html)
  printWindow.document.close()
}
