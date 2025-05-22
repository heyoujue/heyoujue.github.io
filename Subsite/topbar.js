window.addEventListener('load', () => {
  const overlay = document.getElementById('ld');

  setTimeout(() => {
    overlay.classList.add('fade-out');

    // Wait for transition to complete before removing from layout
    overlay.addEventListener('transitionend', () => {
      overlay.classList.add('hidden');
    });
  }, 300); // 0. second
});

window.addEventListener('load', () => {
  const overlay = document.getElementById('overlay');

  setTimeout(() => {
    overlay.classList.add('fade-out');

    // Wait for transition to complete before removing from layout
    overlay.addEventListener('transitionend', () => {
      overlay.classList.add('hidden');
    });
  }, 800); // 0.8 second
});


const topbar = document.querySelector('.topbar');
const pullButton = document.getElementById("pullButton");

let hideTimeout;
const inactivityDelay = 5000; // 5 seconds

// Track if topbar is currently visible
let isVisible = true;

function hideTopbar() {
  topbar.classList.add("hidden");
  isVisible = false;
}

function showTopbar() {
  topbar.classList.remove("hidden");
  isVisible = true;
}

function startHideTimer() {
  if (hideTimeout) clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    hideTopbar();
  }, inactivityDelay);
}

// Mouse move anywhere **only resets timer if topbar visible**
window.addEventListener("mousemove", () => {
  if (isVisible) {
    showTopbar();
    startHideTimer();
  }
});

// Mouse enters topbar area: reveal immediately, cancel hide timer
topbar.addEventListener("mouseenter", () => {
  showTopbar();
  if (hideTimeout) clearTimeout(hideTimeout);
});

// Mouse leaves topbar area: start hide timer
topbar.addEventListener("mouseleave", () => {
  startHideTimer();
});

// Clicking pull button reveals topbar and resets timer no matter what
pullButton.addEventListener("click", () => {
  showTopbar();
  startHideTimer();
});

// Initialize: start timer to hide after 5 seconds
startHideTimer();