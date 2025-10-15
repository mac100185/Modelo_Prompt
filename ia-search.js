// ia-search.js - Corregido para no interferir con la navegación principal
let activeCategory = null;

function initSearch() {
  const categories = [...new Set(allAIs.map((ai) => ai.category))].sort();
  const filtersContainer = document.getElementById("categoryFilters");
  if (!filtersContainer) {
    console.error("No se encontró categoryFilters");
    return;
  }

  filtersContainer.innerHTML = categories
    .map(
      (cat) =>
        `<button type="button" class="filter-btn" data-category="${cat}">${cat}</button>`,
    )
    .join("");

  filtersContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      const btn = e.target;
      const cat = btn.dataset.category;

      // Toggle de categoría
      if (activeCategory === cat) {
        activeCategory = null;
      } else {
        activeCategory = cat;
      }

      // Actualizar estados visuales
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("active");
      });

      if (activeCategory) {
        btn.classList.add("active");
      }

      renderResults();
    }
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", renderResults);
  } else {
    console.error("No se encontró searchInput");
  }

  renderResults(); // Mostrar top 20 al inicio
}

function renderResults() {
  const searchInput = document.getElementById("searchInput");
  const query = searchInput?.value?.toLowerCase() || "";
  const results = allAIs.filter((ai) => {
    const matchesText =
      ai.name.toLowerCase().includes(query) ||
      ai.description.toLowerCase().includes(query);
    const matchesCategory = activeCategory
      ? ai.category === activeCategory
      : true;
    return matchesText && matchesCategory;
  });

  const top20 = results.slice(0, 20);
  const listEl = document.getElementById("iaList");
  if (!listEl) return;

  if (top20.length === 0) {
    listEl.innerHTML = "<p>No se encontraron resultados.</p>";
  } else {
    listEl.innerHTML = top20
      .map(
        (ai) => `
      <div class="ia-item">
        <h3>${ai.name}</h3>
        <p>${ai.description}</p>
        <div class="category">${ai.category}</div>
        <a href="${ai.url}" target="_blank" rel="noopener noreferrer">Visitar →</a>
      </div>
    `,
      )
      .join("");
  }
}

// Solo inicializa la búsqueda, NO las pestañas
document.addEventListener("DOMContentLoaded", () => {
  initSearch();
});
