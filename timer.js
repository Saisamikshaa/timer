let second = 0;
let minute = 0;
let hour = 0;

const updateClock = () => {
  second += 1;
  
  if (second === 60) {
    second = 0;
    minute += 1;
    
    if (minute === 60) {
      minute = 0;
      hour += 1;
      
      if (hour === 24) {
        hour = 0;
      }
    }
  }
  
  // Format time with leading zeros
  const formatTime = (value) => value.toString().padStart(2, '0');
  
  // Update the HTML
  document.getElementById('second').textContent = formatTime(second);
  document.getElementById('minute').textContent = formatTime(minute);
  document.getElementById('hour').textContent = formatTime(hour);
};

// Start the clock
setInterval(updateClock, 1000);
