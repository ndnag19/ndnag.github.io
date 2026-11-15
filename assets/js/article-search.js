document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-article-search]");
  if (!form) return;

  const input = form.querySelector("input[type='search']");
  const items = Array.from(document.querySelectorAll("[data-article-item]"));
  const status = document.querySelector("[data-search-status]");
  const emptyState = document.querySelector("[data-search-empty]");
  const queryLabel = document.querySelector("[data-search-query]");

  const filterArticles = () => {
    const query = input.value.trim().toLocaleLowerCase();
    let visibleCount = 0;

    items.forEach((item) => {
      const searchableText = (item.dataset.search || "").toLocaleLowerCase();
      const matches = !query || searchableText.includes(query);
      item.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    status.textContent = query
      ? `${visibleCount} ${visibleCount === 1 ? "article" : "articles"} found.`
      : `Showing all ${items.length} ${items.length === 1 ? "article" : "articles"}.`;
    emptyState.hidden = !query || visibleCount > 0;
    queryLabel.textContent = input.value.trim();
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    filterArticles();
  });
  input.addEventListener("input", filterArticles);
  filterArticles();
});
