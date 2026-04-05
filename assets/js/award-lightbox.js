(function () {
  var dialog = document.getElementById("award-lightbox");
  if (!dialog || typeof dialog.showModal !== "function") return;

  var img = dialog.querySelector(".award-lightbox__img");
  var closeBtn = document.getElementById("award-lightbox-close");
  if (!img || !closeBtn) return;

  function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt || "";
    dialog.showModal();
    document.body.classList.add("award-lightbox-open");
    closeBtn.focus();
  }

  function closeLightbox() {
    dialog.close();
    img.removeAttribute("src");
    img.alt = "";
    document.body.classList.remove("award-lightbox-open");
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".award-lightbox-trigger");
    if (!btn) return;
    var src = btn.getAttribute("data-lightbox-src");
    if (!src) return;
    e.preventDefault();
    var alt = btn.getAttribute("data-lightbox-alt") || "";
    openLightbox(src, alt);
  });

  closeBtn.addEventListener("click", function () {
    closeLightbox();
  });

  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) closeLightbox();
  });

  dialog.addEventListener("close", function () {
    img.removeAttribute("src");
    img.alt = "";
    document.body.classList.remove("award-lightbox-open");
  });
})();
