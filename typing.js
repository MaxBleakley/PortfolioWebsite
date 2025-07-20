// typing.js
document.addEventListener("DOMContentLoaded", () => {
  const el   = document.getElementById("typed");
  const text = el.getAttribute("data-text");
  let i = 0;

  (function type() {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(type, 100);
    }
  })();
});
