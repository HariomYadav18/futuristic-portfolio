// Navbar active button - with error handling
const aEls = document.querySelectorAll("nav ul li a");
let navbarEventListeners = new Set();

aEls.forEach((aEl) => {
  const handler = (e) => {
    try {
      const currentActive = document.querySelector(".active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }
      aEl.classList.add("active");
    } catch (error) {
      console.error("Error in navbar active button: ", error);
    }
  };
  navbarEventListeners.add(handler);
  aEl.addEventListener("click", handler);
});

// Cleanup function for navbar
const cleanupNavbar = () => {
  aEls.forEach((aEl) => {
    navbarEventListeners.forEach((handler) => {
      aEl.removeEventListener("click", handler);
    });
  });
};

// Hamburger - with error handling
const menuEl = document.querySelector("#hamburger");
const navEL = document.querySelector("header nav");
let hamburgerEventListeners = new Set();

if (menuEl && navEL) {
  const handler = () => {
    navEL.classList.toggle("checked");
    menuEl.classList.toggle("fa-bars");
    menuEl.classList.toggle("fa-times");
  };
  hamburgerEventListeners.add(handler);
  menuEl.addEventListener("click", handler);
} else {
  console.error("Hamburger menu elements not found");
}

// Cleanup function for hamburger
const cleanupHamburger = () => {
  if (menuEl) {
    hamburgerEventListeners.forEach((handler) => {
      menuEl.removeEventListener("click", handler);
    });
  }
};

// Text Typing - with error handling
let typedInstance = null;
try {
  const textTypeElement = document.querySelector(".text-type");
  if (textTypeElement) {
    typedInstance = new Typed(textTypeElement, {
      strings: [
        "Web Developer",
        "Java Developer",
        "Programmer",
        "Open Source Contributor",
        "Blogger",
        "Youtuber",
      ],
      typeSpeed: 100,
      loop: true,
    });
  } else {
    console.error("Text type element not found");
  }
} catch (error) {
  console.error("Error in text typing: ", error);
}

// Cleanup function for typed.js
const cleanupTyped = () => {
  if (typedInstance) {
    typedInstance.destroy();
  }
};

// Projects filtering - with error handling
let projectsEventListeners = new Set();
try {
  const btnEls = document.querySelectorAll("#projects .menu .btn");
  const projectBoxEls = document.querySelectorAll(".project-box");

  if (btnEls.length && projectBoxEls.length) {
    btnEls.forEach((btn) => {
      const handler = (e) => {
        try {
          const currentActive = document.querySelector(".activeProject");
          if (currentActive) {
            currentActive.classList.remove("activeProject");
          }
          btn.classList.add("activeProject");

          const name = e.target.dataset.name;
          projectBoxEls.forEach((itemEl) => {
            if (itemEl.dataset.name === name || name === "all") {
              itemEl.style.display = "block";
            } else {
              itemEl.style.display = "none";
            }
          });
        } catch (error) {
          console.error("Error in projects filtering: ", error);
        }
      };
      projectsEventListeners.add(handler);
      btn.addEventListener("click", handler);
    });
  }
} catch (error) {
  console.error("Error in projects filtering setup: ", error);
}

// Cleanup function for projects
const cleanupProjects = () => {
  btnEls.forEach((btn) => {
    projectsEventListeners.forEach((handler) => {
      btn.removeEventListener("click", handler);
    });
  });
};

try {
  const contactForm = document.querySelector('form[name="contact"]');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const formData = new FormData(contactForm);
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        // Reset form
        contactForm.reset();
        alert('Message sent successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to send message. Please try again later.');
      }
    });
  }
} catch (error) {
  console.error('Error setting up form submission:', error);
}

// Scroll to Top
const scrollToTopEl = document.querySelector(".scrollToTop");
let scrollEventListeners = new Set();

function goToTop() {
  window.scrollTo(0, 0);
}

// Add event listener for scroll to top
if (scrollToTopEl) {
  const handler = () => {
    goToTop();
  };
  scrollEventListeners.add(handler);
  scrollToTopEl.addEventListener("click", handler);
}

// Cleanup function for scroll to top
const cleanupScrollToTop = () => {
  if (scrollToTopEl) {
    scrollEventListeners.forEach((handler) => {
      scrollToTopEl.removeEventListener("click", handler);
    });
  }
};

// Main cleanup function
const cleanupAll = () => {
  cleanupNavbar();
  cleanupHamburger();
  cleanupTyped();
  cleanupProjects();
  cleanupScrollToTop();
};

// Add cleanup on window unload
window.addEventListener("unload", cleanupAll);

window.onscroll = () => {
  if (window.scrollY > 100) {
    scrollToTopEl.classList.add("activeScrollToTop");
  } else {
    scrollToTopEl.classList.remove("activeScrollToTop");
  }
};

scrollToTopEl.addEventListener("click", goToTop);

// Scroll Reveal Animation
const scrollRev = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 600,
  reset: true,
});

scrollRev.reveal(".home-wrapper h2", { delay: 300 });
scrollRev.reveal(".home-wrapper p", { delay: 300 });
scrollRev.reveal(".home-wrapper .home-logo img", { delay: 600 });
scrollRev.reveal(".home-wrapper .fa-instagram", { delay: 600 });
scrollRev.reveal(".home-wrapper .fa-blogger", { delay: 700 });
scrollRev.reveal(".home-wrapper .fa-linkedin", { delay: 800 });
scrollRev.reveal(".home-wrapper .fa-youtube", { delay: 900 });
scrollRev.reveal(".home-wrapper .fa-telegram", { delay: 1000 });
scrollRev.reveal(".home-wrapper .fa-github", { delay: 1200 });
scrollRev.reveal(".home-wrapper button", { delay: 1200 });

scrollRev.reveal(".about-wrapper h1", { delay: 200 });
scrollRev.reveal(".about-wrapper .about-logo", { delay: 400 });
scrollRev.reveal(".about-wrapper .about-content h2", { delay: 500 });
scrollRev.reveal(".about-wrapper .about-content h4", { delay: 600 });
scrollRev.reveal(".about-wrapper .about-content p", { delay: 700 });
scrollRev.reveal(".about-wrapper .about-content span", { delay: 800 });
scrollRev.reveal(".about-wrapper .about-content button", { delay: 900 });

scrollRev.reveal(".education-wrapper h1", { delay: 200 });
scrollRev.reveal(".education-wrapper .box", { interval: 400 });

scrollRev.reveal(".skills-wrapper h1", { delay: 200 });
scrollRev.reveal(".skills-wrapper .skills-container .skill", { interval: 200 });

scrollRev.reveal(".experience-wrapper h1", { delay: 200 });
scrollRev.reveal(".experience-wrapper .experience-container .experience-box", {
  interval: 300,
});

scrollRev.reveal(".projects-wrapper h1", { delay: 200 });
scrollRev.reveal(".projects-wrapper .menu button", { interval: 200 });
scrollRev.reveal(".projects-wrapper .projects-container .project-box", {
  interval: 150,
});

// scrollRev.reveal(".contact-wrapper h1", { delay: 200 });
// scrollRev.reveal(".contact-wrapper .left-side div", { interval: 100 });
// scrollRev.reveal(".contact-wrapper .right-side .topic-text", { delay: 200 });
// scrollRev.reveal(".contact-wrapper .right-side p", { delay: 200 });
// scrollRev.reveal(".contact-wrapper .right-side form div", { interval: 300 });