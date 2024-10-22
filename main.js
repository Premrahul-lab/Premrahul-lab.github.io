const body = document.body;

// Function to set theme based on the theme passed as an argument
function setTheme(theme) {
  body.setAttribute("data-theme", theme);
}

// Event listeners for the icons
document.getElementById("light-theme").addEventListener("click", function() {
  setTheme("light");
});

document.getElementById("dark-theme").addEventListener("click", function() {
  setTheme("dark");
});

// Optional: If you still want a toggle button, you can keep this logic
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});

const skills = document.querySelectorAll('.skill');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add show class to fill progress
            observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
    });
});

skills.forEach(skill => {
    observer.observe(skill);
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
      nav.classList.add('scrolled');
  } else {
      nav.classList.remove('scrolled');
  }
});
