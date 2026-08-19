// =========================
// LIGHT / DARK MODE
// =========================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");


// Check saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");

  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
}


// Toggle theme
themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {

    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");

    localStorage.setItem("theme", "light");

  } else {

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

    localStorage.setItem("theme", "dark");

  }

});

// =========================
// TYPING EFFECT
// =========================

const typingText = document.querySelector(".typing-text");

const texts = [
  "Full stack Node.js",
  "Frontend Developer",
  "React Developer",
  "Web Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeEffect() {

  const currentText = texts[textIndex];

  if (!isDeleting) {

    typingText.textContent =
      currentText.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentText.length) {

      isDeleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }

  } else {

    typingText.textContent =
      currentText.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      isDeleting = false;

      textIndex++;

      if (textIndex === texts.length) {
        textIndex = 0;
      }
    }
  }

  setTimeout(
    typeEffect,
    isDeleting ? 70 : 120
  );
}

typeEffect();
///skill

const skills = document.querySelectorAll(".skill");
const leftBtn = document.querySelector(".slider.left");
const rightBtn = document.querySelector(".slider.right");

let currentPage = 0;

const skillsPerPage = 3;

function showSkills() {

  skills.forEach((skill, index) => {

    const start = currentPage * skillsPerPage;
    const end = start + skillsPerPage;

    if (index >= start && index < end) {
      skill.style.display = "block";
    } else {
      skill.style.display = "none";
    }

  });

}

rightBtn.addEventListener("click", () => {

  if (currentPage < 1) {
    currentPage++;
    showSkills();
  }

});

leftBtn.addEventListener("click", () => {

  if (currentPage > 0) {
    currentPage--;
    showSkills();
  }

});

showSkills();


// Set skill percentages
document.querySelectorAll(".circle").forEach(circle => {
  const percent = circle.dataset.percent;
  circle.style.setProperty("--percent", percent);
});

// Active navbar link while scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 180;
    if (window.scrollY >= top) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// Smooth navigation
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
