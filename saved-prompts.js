// saved-prompts.js - Manejador de prompts guardados para Modelo_Pront
// © 2025 Alan Mac-Arthur García Díaz

class SavedPromptsManager {
  constructor() {
    this.currentPromptId = null;
    this.isEditMode = false;
    this.init();
  }

  async init() {
    // Esperar a que la base de datos esté lista
    document.addEventListener("promptDBReady", () => {
      setTimeout(() => {
        this.setupEventListeners();
        this.refreshPromptsList();
      }, 100);
    });

    // Si ya está listo, inicializar directamente
    if (window.promptDB && window.promptDB.db) {
      setTimeout(() => {
        this.setupEventListeners();
        this.refreshPromptsList();
      }, 100);
    }
  }

  setupEventListeners() {
    // Botón para guardar prompt
    const saveButton = document.getElementById("savePromptButton");
    if (saveButton) {
      saveButton.addEventListener("click", () => {
        this.showSaveModal();
      });
    }

    // Modal de guardar prompt
    document.getElementById("confirm-save")?.addEventListener("click", () => {
      this.savePrompt();
    });

    document.getElementById("cancel-save")?.addEventListener("click", () => {
      this.hideSaveModal();
    });

    // Búsqueda y filtros
    document.getElementById("prompt-search")?.addEventListener("input", (e) => {
      this.searchPrompts(e.target.value);
    });

    document
      .getElementById("category-filter")
      ?.addEventListener("change", (e) => {
        this.filterByCategory(e.target.value);
      });

    document
      .getElementById("refresh-prompts")
      ?.addEventListener("click", () => {
        this.refreshPromptsList();
      });

    // Botones de gestión
    document
      .getElementById("export-all-prompts")
      ?.addEventListener("click", () => {
        this.exportAllPrompts();
      });

    document.getElementById("import-prompts")?.addEventListener("click", () => {
      document.getElementById("import-file").click();
    });

    document.getElementById("import-file")?.addEventListener("change", (e) => {
      this.importPrompts(e.target.files[0]);
    });

    document
      .getElementById("clear-all-prompts")
      ?.addEventListener("click", () => {
        this.showClearAllModal();
      });

    // Modales de confirmación
    document.getElementById("confirm-delete")?.addEventListener("click", () => {
      this.deletePrompt();
    });

    document.getElementById("cancel-delete")?.addEventListener("click", () => {
      this.hideDeleteModal();
    });

    document
      .getElementById("confirm-clear-all")
      ?.addEventListener("click", () => {
        this.clearAllPrompts();
      });

    document
      .getElementById("cancel-clear-all")
      ?.addEventListener("click", () => {
        this.hideClearAllModal();
      });

    document
      .getElementById("clear-confirmation")
      ?.addEventListener("input", (e) => {
        const confirmBtn = document.getElementById("confirm-clear-all");
        confirmBtn.disabled = e.target.value !== "ELIMINAR TODO";
      });

    // Modal de detalles
    document
      .getElementById("load-prompt-to-form")
      ?.addEventListener("click", () => {
        this.loadPromptToForm();
      });

    document.getElementById("edit-prompt")?.addEventListener("click", () => {
      this.editPrompt();
    });

    document
      .getElementById("delete-prompt-details")
      ?.addEventListener("click", () => {
        this.showDeleteModalFromDetails();
      });

    document
      .getElementById("close-prompt-details")
      ?.addEventListener("click", () => {
        this.hideModal("prompt-details-modal");
      });

    // Cerrar modales
    document.querySelectorAll(".close-modal").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const modalId = e.target.getAttribute("data-modal");
        this.hideModal(modalId);
      });
    });

    // Cerrar modales con overlay
    document.getElementById("modal-overlay")?.addEventListener("click", () => {
      this.hideAllModals();
    });

    // Cerrar modales con ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.hideAllModals();
      }
    });
  }

  // ===== GESTIÓN DE PROMPTS =====

  async savePrompt() {
    const name = document.getElementById("prompt-name").value.trim();
    if (!name) {
      this.showNotification("El nombre del prompt es requerido", "error");
      return;
    }

    try {
      const promptData = this.getCurrentFormData();
      promptData.name = name;
      promptData.description = document
        .getElementById("prompt-description")
        .value.trim();
      promptData.category = document
        .getElementById("prompt-category")
        .value.trim();
      promptData.tags = document
        .getElementById("prompt-tags")
        .value.split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      let promptId;
      if (this.isEditMode && this.currentPromptId) {
        promptId = await promptDB.updatePrompt(
          this.currentPromptId,
          promptData,
        );
        this.showNotification("Prompt actualizado exitosamente", "success");
        this.isEditMode = false;
        this.currentPromptId = null;
      } else {
        promptId = await promptDB.savePrompt(promptData);
        this.showNotification("Prompt guardado exitosamente", "success");
      }

      this.hideSaveModal();
      this.refreshPromptsList();
      this.updateStorageInfo();
    } catch (error) {
      console.error("Error al guardar prompt:", error);
      this.showNotification("Error al guardar el prompt", "error");
    }
  }

  async deletePrompt() {
    if (!this.currentPromptId) return;

    try {
      await promptDB.deletePrompt(this.currentPromptId);
      this.showNotification("Prompt eliminado exitosamente", "success");
      this.hideDeleteModal();
      this.hideModal("prompt-details-modal");
      this.refreshPromptsList();
      this.updateStorageInfo();
      this.currentPromptId = null;
    } catch (error) {
      console.error("Error al eliminar prompt:", error);
      this.showNotification("Error al eliminar el prompt", "error");
    }
  }

  async clearAllPrompts() {
    try {
      await promptDB.clearAllData();
      this.showNotification("Todos los prompts han sido eliminados", "success");
      this.hideClearAllModal();
      this.refreshPromptsList();
      this.updateStorageInfo();
    } catch (error) {
      console.error("Error al limpiar prompts:", error);
      this.showNotification("Error al limpiar los prompts", "error");
    }
  }

  async loadPromptById(id) {
    try {
      const prompt = await promptDB.getPromptById(id);
      if (prompt) {
        this.loadPromptDataToForm(prompt);
        this.showTab("generator");
        this.hideModal("prompt-details-modal");
        this.showNotification("Prompt cargado en el formulario", "success");
      }
    } catch (error) {
      console.error("Error al cargar prompt:", error);
      this.showNotification("Error al cargar el prompt", "error");
    }
  }

  // ===== INTERFAZ DE USUARIO =====

  async refreshPromptsList() {
    try {
      // Resetear filtros
      const searchInput = document.getElementById("prompt-search");
      const categoryFilter = document.getElementById("category-filter");

      if (searchInput) searchInput.value = "";
      if (categoryFilter) categoryFilter.value = "";

      // Obtener todos los prompts y actualizar la UI
      const prompts = await promptDB.getAllPrompts();
      this.updateCategoryFilter(prompts);
      this.updateStorageInfo();

      // Usar searchPrompts con query vacía para renderizar todos los prompts
      // Esto mantiene la funcionalidad de búsqueda activa
      await this.searchPrompts("");
    } catch (error) {
      console.error("Error al cargar prompts:", error);
      this.showNotification("Error al cargar los prompts", "error");
    }
  }

  renderPromptsList(prompts) {
    const container = document.getElementById("saved-prompts-list");
    if (!container) return;

    if (prompts.length === 0) {
      container.innerHTML = `
                <div class="no-prompts-message">
                    <h3>📝 No tienes prompts guardados</h3>
                    <p>Genera un prompt y haz clic en "⭐ Guardar Prompt" para comenzar tu colección.</p>
                </div>
            `;
      return;
    }

    const promptsHtml = prompts
      .map((prompt) => this.createPromptCard(prompt))
      .join("");
    container.innerHTML = promptsHtml;

    // Agregar event listeners a las tarjetas
    prompts.forEach((prompt) => {
      this.attachCardEventListeners(prompt.id);
    });
  }

  createPromptCard(prompt) {
    const date = new Date(prompt.updatedAt).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const tagsHtml = prompt.tags?.length
      ? prompt.tags
          .slice(0, 3)
          .map(
            (tag) =>
              `<span class="prompt-card-tag">${this.escapeHtml(tag)}</span>`,
          )
          .join("")
      : "";

    const moreTagsText =
      prompt.tags?.length > 3
        ? `<span class="prompt-card-tag">+${prompt.tags.length - 3}</span>`
        : "";

    return `
            <div class="prompt-card" data-prompt-id="${prompt.id}">
                <div class="prompt-card-header">
                    <h3 class="prompt-card-title">${this.escapeHtml(prompt.name)}</h3>
                    <span class="prompt-card-date">${date}</span>
                </div>
                ${
                  prompt.description
                    ? `<p class="prompt-card-description">${this.escapeHtml(prompt.description)}</p>`
                    : ""
                }
                <div class="prompt-card-meta">
                    ${
                      prompt.category
                        ? `<span class="prompt-card-category">${this.escapeHtml(prompt.category)}</span>`
                        : ""
                    }
                    ${tagsHtml}
                    ${moreTagsText}
                </div>
                <div class="prompt-card-actions">
                    <button class="load-btn" onclick="savedPrompts.loadPromptById(${prompt.id})">
                        📝 Cargar
                    </button>
                    <button class="secondary-btn" onclick="savedPrompts.showPromptDetails(${prompt.id})">
                        👁️ Ver
                    </button>
                    <button class="delete-btn" onclick="savedPrompts.showDeleteModal(${prompt.id}, '${this.escapeHtml(prompt.name)}')">
                        🗑️
                    </button>
                </div>
            </div>
        `;
  }

  attachCardEventListeners(promptId) {
    const card = document.querySelector(`[data-prompt-id="${promptId}"]`);
    if (card) {
      card.addEventListener("click", (e) => {
        // Solo mostrar detalles si se hace clic en la tarjeta, no en los botones
        if (e.target.tagName !== "BUTTON") {
          this.showPromptDetails(promptId);
        }
      });
    }
  }

  async updateCategoryFilter(prompts) {
    const categories = [
      ...new Set(
        prompts.map((p) => p.category).filter((c) => c && c.trim() !== ""),
      ),
    ].sort();

    const filterSelect = document.getElementById("category-filter");
    if (filterSelect) {
      const currentValue = filterSelect.value;
      filterSelect.innerHTML = '<option value="">Todas las categorías</option>';

      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        filterSelect.appendChild(option);
      });

      filterSelect.value = currentValue;
    }
  }

  async updateStorageInfo() {
    const info = await promptDB.getStorageInfo();
    const container = document.getElementById("storage-info");

    if (container && info) {
      const prompts = await promptDB.getAllPrompts();
      container.innerHTML = `
                <span id="prompts-count">${prompts.length} prompts guardados</span>
                <span>• ${info.usedMB} MB usados de ${info.availableMB} MB</span>
            `;
    } else if (container) {
      const prompts = await promptDB.getAllPrompts();
      container.innerHTML = `<span id="prompts-count">${prompts.length} prompts guardados</span>`;
    }
  }

  // ===== BÚSQUEDA Y FILTROS =====

  async searchPrompts(query) {
    try {
      const prompts = await promptDB.searchPrompts(query);
      this.renderPromptsList(prompts);
    } catch (error) {
      console.error("Error en la búsqueda:", error);
    }
  }

  async filterByCategory(category) {
    try {
      let prompts;
      if (category) {
        prompts = await promptDB.getPromptsByCategory(category);
      } else {
        prompts = await promptDB.getAllPrompts();
      }
      this.renderPromptsList(prompts);
    } catch (error) {
      console.error("Error al filtrar:", error);
    }
  }

  // ===== IMPORTAR/EXPORTAR =====

  async exportAllPrompts() {
    try {
      const jsonData = await promptDB.exportAllPrompts();
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `modelo-pront-prompts-${new Date().toISOString().split("T")[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      this.showNotification("Prompts exportados exitosamente", "success");
    } catch (error) {
      console.error("Error al exportar:", error);
      this.showNotification("Error al exportar los prompts", "error");
    }
  }

  async importPrompts(file) {
    if (!file) return;

    try {
      const text = await file.text();
      const results = await promptDB.importPrompts(text);

      let message = `Importación completada: ${results.imported} prompts importados`;
      if (results.skipped > 0) {
        message += `, ${results.skipped} omitidos`;
      }

      this.showNotification(
        message,
        results.errors.length > 0 ? "info" : "success",
      );
      this.refreshPromptsList();

      if (results.errors.length > 0) {
        console.warn("Errores durante la importación:", results.errors);
      }
    } catch (error) {
      console.error("Error al importar:", error);
      this.showNotification("Error al importar los prompts", "error");
    }

    // Limpiar el input
    document.getElementById("import-file").value = "";
  }

  // ===== MODALES =====

  showSaveModal() {
    // Limpiar campos si no estamos editando
    if (!this.isEditMode) {
      document.getElementById("prompt-name").value = "";
      document.getElementById("prompt-description").value = "";
      document.getElementById("prompt-category").value = "";
      document.getElementById("prompt-tags").value = "";
    }

    this.showModal("save-prompt-modal");
    document.getElementById("prompt-name").focus();
  }

  hideSaveModal() {
    this.isEditMode = false;
    this.currentPromptId = null;
    this.hideModal("save-prompt-modal");
  }

  showDeleteModal(promptId, promptName) {
    this.currentPromptId = promptId;
    document.getElementById("delete-prompt-name").textContent = promptName;
    this.showModal("confirm-delete-modal");
  }

  hideDeleteModal() {
    this.currentPromptId = null;
    this.hideModal("confirm-delete-modal");
  }

  showClearAllModal() {
    document.getElementById("clear-confirmation").value = "";
    document.getElementById("confirm-clear-all").disabled = true;
    this.showModal("confirm-clear-all-modal");
  }

  hideClearAllModal() {
    this.hideModal("confirm-clear-all-modal");
  }

  async showPromptDetails(promptId) {
    try {
      const prompt = await promptDB.getPromptById(promptId);
      if (!prompt) return;

      this.currentPromptId = promptId;
      document.getElementById("details-prompt-name").textContent = prompt.name;

      const detailsContent = this.createPromptDetailsHtml(prompt);
      document.getElementById("prompt-details-content").innerHTML =
        detailsContent;

      this.showModal("prompt-details-modal");
    } catch (error) {
      console.error("Error al mostrar detalles:", error);
      this.showNotification("Error al cargar los detalles", "error");
    }
  }

  showDeleteModalFromDetails() {
    this.hideModal("prompt-details-modal");
    const prompt = document.getElementById("details-prompt-name").textContent;
    this.showDeleteModal(this.currentPromptId, prompt);
  }

  showModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById("modal-overlay");

    if (modal && overlay) {
      overlay.classList.remove("hidden");
      modal.classList.remove("hidden");

      // Forzar reflow antes de agregar clase show
      overlay.offsetHeight;
      modal.offsetHeight;

      overlay.classList.add("show");
      modal.classList.add("show");
    }
  }

  hideModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById("modal-overlay");

    if (modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 300);
    }

    if (overlay) {
      overlay.classList.remove("show");
      setTimeout(() => {
        overlay.classList.add("hidden");
      }, 300);
    }
  }

  hideAllModals() {
    document.querySelectorAll(".modal.show").forEach((modal) => {
      const modalId = modal.id;
      this.hideModal(modalId);
    });
  }

  // ===== FORMULARIO =====

  getCurrentFormData() {
    return {
      role: document.getElementById("role")?.value || "",
      context: document.getElementById("context")?.value || "",
      audience: document.getElementById("audience")?.value || "",
      tasks: document.getElementById("tasks")?.value || "",
      instructions: document.getElementById("instructions")?.value || "",
      empathy: document.getElementById("empathy")?.value || "",
      clarification: document.getElementById("clarification")?.value || "",
      limits: document.getElementById("limits")?.value || "",
      examples: document.getElementById("examples")?.value || "",
    };
  }

  loadPromptDataToForm(prompt) {
    const fields = [
      "role",
      "context",
      "audience",
      "tasks",
      "instructions",
      "empathy",
      "clarification",
      "limits",
      "examples",
    ];

    fields.forEach((field) => {
      const element = document.getElementById(field);
      if (element && prompt[field]) {
        element.value = prompt[field];
      }
    });
  }

  loadPromptToForm() {
    this.loadPromptById(this.currentPromptId);
  }

  editPrompt() {
    this.isEditMode = true;
    this.hideModal("prompt-details-modal");

    // Cargar datos en el modal de guardado
    promptDB.getPromptById(this.currentPromptId).then((prompt) => {
      if (prompt) {
        document.getElementById("prompt-name").value = prompt.name || "";
        document.getElementById("prompt-description").value =
          prompt.description || "";
        document.getElementById("prompt-category").value =
          prompt.category || "";
        document.getElementById("prompt-tags").value =
          prompt.tags?.join(", ") || "";

        this.showSaveModal();

        // Cambiar el texto del botón
        const saveBtn = document.getElementById("confirm-save");
        const originalText = saveBtn.textContent;
        saveBtn.textContent = "✏️ Actualizar";

        // Restaurar texto original después de cerrar
        const originalHide = this.hideSaveModal.bind(this);
        this.hideSaveModal = () => {
          saveBtn.textContent = originalText;
          this.hideSaveModal = originalHide;
          originalHide();
        };
      }
    });
  }

  // ===== UTILIDADES =====

  createPromptDetailsHtml(prompt) {
    const sections = [
      { key: "role", title: "Rol del LLM", value: prompt.role },
      { key: "context", title: "Contexto", value: prompt.context },
      { key: "audience", title: "Audiencia", value: prompt.audience },
      { key: "tasks", title: "Tareas", value: prompt.tasks },
      {
        key: "instructions",
        title: "Instrucciones",
        value: prompt.instructions,
      },
      { key: "empathy", title: "Empatía y Tono", value: prompt.empathy },
      {
        key: "clarification",
        title: "Clarificación",
        value: prompt.clarification,
      },
      { key: "limits", title: "Límites y Consecuencias", value: prompt.limits },
      { key: "examples", title: "Ejemplos", value: prompt.examples },
    ];

    let html = "";

    // Información general
    html += `
            <div class="detail-section">
                <h4>📝 Información General</h4>
                <p><strong>Nombre:</strong> ${this.escapeHtml(prompt.name)}</p>
                ${prompt.description ? `<p><strong>Descripción:</strong> ${this.escapeHtml(prompt.description)}</p>` : ""}
                ${prompt.category ? `<p><strong>Categoría:</strong> ${this.escapeHtml(prompt.category)}</p>` : ""}
                ${prompt.tags?.length ? `<p><strong>Tags:</strong> ${prompt.tags.map((tag) => this.escapeHtml(tag)).join(", ")}</p>` : ""}
                <p><strong>Creado:</strong> ${new Date(prompt.createdAt).toLocaleString("es-ES")}</p>
                <p><strong>Actualizado:</strong> ${new Date(prompt.updatedAt).toLocaleString("es-ES")}</p>
            </div>
        `;

    // Contenido del prompt
    sections.forEach((section) => {
      if (section.value && section.value.trim()) {
        html += `
                    <div class="detail-section">
                        <h4>${section.title}</h4>
                        <p>${this.escapeHtml(section.value).replace(/\n/g, "<br>")}</p>
                    </div>
                `;
      }
    });

    return html;
  }

  showTab(tabId) {
    // Usar la función global si existe
    if (typeof showTab === "function") {
      showTab(tabId);
    } else {
      // Implementación básica si no existe la función global
      document.querySelectorAll(".tab-content").forEach((tab) => {
        tab.classList.add("hidden");
      });
      const targetTab = document.getElementById(tabId);
      if (targetTab) {
        targetTab.classList.remove("hidden");
      }
    }
  }

  showNotification(message, type = "info") {
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
                <span class="notification-text">${this.escapeHtml(message)}</span>
                <button class="notification-close">×</button>
            </div>
        `;

    container.appendChild(notification);

    // Mostrar notificación
    setTimeout(() => notification.classList.add("show"), 10);

    // Auto-eliminar después de 5 segundos
    const autoRemove = setTimeout(() => {
      this.removeNotification(notification);
    }, 5000);

    // Botón de cerrar
    notification
      .querySelector(".notification-close")
      .addEventListener("click", () => {
        clearTimeout(autoRemove);
        this.removeNotification(notification);
      });
  }

  removeNotification(notification) {
    notification.classList.remove("show");
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }

  escapeHtml(text) {
    if (typeof text !== "string") return "";
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Crear instancia global cuando DOM esté listo
let savedPrompts;

document.addEventListener("DOMContentLoaded", () => {
  savedPrompts = new SavedPromptsManager();
});

// Exportar para uso en otros módulos si es necesario
if (typeof module !== "undefined" && module.exports) {
  module.exports = SavedPromptsManager;
}
