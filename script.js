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
    .map((instr) => instr.trim());
  const empathy = document
    .getElementById("empathy")
    .value.trim()
    .split("\n")
    .map((line) => line.trim());
  const clarification = document
    .getElementById("clarification")
    .value.trim()
    .split("\n")
    .map((clar) => clar.trim());
  const refinement = document
    .getElementById("refinement")
    .value.trim()
    .split("\n")
    .map((ref) => ref.trim());
  const boundaries = document
    .getElementById("boundaries")
    .value.trim()
    .split("\n")
    .map((bound) => bound.trim());
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

  // Generar outputs (XML, YAML, JSON, Markdown)
  const xmlOutput = `
<PROMPT>
  <ROLE>
    ${role.map((r) => `    <ROLE>${escapeHtml(r)}</ROLE>`).join("\n    ")}
  </ROLE>
  <CONTEXT>
    ${context.map((c) => `    <CONTEXT>${escapeHtml(c)}</CONTEXT>`).join("\n    ")}
  </CONTEXT>
  <AUDIENCE>
    ${audience.map((a) => `    <AUDIENCE>${escapeHtml(a)}</AUDIENCE>`).join("\n    ")}
  </AUDIENCE>
  <TASKS>
    ${tasks.map((t, i) => `    <TASK prioridad="${i + 1}">${escapeHtml(t)}</TASK>`).join("\n    ")}
  </TASKS>
  <INSTRUCTIONS>
    ${instructions.map((i) => `    <INSTRUCTIONS>${escapeHtml(i)}</INSTRUCTIONS>`).join("\n    ")}
  </INSTRUCTIONS>
  ${empathy.length ? empathy.map((e) => `    <EMPATHY>${escapeHtml(e)}</EMPATHY>`).join("\n    ") : ""}
  <CLARIFICATION>
    ${clarification.map((c) => `    <CLARIFICATION>${escapeHtml(c)}</CLARIFICATION>`).join("\n    ")}
  </CLARIFICATION>
  <REFINEMENT>
    ${refinement.map((r) => `    <REFINEMENT>${escapeHtml(r)}</REFINEMENT>`).join("\n    ")}
  </REFINEMENT>
  <BOUNDARIES>
    ${boundaries.map((b) => `    <BOUNDARY>${escapeHtml(b)}</BOUNDARY>`).join("\n    ")}
  </BOUNDARIES>
  <CONSEQUENCES>
    ${consequences.map((c) => `    <CONSEQUENCES>${escapeHtml(c)}</CONSEQUENCES>`).join("\n    ")}
  </CONSEQUENCES>
  <EXAMPLE>
    ${exampleInput.map((e) => `    <EXAMPLE>${escapeHtml(e)}</EXAMPLE>`).join("\n    ")}
  </EXAMPLE>
</PROMPT>`;

  const yamlOutput = `
PROMPT:
  ROLE:
${role.map((r) => `    - ${escapeHtml(r)}`).join("\n")}
  CONTEXT:
${context.map((c) => `    - ${escapeHtml(c)}`).join("\n")}
  AUDIENCE:
${audience.map((a) => `    - ${escapeHtml(a)}`).join("\n")}
  TASKS:
${tasks.map((t, i) => `    - TASK: ${i + 1}\n      DESCRIPTION: ${escapeHtml(t)}`).join("\n")}
  INSTRUCTIONS:
${instructions.map((i) => `    - ${escapeHtml(i)}`).join("\n")}
  CLARIFICATION:
${clarification.map((c) => `    - ${escapeHtml(c)}`).join("\n")}
  REFINEMENT:
${refinement.map((r) => `    - ${escapeHtml(r)}`).join("\n")}
  BOUNDARIES:
${boundaries.map((b) => `    - ${escapeHtml(b)}`).join("\n")}
  CONSEQUENCES:
${consequences.map((c) => `    - ${escapeHtml(c)}`).join("\n")}
  EXAMPLE:
${exampleInput.map((e) => `    - ${escapeHtml(e)}`).join("\n")}
  ${empathy.length ? `EMPATÍA:\n${empathy.map((e) => `    - ${escapeHtml(e)}`).join("\n")}` : ""}`;

  const jsonOutput = JSON.stringify(
    {
      PROMPT: {
        ROLE: role,
        CONTEXT: context,
        AUDIENCE: audience,
        TASKS: tasks.map((t, i) => ({ PRIORIDAD: i + 1, DESCRIPCIÓN: t })),
        INSTRUCTIONS: instructions,
        CLARIFICATION: clarification,
        REFINEMENT: refinement,
        BOUNDARIES: boundaries,
        CONSEQUENCES: consequences,
        ...(exampleInput.length && { EXAMPLE: { INPUT: exampleInput } }),
        ...(empathy.length && { EMPATÍA: empathy }),
      },
    },
    null,
    2,
  );

  const markdownOutput = `
[PROMPT]
  ROLE:
    ${role.map((r) => `- ${escapeHtml(r)}`).join("\n    ")}
  CONTEXT:
    ${context.map((c) => `- ${escapeHtml(c)}`).join("\n    ")}
  AUDIENCE:
    ${audience.map((a) => `- ${escapeHtml(a)}`).join("\n    ")}
  TASKS:
    ${tasks.map((t, i) => `${i + 1}. ${escapeHtml(t)}`).join("\n    ")}
  INSTRUCTIONS:
    ${instructions.map((i) => `- ${escapeHtml(i)}`).join("\n    ")}
  CLARIFICATION:
    ${clarification.map((c) => `- ${escapeHtml(c)}`).join("\n    ")}
  REFINEMENT:
    ${refinement.map((r) => `- ${escapeHtml(r)}`).join("\n    ")}
  BOUNDARIES:
    ${boundaries.map((b) => `- ${escapeHtml(b)}`).join("\n    ")}
  CONSEQUENCES:
    ${consequences.map((c) => `- ${escapeHtml(c)}`).join("\n    ")}
  EXAMPLE:
    ${exampleInput.map((e) => `- ${escapeHtml(e)}`).join("\n    ")}
  ${empathy.length ? `EMPATÍA:\n    ${empathy.map((e) => `- ${escapeHtml(e)}`).join("\n    ")}` : ""}`;

  // Mostrar resultados
  document.getElementById("xmlEditor").textContent = xmlOutput;
  document.getElementById("yamlEditor").textContent = yamlOutput;
  document.getElementById("jsonEditor").textContent = jsonOutput;
  document.getElementById("markdownEditor").textContent = markdownOutput;

  hljs.highlightAll();
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("generator").classList.add("hidden");
});

// Funciones de exportación e impresión (sin cambios)
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

function printResult(editorId) {
  const editor = document.getElementById(editorId);
  if (!editor) return;
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <html>
      <head>
        <title>Resultados</title>
        <style>
          body { font-family: Arial, sans-serif; background: #fff; color: #333; padding: 20px; }
          pre { white-space: pre-wrap; word-wrap: break-word; }
        </style>
      </head>
      <body><pre>${editor.textContent}</pre></body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

function showNotification(message, type = "info") {
  const container = document.getElementById("notification-container");
  if (!container) return;

  const notification = document.createElement("div");
  notification.className = `notification ${type}`;

  const icons = {
    success: "✅",
    error: "❌",
    info: "ℹ️",
  };
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${icons[type] || icons.info}</span>
      <span class="notification-text">${message}</span>
      <button class="notification-close">×</button>
    </div>
  `;

  container.appendChild(notification);

  // Mostrar notificación
  setTimeout(() => notification.classList.add("show"), 10);

  // Auto-eliminar después de 3 segundos
  const autoRemove = setTimeout(() => {
    removeNotification(notification);
  }, 3000);

  // Botón de cerrar
  notification
    .querySelector(".notification-close")
    .addEventListener("click", () => {
      clearTimeout(autoRemove);
      removeNotification(notification);
    });
}
function removeNotification(notification) {
  notification.classList.remove("show");
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

function copyToClipboard(editorId) {
  const editor = document.getElementById(editorId);
  if (!editor) return;

  navigator.clipboard
    .writeText(editor.textContent)
    .then(() => {
      // ✅ Mostrar notificación de éxito
      showNotification("Copiado al portapapeles", "success");
    })
    .catch((err) => {
      console.error("Error al copiar:", err);
      showNotification("Error al copiar", "error");
    });
}

// Asignar eventos de exportación/imprimir/copiar
["Xml", "Yaml", "Json", "Markdown"].forEach((type) => {
  document
    .getElementById(`export${type}Button`)
    .addEventListener("click", () =>
      exportResult(`${type.toLowerCase()}Editor`),
    );
  document
    .getElementById(`print${type}Button`)
    .addEventListener("click", () =>
      printResult(`${type.toLowerCase()}Editor`),
    );
  document
    .getElementById(`copy${type}Button`)
    .addEventListener("click", () =>
      copyToClipboard(`${type.toLowerCase()}Editor`),
    );
});

// ===== FUNCIÓN GLOBAL DE CAMBIO DE PESTAÑAS =====
function showTab(targetId) {
  const currentTab = document.querySelector(".tab-content:not(.hidden)");
  const targetTab = document.getElementById(targetId);

  if (!targetTab) return;

  // Actualizar botones activos
  document.querySelectorAll("nav button[data-tab]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === targetId);
  });

  if (currentTab === targetTab) return;

  if (currentTab) {
    currentTab.classList.add("fade-out");
    setTimeout(() => {
      currentTab.classList.add("hidden");
      currentTab.classList.remove("fade-out");
      targetTab.classList.remove("hidden");
      targetTab.classList.add("entering");
      setTimeout(() => targetTab.classList.remove("entering"), 500);
    }, 200);
  } else {
    targetTab.classList.remove("hidden");
    targetTab.classList.add("entering");
    setTimeout(() => targetTab.classList.remove("entering"), 500);
  }
}

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
  // Asegurar que solo "information" esté visible
  document.querySelectorAll(".tab-content").forEach((tab) => {
    if (tab.id === "information") tab.classList.remove("hidden");
    else tab.classList.add("hidden");
  });

  // Marcar botón activo
  document
    .querySelector('nav button[data-tab="information"]')
    ?.classList.add("active");

  // Eventos de pestañas
  document.querySelectorAll("nav button[data-tab]").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      showTab(button.dataset.tab);
    });

    button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showTab(button.dataset.tab);
      }
    });
  });

  // Toggle de tema
  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });
});
