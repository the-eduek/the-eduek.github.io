import timerFn from "@/functions/timer";

// clock display
const hourElement: HTMLSpanElement = document.querySelector("[data-hour]")!;
const minuteElement: HTMLSpanElement = document.querySelector("[data-minute]")!;
const meridiemElement: HTMLSpanElement =
  document.querySelector("[data-meridiem]")!;

timerFn(hourElement, minuteElement, meridiemElement);

// toggle theme
const btn: HTMLButtonElement = document.querySelector("[data-btn-theme]")!;
const bodyElt: HTMLBodyElement = document.querySelector("body")!;

const lightSvg = `
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      stroke=currentColor"
    >
      <path
        d="M10.359 12.666l-.194.839a1.5 1.5 0 0 1-1.346 1.157l-.115.004H7.296a1.5 1.5 0 0 1-1.431-1.05l-.03-.112-.194-.838h4.718zM8 1.334a4.833 4.833 0 0 1 4.833 4.833c0 1.425-.623 2.73-1.843 3.894a.167.167 0 0 0-.047.083l-.352 1.522H5.409l-.35-1.522a.167.167 0 0 0-.048-.083c-1.22-1.165-1.844-2.47-1.844-3.894A4.833 4.833 0 0 1 8 1.334z"
      />
    </svg>`;
const darkSvg = `
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#555"
    >
      <path
        d="M10.359 12.666l-.194.839a1.5 1.5 0 0 1-1.346 1.157l-.115.004H7.296a1.5 1.5 0 0 1-1.431-1.05l-.03-.112-.194-.838h4.718zM8 1.334a4.833 4.833 0 0 1 4.833 4.833c0 1.425-.623 2.73-1.843 3.894a.167.167 0 0 0-.047.083l-.352 1.522H5.409l-.35-1.522a.167.167 0 0 0-.048-.083c-1.22-1.165-1.844-2.47-1.844-3.894A4.833 4.833 0 0 1 8 1.334z"
      />
    </svg>`;

window.addEventListener("load", () => {
  console.log("hello world");
});

btn.addEventListener("click", () => {
  const isDark = bodyElt.classList.contains("dark");
  isDark ? (btn.innerHTML = lightSvg) : (btn.innerHTML = darkSvg);
  bodyElt.classList.toggle("dark");
});

window.addEventListener("load", () => {
  const isDark = bodyElt.classList.contains("dark");
  isDark ? (btn.innerHTML = darkSvg) : (btn.innerHTML = lightSvg);
});
