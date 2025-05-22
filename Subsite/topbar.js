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
let isPinnedOpen = false;

function hideTopbar() {
  topbar.classList.add("hidden");
  isPinnedOpen = false;   // Reset pinned state on hide
}

function showTopbar() {
  topbar.classList.remove("hidden");
}

function resetHideTimer() {
  showTopbar();

  if (hideTimeout) clearTimeout(hideTimeout);

  // Start timer to hide topbar after 3 seconds of inactivity
  hideTimeout = setTimeout(() => {
    hideTopbar();
  }, 5000);
}

window.addEventListener("mousemove", () => {
  resetHideTimer();
});

pullButton.addEventListener("click", () => {
  showTopbar();
  resetHideTimer(); // Restart inactivity timer to auto-hide again after 3s
});

// Initialize: start the timer on page load
resetHideTimer();
