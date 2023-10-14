type HourString =
  | "00"
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

// timer function
function timerFn(
  hourElement: HTMLElement,
  minuteElement: HTMLElement,
  meridiemElement: HTMLElement
): void {
  function setTime(): void {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();

    function displayHour(hour: number): HourString {
      if (hour === 0) return `12`;
      if (hour > 12) hour = hour - 12;
      return hour < 10 && hour < 12
        ? (`0${hour}` as HourString)
        : (`${hour}` as HourString);
    }

    hourElement.innerHTML = displayHour(hour);
    minuteElement.innerHTML = minute < 10 ? `0${minute}` : `${minute}`;
    meridiemElement.innerHTML = hour < 12 ? `AM` : `PM`;
  }

  setTime();
  setInterval(setTime, 1000);
}

// timer display
const hourElement: HTMLSpanElement = document.querySelector("[data-hour]")!;
const minuteElement: HTMLSpanElement = document.querySelector("[data-minute]")!;
const meridiemElement: HTMLSpanElement =
  document.querySelector("[data-meridiem]")!;

timerFn(hourElement, minuteElement, meridiemElement);
