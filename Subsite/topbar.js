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
const pullButton = document.getElementById("pullButton");
let hideTimeout;
let isPinnedOpen = false;

function hideTopbar() {
  if (!isPinnedOpen) {
    topbar.classList.add("hidden");
  }
}

function showTopbar() {
  topbar.classList.remove("hidden");
}

function resetHideTimer() {
  if (!isPinnedOpen) {
    showTopbar();

    if (hideTimeout) clearTimeout(hideTimeout);

    hideTimeout = setTimeout(() => {
      hideTopbar();
    }, 5000);
  }
}

// Mouse movement resets timer only if not pinned open
window.addEventListener("mousemove", () => {
  if (!isPinnedOpen) {
    resetHideTimer();
  }
});

// Clicking pull button toggles pinned open state
pullButton.addEventListener("click", () => {
  if (isPinnedOpen) {
    // Close topbar (unpin)
    isPinnedOpen = false;
    resetHideTimer(); // Start hide timer again
  } else {
    // Open topbar (pin)
    isPinnedOpen = true;
    showTopbar();
    if (hideTimeout) clearTimeout(hideTimeout);
  }
});

// Start hide timer on page load
resetHideTimer();
