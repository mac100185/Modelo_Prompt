// ia-search.js

let activeCategory = null;

function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.add("hidden");
  });
  document.getElementById(tabId).classList.remove("hidden");
}

function initTabs() {
  document.querySelectorAll("nav button[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      showTab(btn.dataset.tab);
    });
  });
}

function initSearch() {
  const categories = [...new Set(allAIs.map((ai) => ai.category))].sort();
  const filtersContainer = document.getElementById("categoryFilters");
  filtersContainer.innerHTML = categories
    .map(
      (cat) =>
        `<button class="filter-btn" data-category="${cat}">${cat}</button>`,
    )
    .join("");

  filtersContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      const btn = e.target;
      const cat = btn.dataset.category;
      activeCategory = activeCategory === cat ? null : cat;
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      if (activeCategory) btn.classList.add("active");
      renderResults();
    }
  });

  document
    .getElementById("searchInput")
    .addEventListener("input", renderResults);
  renderResults(); // Mostrar top 20 al inicio
}

function renderResults() {
  const query =
    document.getElementById("searchInput")?.value?.toLowerCase() || "";
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

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initSearch();
});
