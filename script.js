const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBtn.textContent = nav.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {threshold: 0.12});

document.querySelectorAll(".service-card, .contact-info, .socials").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(el);
});