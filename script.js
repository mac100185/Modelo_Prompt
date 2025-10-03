// Escapar caracteres especiales
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Cambiar pestañas
document.querySelectorAll('nav button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(button.id.replace('tab-', '')).classList.remove('hidden');
  });
});

// Limpiar campos
document.querySelectorAll('.clear-button').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).value = '';
  });
});

// Generar prompts
document.getElementById('promptForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtener valores
  const role = document.getElementById('role').value.trim();
  const context = document.getElementById('context').value.trim();
  const audience = document.getElementById('audience').value.trim();
  const tasks = document.getElementById('tasks').value.trim().split('\n').map(task => task.trim());
  const boundaries = document.getElementById('boundaries').value.trim().split('\n').map(boundary => boundary.trim());
  const consequences = document.getElementById('consequences').value.trim();
  const exampleInput = document.getElementById('example').value.trim();
  const empathy = document.getElementById('empathy').value.trim();

  // Generar outputs
  const xmlOutput = `
<PROMPT>
  <ROLE>${escapeHtml(role)}</ROLE>
  <CONTEXT>${escapeHtml(context)}</CONTEXT>
  <AUDIENCE>${escapeHtml(audience)}</AUDIENCE>
  <TASKS>
    ${tasks.map((task, index) => `    <TASK prioridad="${index + 1}">${escapeHtml(task)}</TASK>`).join('\n')}
  </TASKS>
  <BOUNDARIES>
    ${boundaries.map(boundary => `    <BOUNDARY>${escapeHtml(boundary)}</BOUNDARY>`).join('\n')}
  </BOUNDARIES>
  <CONSEQUENCES>${escapeHtml(consequences)}</CONSEQUENCIAS>
  ${empathy ? `<EMPATHY>${escapeHtml(empathy)}</EMPATHY>` : ''}
</PROMPT>`;

  const yamlOutput = `
PROMPT:
  ROLE: ${escapeHtml(role)}
  CONTEXT: ${escapeHtml(context)}
  AUDIENCE: ${escapeHtml(audience)}
  TASKS:
${tasks.map((task, index) => `    - PRIORIDAD: ${index + 1}\n      DESCRIPCIÓN: ${escapeHtml(task)}`).join('\n')}
  BOUNDARIES:
${boundaries.map(boundary => `    - ${escapeHtml(boundary)}`).join('\n')}
  CONSECUENCIAS: ${escapeHtml(consequences)}
${empathy ? `
  EMPATÍA: ${escapeHtml(empathy)}` : ''}`;

  const jsonOutput = JSON.stringify({
    PROMPT: {
      ROLE: role,
      CONTEXT: context,
      AUDIENCE: audience,
      TASKS: tasks.map((task, index) => ({ PRIORIDAD: index + 1, DESCRIPCIÓN: task })),
      BOUNDARIES: boundaries,
      CONSECUENCIAS: consequences,
      ...(exampleInput && { EXAMPLE: { INPUT: exampleInput } }),
      ...(empathy && { EMPATÍA: empathy })
    }
  }, null, 2);

  const markdownOutput = `
[PROMPT]
ROLE: ${escapeHtml(role)}
CONTEXT: ${escapeHtml(context)}
AUDIENCE: ${escapeHtml(audience)}
TASKS:
${tasks.map((task, index) => `  ${index + 1}. ${escapeHtml(task)}`).join('\n')}
BOUNDARIES:
${boundaries.map(boundary => `  - ${escapeHtml(boundary)}`).join('\n')}
CONSECUENCIAS: ${escapeHtml(consequences)}
${empathy ? `
EMPATÍA: ${escapeHtml(empathy)}` : ''}`;

  // Mostrar resultados en los paneles
  document.getElementById('xmlEditor').textContent = xmlOutput;
  document.getElementById('yamlEditor').textContent = yamlOutput;
  document.getElementById('jsonEditor').textContent = jsonOutput;
  document.getElementById('markdownEditor').textContent = markdownOutput;

  // Aplicar resaltado de sintaxis
  hljs.highlightAll();

  // Mostrar pestaña de resultados
  document.getElementById('results').classList.remove('hidden');
  document.getElementById('generator').classList.add('hidden');
});

// Exportar resultados
document.getElementById('exportXmlButton').addEventListener('click', () => exportResult('xmlEditor'));
document.getElementById('exportYamlButton').addEventListener('click', () => exportResult('yamlEditor'));
document.getElementById('exportJsonButton').addEventListener('click', () => exportResult('jsonEditor'));
document.getElementById('exportMarkdownButton').addEventListener('click', () => exportResult('markdownEditor'));

function exportResult(editorId) {
  const editor = document.getElementById(editorId);
  if (!editor) return;

  const blob = new Blob([editor.textContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${editorId}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// Imprimir resultados
document.getElementById('printXmlButton').addEventListener('click', () => printResult('xmlEditor'));
document.getElementById('printYamlButton').addEventListener('click', () => printResult('yamlEditor'));
document.getElementById('printJsonButton').addEventListener('click', () => printResult('jsonEditor'));
document.getElementById('printMarkdownButton').addEventListener('click', () => printResult('markdownEditor'));

function printResult(editorId) {
  const editor = document.getElementById(editorId);
  if (!editor) return;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Resultados</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #fff;
            color: #333;
            padding: 20px;
          }
          pre {
            white-space: pre-wrap;
            word-wrap: break-word;
          }
        </style>
      </head>
      <body>
        <pre>${editor.textContent}</pre>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

// Copiar al portapapeles
document.getElementById('copyXmlButton').addEventListener('click', () => copyToClipboard('xmlEditor'));
document.getElementById('copyYamlButton').addEventListener('click', () => copyToClipboard('yamlEditor'));
document.getElementById('copyJsonButton').addEventListener('click', () => copyToClipboard('jsonEditor'));
document.getElementById('copyMarkdownButton').addEventListener('click', () => copyToClipboard('markdownEditor'));

function copyToClipboard(editorId) {
  const editor = document.getElementById(editorId);
  if (!editor) return;

  navigator.clipboard.writeText(editor.textContent).then(() => {
    alert(`Contenido copiado al portapapeles: ${editorId}`);
  }).catch(err => {
    console.error('Error al copiar al portapapeles:', err);
  });
}