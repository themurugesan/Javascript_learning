function updateClock() {
  const now = new Date();

  // Extract hours, minutes, and seconds
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Combine into a time string
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Update the time in the HTML
  document.getElementById("time").textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
