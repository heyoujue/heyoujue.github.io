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

function hideTopbar() {
  topbar.classList.add("hidden");
}

function showTopbar() {
  topbar.classList.remove("hidden");
}

function resetHideTimer() {
  showTopbar();

  if (hideTimeout) clearTimeout(hideTimeout);

  hideTimeout = setTimeout(() => {
    hideTopbar();
  }, inactivityDelay);
}

// Reset timer and show topbar on mouse move anywhere
window.addEventListener("mousemove", () => {
  resetHideTimer();
});

// Also reveal topbar immediately on mouse enter topbar area
topbar.addEventListener("mouseenter", () => {
  showTopbar();
  if (hideTimeout) clearTimeout(hideTimeout);
});

// When mouse leaves topbar, restart inactivity timer to hide
topbar.addEventListener("mouseleave", () => {
  resetHideTimer();
});

// Clicking pull button reveals topbar and resets inactivity timer
pullButton.addEventListener("click", () => {
  showTopbar();
  resetHideTimer();
});

// Initialize: hide topbar after 5 seconds inactivity on page load
resetHideTimer();