var questionMap = new Map();

// Calculates the current time (updates every minute)
function startTime() {
    var today = new Date();
    var noonNight = false;
    var h = today.getHours();
    if(h > 12) {
        h = h - 12;
        noonNight = true;
    }
    if(h == 0) {
        h = 12;
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
    showDate();
}

// Calculates and displays current date
function showDate() {
    var today = new Date();
    document.getElementById('date').innerHTML = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
}

// Checks whether the 'hour' of the time is between 1 and 9 (inclusive)
function singleHour(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

// Creates a map of question number to associated question
function createQuestionMap() {
    questionMap.set("1", "Are you feeling feverish?");
    questionMap.set("2", "Do you have a headache?");
    questionMap.set("3", "Are you coughing?");
    questionMap.set("4", "Are shivering or getting chills?");
    questionMap.set("5", "Are you sweating?");
    questionMap.set("6", "Do you have a sore, itchy, and/or scratchy throat?");
    questionMap.set("7", "Are you vomiting or experiencing nausea?");
    questionMap.set("8", "Do you have a runny or stuffy nose?");
    questionMap.set("9", "Are you feeling more tired than usual?");
    questionMap.set("10", "Are you experiencing muscle or body aches?");
    questionMap.set("11", "Are you having increased trouble with breathing?");
}

// Displays a question based on which number the user chooses from the drop down
function displayQuestion() {
    createQuestionMap();
    var num = document.getElementById("selectQuestions").value;
    document.getElementById("displayQuestion").innerHTML = questionMap.get(num);
}