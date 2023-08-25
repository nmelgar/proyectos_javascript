// insert date
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth(); // Note: Months are zero-based (0 = January, 1 = February, etc.)
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let actualDate = `${day}/${month}/${year}`;
console.log(actualDate);

let modifyDate = document.getElementById("currente-date");
modifyDate.textContent = actualDate;
