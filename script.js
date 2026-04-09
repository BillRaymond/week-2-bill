const themes = [
  {
    name: "Sunrise Glow",
    start: "#fff4d6",
    end: "#ffd2c7",
    accent: "#0f766e",
    accentStrong: "#134e4a",
  },
  {
    name: "Mint Current",
    start: "#dcfff3",
    end: "#cde7ff",
    accent: "#0284c7",
    accentStrong: "#1d4ed8",
  },
  {
    name: "Citrus Pop",
    start: "#fff1bf",
    end: "#ffc4a3",
    accent: "#ea580c",
    accentStrong: "#c2410c",
  },
];

const toggleButton = document.querySelector("#theme-toggle");
const statusMessage = document.querySelector("#status-message");

let currentThemeIndex = 0;

function applyTheme(theme) {
  document.documentElement.style.setProperty("--bg-start", theme.start);
  document.documentElement.style.setProperty("--bg-end", theme.end);
  document.documentElement.style.setProperty("--accent", theme.accent);
  document.documentElement.style.setProperty("--accent-strong", theme.accentStrong);
  statusMessage.textContent = `Theme: ${theme.name}`;
}

toggleButton.addEventListener("click", () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  applyTheme(themes[currentThemeIndex]);
});

applyTheme(themes[currentThemeIndex]);
