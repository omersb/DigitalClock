const hours = document.querySelector(".hours");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const amPm = document.querySelector(".amPm");

const getTime = () => {
  hours.innerHTML = new Date().getHours() % 12;
  if (new Date().getHours() > 12) {
    amPm.textContent = "PM";
  } else {
    amPm.textContent = "AM";
  }
  minute.innerHTML = new Date().getMinutes();
  second.innerHTML = new Date().getSeconds();
};
setInterval(getTime, 999);
