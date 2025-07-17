document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for Products link
  const productsLink = document.querySelector(".nav-link.Products");
  const productsSection = document.getElementById("products-section");

  productsLink.addEventListener("click", function (e) {
    e.preventDefault();
    productsSection.scrollIntoView({ behavior: "smooth" });
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));

      void link.offsetWidth;

      link.classList.add("active");

      setTimeout(() => {
        link.classList.remove("active");
      }, 500);
    });
  });
});

// card animation
window.addEventListener("DOMContentLoaded", () => {
  const isReturningFromSameSite = document.referrer.includes(location.host);

  const nav = document.querySelector(".NavBar");
  const main = document.querySelector(".MainContent");
  const learnBtn = document.querySelector(".LearnMoreBtn");
  const contBtn = document.querySelector(".ContinueBtn");

  if (!isReturningFromSameSite) {
    nav.classList.add("animate-fade-in");
    setTimeout(() => main.classList.add("animate-slide-up"), 400);
    setTimeout(() => {
      learnBtn.classList.add("animate-fade-in");
      contBtn.classList.add("animate-fade-in");
    }, 800);
  } else {
    [nav, main, learnBtn, contBtn].forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }

  const cards = document.querySelectorAll(".Card1, .Card2");

  const cardObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-visible");
          observer.unobserve(entry.target); // Only once
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of card is in view
    }
  );

  cards.forEach((card) => cardObserver.observe(card));
});
const cards = document.querySelectorAll(".Card1, .Card2"); // Add more classes if needed

const cardObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add delay per card
        setTimeout(() => {
          entry.target.classList.add("card-visible");
        }, index * 150); // staggered animation: 0ms, 150ms, 300ms...
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

cards.forEach((card) => cardObserver.observe(card));

// Profile animetion
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target); // Run only once
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll("#de-in-on-scroll").forEach((el) => {
    observer.observe(el);
  });
});
