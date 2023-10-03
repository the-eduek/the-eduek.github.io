import timerFn from "@/functions/timer";
// import animationsTl from "@/functions/animations.js";

const hourElement: HTMLElement = document.querySelector("[data-hour]")!;
const minuteElement: HTMLElement = document.querySelector("[data-minute]")!;
const meridiemElement: HTMLSpanElement = document.querySelector("[data-meridiem]")!;

timerFn(hourElement, minuteElement, meridiemElement);

//  animation
// animationsTl.play();
