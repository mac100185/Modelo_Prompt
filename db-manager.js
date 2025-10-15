// db-manager.js - Gestor de base de datos IndexedDB para Modelo_Pront
// © 2025 Alan Mac-Arthur García Díaz

class PromptDB {
  constructor() {
    this.dbName = "ModeloProntDB";
    this.version = 1;
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Crear store para prompts
        if (!db.objectStoreNames.contains("prompts")) {
          const store = db.createObjectStore("prompts", {
            keyPath: "id",
            autoIncrement: true,
          });

          // Índices para búsqueda eficiente
          store.createIndex("name", "name", { unique: false });
          store.createIndex("category", "category", { unique: false });
          store.createIndex("createdAt", "createdAt", { unique: false });
          store.createIndex("tags", "tags", {
            unique: false,
            multiEntry: true,
          });
        }
      };
    });
  }

  async savePrompt(promptData) {
    if (!this.db) {
      throw new Error("Base de datos no inicializada");
    }

    const transaction = this.db.transaction(["prompts"], "readwrite");
    const store = transaction.objectStore("prompts");

    const now = new Date().toISOString();
    const prompt = {
      ...promptData,
      createdAt: now,
      updatedAt: now,
      version: "1.0",
    };

    return new Promise((resolve, reject) => {
      const request = store.add(prompt);
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async updatePrompt(id, promptData) {
    if (!this.db) {
      throw new Error("Base de datos no inicializada");
    }

    const transaction = this.db.transaction(["prompts"], "readwrite");
    const store = transaction.objectStore("prompts");

    return new Promise(async (resolve, reject) => {
      try {
        // Obtener el prompt existente
        const getRequest = store.get(id);
        getRequest.onsuccess = () => {
          const existingPrompt = getRequest.result;
          if (!existingPrompt) {
            reject(new Error("Prompt no encontrado"));
            return;
          }

          // Actualizar con nuevos datos
          const updatedPrompt = {
            ...existingPrompt,
            ...promptData,
            id: id, // Mantener el ID original
            createdAt: existingPrompt.createdAt, // Mantener fecha de creación
            updatedAt: new Date().toISOString(),
          };

          const putRequest = store.put(updatedPrompt);
          putRequest.onsuccess = () => {
            resolve(id);
          };
          putRequest.onerror = () => reject(putRequest.error);
        };
        getRequest.onerror = () => reject(getRequest.error);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getAllPrompts() {
    if (!this.db) {
      throw new Error("Base de datos no inicializada");
    }

    const transaction = this.db.transaction(["prompts"], "readonly");
    const store = transaction.objectStore("prompts");

    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => {
        const prompts = request.result.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
        );
        resolve(prompts);
      };
      request.onerror = () => reject(request.error);
    });
  }

  async getPromptById(id) {
    if (!this.db) {
      throw new Error("Base de datos no inicializada");
    }

    const transaction = this.db.transaction(["prompts"], "readonly");
    const store = transaction.objectStore("prompts");

    return new Promise((resolve, reject) => {
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async deletePrompt(id) {
    if (!this.db) {
      throw new Error("Base de datos no inicializada");
    }

    const transaction = this.db.transaction(["prompts"], "readwrite");
    const store = transaction.objectStore("prompts");

    return new Promise((resolve, reject) => {
      const request = store.delete(id);
      request.onsuccess = () => {
        resolve(true);
      };
      request.onerror = () => reject(request.error);
    });
  }

  async searchPrompts(query) {
    if (!query || query.trim() === "") {
      return await this.getAllPrompts();
    }

    const allPrompts = await this.getAllPrompts();
    const lowerQuery = query.toLowerCase().trim();

    return allPrompts.filter(
      (prompt) =>
        prompt.name?.toLowerCase().includes(lowerQuery) ||
        prompt.description?.toLowerCase().includes(lowerQuery) ||
        prompt.category?.toLowerCase().includes(lowerQuery) ||
        prompt.role?.toLowerCase().includes(lowerQuery) ||
        prompt.context?.toLowerCase().includes(lowerQuery) ||
        prompt.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery)),
    );
  }

  async getPromptsByCategory(category) {
    if (!this.db) {
      throw new Error("Base de datos no inicializada");
    }

    const transaction = this.db.transaction(["prompts"], "readonly");
    const store = transaction.objectStore("prompts");
    const index = store.index("category");

    return new Promise((resolve, reject) => {
      const request = index.getAll(category);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async getCategories() {
    const allPrompts = await this.getAllPrompts();
    const categories = [
      ...new Set(
        allPrompts
          .map((prompt) => prompt.category)
          .filter((cat) => cat && cat.trim() !== ""),
      ),
    ].sort();

    return categories;
  }

  async exportAllPrompts() {
    const prompts = await this.getAllPrompts();
    const exportData = {
      exportDate: new Date().toISOString(),
      version: "1.0",
      source: "Modelo_Pront",
      totalPrompts: prompts.length,
      prompts: prompts,
    };

    return JSON.stringify(exportData, null, 2);
  }

  async importPrompts(jsonData) {
    try {
      const data =
        typeof jsonData === "string" ? JSON.parse(jsonData) : jsonData;

      if (!data.prompts || !Array.isArray(data.prompts)) {
        throw new Error("Formato de archivo inválido");
      }

      const results = {
        imported: 0,
        skipped: 0,
        errors: [],
      };

      for (const promptData of data.prompts) {
        try {
          // Crear una copia limpia sin el ID para evitar conflictos
          const { id, ...cleanPromptData } = promptData;
          cleanPromptData.importedAt = new Date().toISOString();

          await this.savePrompt(cleanPromptData);
          results.imported++;
        } catch (error) {
          console.error("Error al importar prompt:", error);
          results.errors.push({
            name: promptData.name || "Sin nombre",
            error: error.message,
          });
          results.skipped++;
        }
      }

      return results;
    } catch (error) {
      throw new Error(
        "Error al procesar archivo de importación: " + error.message,
      );
    }
  }

  async getStorageInfo() {
    if (!navigator.storage || !navigator.storage.estimate) {
      return null;
    }

    try {
      const estimate = await navigator.storage.estimate();
      const prompts = await this.getAllPrompts();

      return {
        used: estimate.usage,
        available: estimate.quota,
        usedMB: Math.round((estimate.usage / 1024 / 1024) * 100) / 100,
        availableMB: Math.round((estimate.quota / 1024 / 1024) * 100) / 100,
        totalPrompts: prompts.length,
        usagePercentage: Math.round((estimate.usage / estimate.quota) * 100),
      };
    } catch (error) {
      console.error("Error al obtener información de almacenamiento:", error);
      return null;
    }
  }

  async clearAllData() {
    if (!this.db) {
      throw new Error("Base de datos no inicializada");
    }

    const transaction = this.db.transaction(["prompts"], "readwrite");
    const store = transaction.objectStore("prompts");

    return new Promise((resolve, reject) => {
      const request = store.clear();
      request.onsuccess = () => {
        console.log("Todos los prompts han sido eliminados");
        resolve(true);
      };
      request.onerror = () => reject(request.error);
    });
  }
}

// Instancia global
const promptDB = new PromptDB();

// Inicializar automáticamente cuando se carga el script
document.addEventListener("DOMContentLoaded", async () => {
  try {
    await promptDB.init();

    // Disparar evento personalizado para notificar que la BD está lista
    const event = new CustomEvent("promptDBReady", {
      detail: { database: promptDB },
    });
    document.dispatchEvent(event);
  } catch (error) {
    console.error("Error al inicializar PromptDB:", error);

    // Disparar evento de error
    const errorEvent = new CustomEvent("promptDBError", {
      detail: { error: error.message },
    });
    document.dispatchEvent(errorEvent);
  }
});
