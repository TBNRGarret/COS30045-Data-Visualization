function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');

  const navItems = document.querySelectorAll('nav li');
  navItems.forEach(item => item.classList.remove('active'));
  document.getElementById(`nav-${pageId}`).classList.add('active');
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Default to home page
showPage('home');