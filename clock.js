const clockTag = document.querySelector(".clock");
const timeFunction = () => {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let session = "AM";
  if (hour === 0) {
    hour = 12;
    session = "AM";
  }
  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }
  let minuteTag = minute < 0 ? "0" + minute.toString() : minute;
  let hourTag = hour < 0 ? "0" + hour.toString() : hour;
  let secondTag = second < 0 ? "0" + second.toString() : second;
  clockTag.innerHTML =
    hourTag + ":" + minuteTag + ":" + secondTag + " " + session;
  setTimeout(() => {
    timeFunction();
  }, 1000);
};
window.addEventListener("load", () => {
  timeFunction();
});
