type HourString = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';

export default function (hourElement: HTMLElement, minuteElement: HTMLElement, meridiemElement: HTMLElement): void {
  function setTime() : void {
    const date: Date = new Date();
    const hour: number = date.getHours();
    const minute: number = date.getMinutes();

    function displayHour(hour: number): HourString {
      if (hour === 0) return `12`;
      if (hour > 12) hour = hour - 12;      
      return hour < 10 && hour < 12 ? `0${hour}` as HourString : `${hour}` as HourString;
    };

    hourElement.innerHTML = displayHour(hour);
    minuteElement.innerHTML =  minute < 10 ? `0${minute}` : `${minute}`;
    meridiemElement.innerHTML =  hour < 12 ? `AM` : `PM`;
  };
  
  setTime();
  setInterval((setTime), 1000);
};