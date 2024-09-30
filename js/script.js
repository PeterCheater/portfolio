document.addEventListener("DOMContentLoaded", () => {
  // Function to get computed style
  const getSkillWidth = (element) => {
      return window.getComputedStyle(element).getPropertyValue('width');
  };

  // Function to update skill value based on width
  const updateSkillValue = (skillId) => {
      const skillElement = document.querySelector(`#${skillId} .inner-row`);
      const widthValue = getSkillWidth(skillElement);
      const percentageValue = parseFloat(widthValue) / parseFloat(skillElement.parentElement.offsetWidth) * 100;
      document.querySelector(`#${skillId} .skill-value`).textContent = `${Math.round(percentageValue)}%`;
  };

  // Update all skills
  updateSkillValue('skill-python');
  updateSkillValue('skill-php-sql');
  updateSkillValue('skill-c-cpp');
  updateSkillValue('skill-html-css-js');
  updateSkillValue('skill-nextjs');
  updateSkillValue('skill-csharp');

  // navScroll
  let nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("nav-scroll", window.scrollY > 0);
  });

  // Active toggle
  let AllNavLinkA = document.querySelectorAll(".nav-links li a");

  // Active Add
  AllNavLinkA.forEach((item) => {
    item.addEventListener("click", () => {
      removeActive();
      item.classList.add("active");
    });
  });

  // Active Remove
  const removeActive = () =>
    AllNavLinkA.forEach((item) => {
      item.classList.remove("active");
    });

  // Nav links toggler
  let menuBars = document.querySelector("nav button");
  let navlinks = document.querySelector(".nav-links");
  menuBars.addEventListener("click", () => {
    navlinks.classList.toggle("nav-link-block");
  });

  // Intersection Observer
  const sections = document.querySelectorAll('section');
  const options = {
    threshold: 0.7,
  };

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const navItem = document.querySelector(`.nav-links li a[href="#${id}"]`);
      if (entry.isIntersecting) {
        removeActive();
        navItem.classList.add('active');
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
