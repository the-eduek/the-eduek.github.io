import setupTImer from './src/functions/timer.js';

const hourElement = <HTMLElement>document.querySelector('[data-hour]')!;
const minuteElement = <HTMLElement>document.querySelector('[data-minute]')!;
const meridiemElement = <HTMLElement>document.querySelector('[data-meridiem]')!;

setupTImer(hourElement, minuteElement, meridiemElement);