// Calculates the current time (updates every minute) and date (updates daily)
function startTime() {
    var today = new Date();
    var noonNight = false;
    var h = today.getHours();
    if(h > 12) {
        h = h - 12;
        noonNight = true;
    }
    var m = today.getMinutes();
    m = singleHour(m);
    if(noonNight == false) {
        document.getElementById('txt').innerHTML = h + ":" + m + " AM";
    }
    else {
        document.getElementById('txt').innerHTML = h + ":" + m + " PM";
    }
    var t = setTimeout(startTime, 500);
    
    var today = new Date();
    document.getElementById('date').innerHTML = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    document.getElementById('question').innerHTML = "Are you having increased trouble with breathing?";
}

// Checks whether the 'hour' of the time is between 1 and 9 (inclusive)
function singleHour(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}
