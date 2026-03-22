type ThemeType = "light" | "dark";

const sunSvg = `
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3v1m0 16v1m-8-9H3m3.314-5.686L5.5 5.5m12.186.814L18.5 5.5M6.314 17.69l-.814.81m12.186-.81.814.81M21 12h-1m-4 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      stroke="#bbb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    />
  </svg>`;

const moonSvg = `
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.32 11.684a9 9 0 0 0 17.357 3.348A9 9 0 0 1 8.32 6.683c0-1.18.23-2.32.644-3.353a9.003 9.003 0 0 0-5.645 8.354Z"
      fill="#666" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
    />
  </svg>`;

const btn = document.querySelector<HTMLButtonElement>("[data-btn-theme]")!;
const body = document.querySelector<HTMLBodyElement>("body")!;

function getInitialTheme(): ThemeType {
  const saved = localStorage.getItem("theme") as ThemeType | null;
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme: ThemeType) {
  if (theme === "light") {
    body.classList.add("light");
    btn.innerHTML = moonSvg;
  } else {
    body.classList.remove("light");
    btn.innerHTML = sunSvg;
  }
}

applyTheme(getInitialTheme());

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    body.style.transition = "background 250ms ease-out, color 250ms ease-out";
  });
});

btn.addEventListener("click", () => {
  const next: ThemeType = body.classList.contains("light") ? "dark" : "light";
  localStorage.setItem("theme", next);
  applyTheme(next);
});

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    applyTheme(e.matches ? "light" : "dark");
  }
});