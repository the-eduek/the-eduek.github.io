export default function (hourElement: HTMLElement, minuteElement: HTMLElement, meridiemElement: HTMLElement): void {
  function setTime() : void {
    const date: Date = new Date();
    const hour: number = date.getHours();
    const minute: number = date.getMinutes();

    function displayHour(hour: number): string {
      if (hour === 0) return `12`;
      if (hour > 12) hour = hour - 12;
      return hour < 10 ? `0${hour}` : `${hour}`;
    };

    hourElement.innerHTML = displayHour(hour);
    minuteElement.innerHTML =  minute < 10 ? `0${minute}` : `${minute}`;
    meridiemElement.innerHTML =  hour < 12 ? `AM` : `PM`;
  };
  
  setTime();
  setInterval((setTime), 1000);
};