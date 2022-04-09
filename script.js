const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
        else {
            if (entry.target.classList.contains("fade-out")) {
                entry.target.classList.remove("active");
            }
        }
    }
}, { threshold: 0.2 });
document.querySelectorAll(".fade-in").forEach(element => observer.observe(element));
