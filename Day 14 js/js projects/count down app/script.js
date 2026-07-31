
let endDate = '12 February 2025 12:00 PM';
let current_date = document.getElementById('currentDate');
current_date.innerText = endDate;
let input_box = document.querySelectorAll('input');

function clock(){
    let end = new Date(endDate)
    let now = new Date()

    let differ = (end - now)/1000;
    let days = Math.floor(differ / (24*60*60));
    input_box[0].value = days;
    let hours = Math.floor((differ % (24*60*60)) / (60*60));
    input_box[1].value = hours;
    let minutes = Math.floor((differ % (60*60)) / 60);
    input_box[2].value = minutes;
    let seconds = Math.floor(differ % 60);
    input_box[3].value = seconds;
}
clock();

setInterval(clock, 1000);
