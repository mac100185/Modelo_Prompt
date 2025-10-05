// Escapar caracteres especiales
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Limpiar campos
document.querySelectorAll(".clear-button").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    document.getElementById(targetId).value = "";
  });
});

// Generar prompts
document.getElementById("promptForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtener valores
  const role = document
    .getElementById("role")
    .value.trim()
    .split("\n")
    .map((line) => line.trim());
  const context = document
    .getElementById("context")
    .value.trim()
    .split("\n")
    .map((line) => line.trim());
  const audience = document
    .getElementById("audience")
    .value.trim()
    .split("\n")
    .map((line) => line.trim());
  const tasks = document
    .getElementById("tasks")
    .value.trim()
    .split("\n")
    .map((task) => task.trim());
  const instructions = document
    .getElementById("instructions")
    .value.trim()
    .split("\n")
    .map((instructions) => instructions.trim());
  const empathy = document
    .getElementById("empathy")
    .value.trim()
    .split("\n")
    .map((line) => line.trim());
  const clarification = document
    .getElementById("clarification")
    .value.trim()
    .split("\n")
    .map((clarification) => clarification.trim());
  const refinement = document
    .getElementById("refinement")
    .value.trim()
    .split("\n")
    .map((refinement) => refinement.trim());
  const boundaries = document
    .getElementById("boundaries")
    .value.trim()
    .split("\n")
    .map((boundary) => boundary.trim());
  const consequences = document
    .getElementById("consequences")
    .value.trim()
    .split("\n")
    .map((line) => line.trim());
  const exampleInput = document
    .getElementById("example")
    .value.trim()
    .split("\n")
    .map((line) => line.trim());
  // Generar outputs
  // XML
  const xmlOutput = `
<PROMPT>
  <ROLE>
    ${role.map((role) => `    <ROLE>${escapeHtml(role)}</ROLE>`).join("\n    ")}
  </ROLE>
  <CONTEXT>
    ${context.map((context) => `    <CONTEXT>${escapeHtml(context)}</CONTEXT>`).join("\n    ")}
  </CONTEXT>
  <AUDIENCE>
    ${audience.map((audience) => `    <AUDIENCE>${escapeHtml(audience)}</AUDIENCE>`).join("\n    ")}
  </AUDIENCE>
  <TASKS>
    ${tasks.map((task, index) => `    <TASK prioridad="${index + 1}">${escapeHtml(task)}</TASK>`).join("\n    ")}
  </TASKS>
  <INSTRUCTIONS>
    ${instructions.map((instructions) => `    <INSTRUCTIONS>${escapeHtml(instructions)}</INSTRUCTIONS>`).join("\n    ")}
  </INSTRUCTIONS>
    ${empathy.map((empathy) => `    <EMPATHY>${escapeHtml(empathy)}</EMPATHY>`).join("\n    ")}
  <CLARIFICATION>
    ${clarification.map((clarification) => `    <CLARIFICATION>${escapeHtml(clarification)}</CLARIFICATION>`).join("\n    ")}
  </CLARIFICATION>
  <REFINEMENT>
    ${refinement.map((refinement) => `    <REFINEMENT>${escapeHtml(refinement)}</REFINEMENT>`).join("\n    ")}
  </REFINEMENT>
  <BOUNDARIES>
    ${boundaries.map((boundary) => `    <BOUNDARY>${escapeHtml(boundary)}</BOUNDARY>`).join("\n    ")}
  </BOUNDARIES>
  <CONSEQUENCES>
    ${consequences.map((consequences) => `    <CONSEQUENCES>${escapeHtml(consequences)}</CONSEQUENCES>`).join("\n    ")}
  </CONSEQUENCES>
  <EXAMPLE>
    ${exampleInput.map((exampleInput) => `    <EXAMPLE>${escapeHtml(exampleInput)}</EXAMPLE>`).join("\n    ")}
  </EXAMPLE>
</PROMPT>`;

  //YAML
  const yamlOutput = `
PROMPT:
  ROLE:
${role.map((role) => `    - ${escapeHtml(role)}`).join("\n")}
  CONTEXT:
${context.map((context) => `    - ${escapeHtml(context)}`).join("\n")}
  AUDIENCE:
${audience.map((audience) => `    - ${escapeHtml(audience)}`).join("\n")}
  TASKS:
${tasks.map((task, index) => `    - TASK: ${index + 1}\n      DESCRIPTION: ${escapeHtml(task)}`).join("\n")}
  INSTRUCTIONS:
${instructions.map((instructions) => `    - ${escapeHtml(instructions)}`).join("\n")}
  CLARIFICATION:
${clarification.map((clarification) => `    - ${escapeHtml(clarification)}`).join("\n")}
  REFINEMENT:
${refinement.map((refinement) => `    - ${escapeHtml(refinement)}`).join("\n")}
  BOUNDARIES:
${boundaries.map((boundary) => `    - ${escapeHtml(boundary)}`).join("\n")}
  CONSEQUENCES:
${consequences.map((consequences) => `    - ${escapeHtml(consequences)}`).join("\n")}
  EXAMPLE:
${exampleInput.map((exampleInput) => `    - ${escapeHtml(exampleInput)}`).join("\n")}
  EMPATÍA:
${empathy.map((empathy) => `    - ${escapeHtml(empathy)}`).join("\n")}`;

  // JSON
  const jsonOutput = JSON.stringify(
    {
      PROMPT: {
        ROLE: role,
        CONTEXT: context,
        AUDIENCE: audience,
        TASKS: tasks.map((task, index) => ({
          PRIORIDAD: index + 1,
          DESCRIPCIÓN: task,
        })),
        INSTRUCTIONS: instructions,
        CLARIFICATION: clarification,
        REFINEMENT: refinement,
        BOUNDARIES: boundaries,
        CONSECUENCIAS: consequences,
        ...(exampleInput && { EXAMPLE: { INPUT: exampleInput } }),
        ...(empathy && { EMPATÍA: empathy }),
      },
    },
    null,
    2,
  );
  // MARKDOWN
  const markdownOutput = `
[PROMPT]
  ROLE:
    ${role.map((role) => `  - ${escapeHtml(role)}`).join("\n    ")}
  CONTEXT:
    ${context.map((context) => `  - ${escapeHtml(context)}`).join("\n    ")}
  AUDIENCE:
    ${audience.map((audience) => `  - ${escapeHtml(audience)}`).join("\n    ")}
  TASKS:
    ${tasks.map((task, index) => `  TASK: ${index + 1}. ${escapeHtml(task)}`).join("\n    ")}
  INSTRUCTIONS:
    ${instructions.map((instructions) => `  - ${escapeHtml(instructions)}`).join("\n    ")}
  CLARIFICATION:
    ${clarification.map((clarification) => `  - ${escapeHtml(clarification)}`).join("\n    ")}
  REFINEMENT:
    ${refinement.map((refinement) => `  - ${escapeHtml(refinement)}`).join("\n    ")}
  BOUNDARIES:
    ${boundaries.map((boundary) => `  - ${escapeHtml(boundary)}`).join("\n    ")}
  CONSEQUENCES:
    ${consequences.map((consequences) => `  - ${escapeHtml(consequences)}`).join("\n    ")}
  EXAMPLE:
    ${exampleInput.map((exampleInput) => `  - ${escapeHtml(exampleInput)}`).join("\n    ")}
  EMPATÍA:
    ${empathy.map((empathy) => `  - ${escapeHtml(empathy)}`).join("\n    ")}`;

  // Mostrar resultados en los paneles
  document.getElementById("xmlEditor").textContent = xmlOutput;
  document.getElementById("yamlEditor").textContent = yamlOutput;
  document.getElementById("jsonEditor").textContent = jsonOutput;
  document.getElementById("markdownEditor").textContent = markdownOutput;

  // Aplicar resaltado de sintaxis
  hljs.highlightAll();

  // Mostrar pestaña de resultados
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("generator").classList.add("hidden");
});

// Exportar resultados
document
  .getElementById("exportXmlButton")
  .addEventListener("click", () => exportResult("xmlEditor"));
document
  .getElementById("exportYamlButton")
  .addEventListener("click", () => exportResult("yamlEditor"));
document
  .getElementById("exportJsonButton")
  .addEventListener("click", () => exportResult("jsonEditor"));
document
  .getElementById("exportMarkdownButton")
  .addEventListener("click", () => exportResult("markdownEditor"));

function exportResult(editorId) {
  const editor = document.getElementById(editorId);
  if (!editor) return;

  const blob = new Blob([editor.textContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${editorId}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// Imprimir resultados
document
  .getElementById("printXmlButton")
  .addEventListener("click", () => printResult("xmlEditor"));
document
  .getElementById("printYamlButton")
  .addEventListener("click", () => printResult("yamlEditor"));
document
  .getElementById("printJsonButton")
  .addEventListener("click", () => printResult("jsonEditor"));
document
  .getElementById("printMarkdownButton")
  .addEventListener("click", () => printResult("markdownEditor"));

function printResult(editorId) {
  const editor = document.getElementById(editorId);
  if (!editor) return;

  const printWindow = window.open("", "_blank");
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
document
  .getElementById("copyXmlButton")
  .addEventListener("click", () => copyToClipboard("xmlEditor"));
document
  .getElementById("copyYamlButton")
  .addEventListener("click", () => copyToClipboard("yamlEditor"));
document
  .getElementById("copyJsonButton")
  .addEventListener("click", () => copyToClipboard("jsonEditor"));
document
  .getElementById("copyMarkdownButton")
  .addEventListener("click", () => copyToClipboard("markdownEditor"));

function copyToClipboard(editorId) {
  const editor = document.getElementById(editorId);
  if (!editor) return;

  navigator.clipboard
    .writeText(editor.textContent)
    .then(() => {
      alert(`Contenido copiado al portapapeles: ${editorId}`);
    })
    .catch((err) => {
      console.error("Error al copiar al portapapeles:", err);
    });
}
//-----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Asegurar que solo "information" esté visible al inicio
  document.querySelectorAll(".tab-content").forEach((tab) => {
    if (tab.id !== "information") tab.classList.add("hidden");
  });

  // Cambiar pestañas
  document.querySelectorAll("nav button[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.tab;

      // Ocultar todas
      document.querySelectorAll(".tab-content").forEach((tab) => {
        if (tab.id === targetId) {
          tab.classList.remove("hidden");
        } else {
          tab.classList.add("hidden");
        }
      });
    });
  });

  // Toggle de tema
  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });
});
