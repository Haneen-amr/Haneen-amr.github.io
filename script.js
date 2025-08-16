const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Show section
        entry.target.classList.add('show');

        // Update active nav link
        navLinks.forEach(link => link.classList.remove('active'));
        const id = entry.target.getAttribute('id');
        document.querySelector(`.nav-links a[href="#${id}"]`).classList.add('active');
      }
    });
  },
  { threshold: 0.1 } // triggers when 10% of the section is visible
);

sections.forEach(section => observer.observe(section));
