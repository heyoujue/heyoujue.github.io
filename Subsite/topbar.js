const topbar = document.querySelector('.topbar');
let hideTimeout;

function showTopbar() {
  topbar.classList.remove('hidden');
  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    // Only hide if not hovered
    if (!topbar.matches(':hover')) {
      topbar.classList.add('hidden');
    }
  }, 10000);
}

// Show topbar initially and start timer
showTopbar();

// Show topbar on scroll
window.addEventListener('scroll', () => {
  showTopbar();
});

// Show topbar on mouse enter
topbar.addEventListener('mouseenter', () => {
  topbar.classList.remove('hidden');
  clearTimeout(hideTimeout);
});

// Start hide timer on mouse leave
topbar.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    topbar.classList.add('hidden');
  }, 10000);
});
