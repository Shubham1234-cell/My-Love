function navigate(pageId) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

  // floating hearts only in shayari
  if (pageId === "shayari") {
    startFloatingHearts();
  }
}

function startFloatingHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 800);
}

// no bootstrap needed now


