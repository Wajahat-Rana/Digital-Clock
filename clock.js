function showTime() {
    let time = new Date();

    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let session = "AM";
    let day = time.getDay();
    let date = time.getDate();
    let year = time.getFullYear();
    let month = time.getMonth();

    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;

        case 2:
            day = "Tuesday";
            break;

        case 3:
            day = "Wednesday";
            break;

        case 4:
            day = "Thursday";
            break;

        case 5:
            day = "Friday";
            break;

        case 6:
            day = "Saturday";
            break;

    }
    switch (month) {
        case 0:
            month = "Jan";
            break;
        case 1:
            month = "Feb";
            break;

        case 2:
            month = "March";
            break;

        case 3:
            month = "April";
            break;

        case 4:
            month = "May";
            break;

        case 5:
            month = "June";
            break;

        case 6:
            month = "July";
            break;

        case 7:
            month = "Aug";
            break;

        case 8:
            month = "Sep";
            break;

        case 9:
            month = "Oct";
            break;

        case 10:
            month = "Nov";
            break;

        case 11:
            month = "Dec";
            break;

    }
    

    if (hours >= 12) {
        session = "PM"
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    document.getElementById('clock').innerHTML = hours + ":" + mins + ":" + secs + " " + session;
    document.getElementById('date').innerHTML = day + ", " + date + " " + month +" "+ year;
}

setInterval(showTime, 1000);
