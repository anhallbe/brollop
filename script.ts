function startGallery(gallery: HTMLElement) {
  setInterval(showNext, 5000);

  function showNext() {
    const hasNext =
      gallery.scrollLeft + gallery.clientWidth !== gallery.scrollWidth;
    if (hasNext) {
      gallery.scrollBy({
        behavior: "smooth",
        left: gallery.clientWidth,
      });
    } else {
      gallery.scrollTo({
        behavior: "smooth",
        left: 0,
      });
    }
  }
}

startGallery(document.querySelector(".gallery"));
