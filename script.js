const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette() {
  palette.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const color = randomColor();
    const box = document.createElement("div");
    box.classList.add("color-box");
    box.style.backgroundColor = color;
    box.title = color;
    box.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      alert(`Copied ${color} 💅`);
    });
    palette.appendChild(box);
  }
}

// Panggil generate palette saat tombol diklik
generateBtn.addEventListener("click", generatePalette);

// Generate palette pertama kali saat page load
generatePalette();
