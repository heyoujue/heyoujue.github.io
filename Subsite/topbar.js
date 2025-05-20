window.addEventListener('load', () => {
  const overlay = document.getElementById('ld');

  setTimeout(() => {
    overlay.classList.add('fade-out');

    // Wait for transition to complete before removing from layout
    overlay.addEventListener('transitionend', () => {
      overlay.classList.add('hidden');
    });
  }, 300); // 1 second
});

window.addEventListener('load', () => {
  const overlay = document.getElementById('overlay');

  setTimeout(() => {
    overlay.classList.add('fade-out');

    // Wait for transition to complete before removing from layout
    overlay.addEventListener('transitionend', () => {
      overlay.classList.add('hidden');
    });
  }, 800); // 1 second
});


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