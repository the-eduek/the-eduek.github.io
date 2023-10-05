import timerFn from "@/functions/timer";

const hourElement: HTMLSpanElement = document.querySelector("[data-hour]")!;
const minuteElement: HTMLSpanElement = document.querySelector("[data-minute]")!;
const meridiemElement: HTMLSpanElement = document.querySelector("[data-meridiem]")!;

timerFn(hourElement, minuteElement, meridiemElement);
