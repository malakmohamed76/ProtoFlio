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
  // "Full stack Node.js",
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
// ///skill

// const skills = document.querySelectorAll(".skill");
// const leftBtn = document.querySelector(".slider.left");
// const rightBtn = document.querySelector(".slider.right");

// let currentPage = 0;

// const skillsPerPage = 3;

// function showSkills() {

//   skills.forEach((skill, index) => {

//     const start = currentPage * skillsPerPage;
//     const end = start + skillsPerPage;

//     if (index >= start && index < end) {
//       skill.style.display = "block";
//     } else {
//       skill.style.display = "none";
//     }

//   });

// }

// rightBtn.addEventListener("click", () => {

//   if (currentPage < 1) {
//     currentPage++;
//     showSkills();
//   }

// });

// leftBtn.addEventListener("click", () => {

//   if (currentPage > 0) {
//     currentPage--;
//     showSkills();
//   }

// });

// showSkills();


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


////////////////////////////////////////

const projects = [
  {
    title: "QuickCart E-Commerce",
    category: "E-Commerce",
    image: "images/project1 (2).png",
    link: "https://malakmohamed76.github.io/QuickCart-E-Commerce",

    challenge:
      "Build a responsive e-commerce website with an organized product browsing experience and smooth shopping flow.",

    action:
      "Developed product pages, product details, authentication, shopping cart, favorites, search functionality and responsive layouts.",

    result:
      "Delivered a complete responsive shopping experience with an organized front-end structure.",

    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
  },

  {
    title: "Shopery E-Commerce",
    category: "E-Commerce",
    image: "images/proj2.png",
    link: "https://malakmohamed76.github.io/Shopery-project/",

    challenge:
      "Create a modern online store interface based on a professional e-commerce design.",

    action:
      "Built responsive product sections, navigation, categories and shopping-oriented interfaces using Bootstrap.",

    result:
      "Created a clean and responsive e-commerce interface suitable for desktop and mobile users.",

    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"]
  },

  {
    title: "DecorNest",
    category: "Bootstrap Website",
    image: "images/proj3.png",
    link: "https://malakmohamed76.github.io/DecorNest/",

    challenge:
      "Build a modern interior design website with a clean visual structure.",

    action:
      "Developed responsive sections, navigation, content layouts and modern UI components using Bootstrap.",

    result:
      "Delivered a responsive and visually organized website for an interior design concept.",

    tech: ["HTML5", "CSS3", "Bootstrap"]
  },

  {
    title: "DigitalPro",
    category: "Tailwind CSS",
    image: "images/proj4.png",
    link: "https://malakmohamed76.github.io/DigitalPro-Tailwind-/",

    challenge:
      "Create a modern digital business landing page with a responsive layout.",

    action:
      "Built the complete interface using Tailwind CSS with responsive sections and reusable styling patterns.",

    result:
      "Delivered a clean responsive landing page optimized for different screen sizes.",

    tech: ["HTML5", "CSS3", "Tailwind CSS"]
  },

  {
    title: "Luxestate",
    category: "Responsive UI",
    image: "images/proj5.png",
    link: "https://malakmohamed76.github.io/luxestate-/",

    challenge:
      "Design a professional real estate interface with a clear content structure.",

    action:
      "Implemented responsive layouts, property sections, navigation and modern UI styling.",

    result:
      "Created a professional responsive real estate website interface.",

    tech: ["HTML5", "CSS3", "Bootstrap"]
  },

  {
    title: "HealthEra",
    category: "Responsive UI",
    image: "images/proj6.png",
    link: "https://malakmohamed76.github.io/HealthEra/",

    challenge:
      "Build a modern healthcare website interface that works across different devices.",

    action:
      "Developed responsive sections, navigation and structured healthcare content using modern front-end techniques.",

    result:
      "Delivered a clean and responsive healthcare website interface.",

    tech: ["HTML5", "CSS3", "Bootstrap"]
  }
];


let currentProject = 0;


/* =========================
   ELEMENTS
========================= */

const projectCard = document.querySelector(".project-card");

const prevBtn = document.getElementById("prevProject");

const nextBtn = document.getElementById("nextProject");

const dots = document.querySelectorAll(".project-dot");


/* =========================
   RENDER PROJECT
========================= */

function renderProject(index) {

  const project = projects[index];

  projectCard.innerHTML = `

    <div class="project-image">

      <a
        href="${project.link}"
        target="_blank"
      >

        <img
          src="${project.image}"
          alt="${project.title}"
        />

      </a>

    </div>


    <div class="project-content">

      <div class="project-header">

        <h3>
          ${project.title}
        </h3>

        <span class="project-category">
          ${project.category}
        </span>

      </div>


      <div class="project-detail">

        <div class="project-detail-title challenge-title">

          <i class="fa-solid fa-circle-exclamation"></i>

          Challenge

        </div>

        <p>
          ${project.challenge}
        </p>

      </div>


      <div class="project-detail">

        <div class="project-detail-title action-title">

          <i class="fa-solid fa-screwdriver-wrench"></i>

          Action

        </div>

        <p>
          ${project.action}
        </p>

      </div>


      <div class="project-detail">

        <div class="project-detail-title result-title">

          <i class="fa-solid fa-circle-check"></i>

          Result

        </div>

        <p>
          ${project.result}
        </p>

      </div>


      <div class="project-tech">

        ${project.tech
          .map(
            tech => `
              <span class="tech-tag">
                ${tech}
              </span>
            `
          )
          .join("")}

      </div>


      <div class="project-footer">

        <a
          href="${project.link}"
          target="_blank"
          class="view-code"
        >

          <i class="fa-solid fa-arrow-up-right-from-square"></i>

          View Project

        </a>

      </div>

    </div>
  `;


  /* Update dots */

  dots.forEach((dot, i) => {

    dot.classList.toggle(
      "active",
      i === index
    );

  });

}


/* =========================
   NEXT
========================= */

nextBtn.addEventListener("click", () => {

  currentProject++;

  if (currentProject >= projects.length) {
    currentProject = 0;
  }

  renderProject(currentProject);

});


/* =========================
   PREVIOUS
========================= */

prevBtn.addEventListener("click", () => {

  currentProject--;

  if (currentProject < 0) {
    currentProject = projects.length - 1;
  }

  renderProject(currentProject);

});


/* =========================
   DOTS
========================= */

dots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    currentProject = index;

    renderProject(currentProject);

  });

});


/* =========================
   INITIAL PROJECT
========================= */

renderProject(0);
