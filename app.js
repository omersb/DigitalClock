const hours = document.querySelector(".hours");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const amPm = document.querySelector(".amPm");
const date = document.querySelector(".date");

const getTime = () => {
  hours.innerHTML = new Date().getHours() % 12;
  minute.innerHTML = new Date().getMinutes();
  second.innerHTML = new Date().getSeconds();
  date.innerHTML = new Date().toDateString();

  if (new Date().getHours() > 12) {
    amPm.textContent = "PM";
  } else {
    amPm.textContent = "AM";
  }
  if (hours.textContent.length == 1) {
    hours.textContent = "0" + hours.textContent;
  }
  if (minute.textContent.length == 1) {
    minute.textContent = "0" + minute.textContent;
  }
  if (second.textContent.length == 1) {
    second.textContent = "0" + second.textContent;
  }
};
setInterval(getTime, 999);
