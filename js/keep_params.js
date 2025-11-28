// fixes intellij reload on save (CURRENTLY UNUSED)
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    let params = window.location.search;

    document.querySelectorAll("a[href]").forEach((link) => {
      const url = new URL(link.href);

      if (url.origin !== window.location.origin) return; // don't affect external links

      params = new URLSearchParams(params);
      url.search = params.toString();
      link.href = url.toString();
    });
  });
})();
