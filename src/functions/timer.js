export default (hourElement, minuteElement, meridiemElement) => {
  function setTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();

    function displayHour(hour) {
      if (hour === 0) return 12;
      if (hour > 12) hour = hour - 12;
      return hour < 10 ? `0${hour}` : hour;
    };    

    hourElement.innerHTML = displayHour(hour);
    minuteElement.innerHTML =  minute < 10 ? `0${minute}` : minute;
    meridiemElement.innerHTML =  hour < 12 ? `AM` : `PM`;
  };
  
  setTime();
  setInterval(setTime, 1000);
};