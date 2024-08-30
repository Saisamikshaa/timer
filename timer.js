let second = 0;
let minute = 0;
let hour = 0;

const updateSecond = () => {
  if (second < 60) {
    second = second + 1;
  } else {
    second = 0;
  }
};
const updateMinute = () => {
  if (minute < 60) {
    minute = minute + 1;
  } else {
    minute = 0;
  }
};
const updatehour = () => {
  if (hour < 24) {
    hour = hour + 1;
  } else {
    hour = 0;
  }
};
const startTimer = () => {
  setInterval(() => {
    updateSecond();
    updateMinute();
    updatehour();
  }, 1000);
};

startTimer();
