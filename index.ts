import setupTimer from './src/functions/timer.js';
import animationsTl from './src/functions/animations.js';

const hourElement: HTMLElement = document.querySelector('[data-hour]')!;
const minuteElement: HTMLElement = document.querySelector('[data-minute]')!;
const meridiemElement: HTMLElement = document.querySelector('[data-meridiem]')!;

setupTimer(hourElement, minuteElement, meridiemElement);

//  animation
animationsTl.play();