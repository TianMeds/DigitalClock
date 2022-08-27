let section = document.querySelector("section"),
  icons = document.querySelector(".icons");

  icons.onclick = ()=>{
    section.classList.toggle("dark");
  }

  const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const setTime = () => {
  const day = document.querySelector(".day");
  const month = document.querySelector(".month");
  const dayOfTheMonth = document.querySelector(".day-of-the-month");

  const currentDate = new Date();

  day.innerText = week[currentDate.getDay()];
  month.innerText = months[currentDate.getMonth()];
  dayOfTheMonth.innerText = currentDate.getDate();

};

setInterval(setTime, 1000);

  // creating a function and calling it in every seconds
  
  setInterval(()=>{

    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM"; //if hour is smaller than 12, than its value will be AM else its value will be pm
    hour = hour > 12 ? hour - 12 : hour; //if hour value is greater than 12 than 12 will subtracted ( by doing this we will get value till 12 not 13,14 or 24 )
    hour = hour == 0 ? hour = 12 : hour; // if hour value is  0 than it value will be 12

    // adding 0 to the front of all the value if they will less than 10
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = d;

  }, 1000); // 1000 milliseconds = 1s
