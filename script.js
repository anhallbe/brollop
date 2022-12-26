const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
        else {
            // entry.target.classList.remove("active");
        }
    }
}, { threshold: 0.1 });
document.querySelectorAll(".fade-in").forEach(element => observer.observe(element));
function startGallery(gallery) {
    setInterval(showNext, 5000);
    function showNext() {
        const hasNext = gallery.scrollLeft + gallery.clientWidth !== gallery.scrollWidth;
        if (hasNext) {
            gallery.scrollBy({
                behavior: "smooth",
                left: gallery.clientWidth,
            });
        }
        else {
            gallery.scrollTo({
                behavior: "smooth",
                left: 0,
            });
        }
    }
}
startGallery(document.querySelector(".gallery"));
