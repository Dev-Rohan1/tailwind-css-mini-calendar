let date = document.querySelector(".date");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

let today = new Date();

const allWeakDays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = allWeakDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();

console.log(date, day);