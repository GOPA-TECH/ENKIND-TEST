// ============================================
// CODING EXAMINATION PORTAL - WEBSITE 2
// ============================================

// A = 0, B = 1, C = 2, D = 3
function q(question, options, answer) {
    return {
        question: question,
        options: options,
        answer: answer
    };
}

// ============================================
// JSS 1 - SCRATCH QUESTIONS (15)
// ============================================

const jss1Questions = [

    q("Which block is used to move a sprite forward in Scratch?",
      ["Turn 15 degrees", "Move 10 steps", "Say Hello", "Wait 1 second"], 1),

    q("Which block is used to rotate a sprite in Scratch?",
      ["Move 10 steps", "Change costume", "Turn 15 degrees", "Repeat 10"], 2),

    q("Which block makes a sprite move continuously without stopping?",
      ["Wait", "Stop all", "Forever", "Say Hello"], 2),

    q("Which block is used to start a Scratch program when the green flag is clicked?",
      ["When space key pressed", "When green flag clicked", "Forever", "Move 10 steps"], 1),

    q("Which block makes a sprite turn back when it reaches the edge of the stage?",
      ["Move 10 steps", "Turn 90 degrees", "If on edge, bounce", "Next costume"], 2),

    q("Which block is used to change the appearance of a sprite?",
      ["Move 10 steps", "Next costume", "Forever", "Wait 1 second"], 1),

    q("Which block can make a sprite jump upward?",
      ["Change y by 10", "Change x by 10", "Turn 15 degrees", "Next costume"], 0),

    q('What happens when we use the "Move 10 steps" block?',
      ["The sprite disappears", "The sprite changes colour", "The sprite moves forward", "The sprite stops"], 2),

    q("Which block can make a sprite repeat an action 10 times?",
      ["Forever", "Repeat 10", "Stop all", "Say Hello"], 1),

    q('What happens when a sprite touches the edge while using the "If on edge, bounce" block?',
      ["It disappears", "It changes costume", "It bounces back", "It stops the program"], 2),

    q("Which block can make a sprite move to the right?",
      ["Change x by 10", "Change y by 10", "Next costume", "Wait 1 second"], 0),

    q("Which block can make a sprite move downward?",
      ["Change x by 10", "Change y by -10", "Turn 15 degrees", "Move 100 steps"], 1),

    q("Which block is used to make a sprite wait before performing another action?",
      ["Forever", "Move 10 steps", "Wait 1 second", "Next costume"], 2),

    q("Which combination of blocks can make a sprite move continuously and bounce at the edge?",
      [
        "Forever → Move 10 steps → If on edge, bounce",
        "Say Hello → Stop all",
        "Next costume → Wait",
        "Turn 15 degrees → Stop all"
      ], 0),

    q("Which combination of blocks can make a sprite appear to walk continuously by changing costumes?",
      [
        "Forever → Next costume → Wait 0.2 seconds",
        "Stop all → Move 10 steps",
        "Say Hello → Turn 90 degrees",
        "When green flag clicked → Stop all"
      ], 0)

];


// ============================================
// JSS 2 - ORIGINAL SCRATCH QUESTIONS (25)
// ============================================

const jss2Questions = [

    q("What is the name of the programming software used to create this game?",
      ["Microsoft Word", "Scratch", "Microsoft Excel", "Photoshop"], 1),

    q("How many sprites are used in the Apple Catching Game?",
      ["1", "3", "2", "4"], 2),

    q("Which of these sprites is used to catch the falling apple?",
      ["Cat", "Bowl", "Ball", "Basket"], 1),

    q("What happens when the green flag is clicked?",
      ["The game stops", "The sprites disappear", "The game starts", "The computer shuts down"], 2),

    q('Which block category contains the "change y by" block?',
      ["Motion", "Looks", "Sound", "Events"], 0),

    q('What is the function of the "forever" block?',
      ["To stop the game", "To repeat instructions continuously", "To delete a sprite", "To change the background"], 1),

    q("Which block is used to detect when the apple touches the bowl?",
      ["Move 10 steps", "Say Hello", "Touching Bowl?", "Wait 1 second"], 2),

    q("What is the purpose of the SCORE variable?",
      ["To change the apple's colour", "To count the apples caught", "To move the bowl", "To stop the game"], 1),

    q('Which block category contains the "when green flag clicked" block?',
      ["Motion", "Control", "Events", "Operators"], 2),

    q('What does the "set SCORE to 0" block do?',
      ["Adds 10 points", "Stops the score", "Resets the score to zero", "Deletes the variable"], 2),

    q("What happens when the left arrow key is pressed?",
      ["The bowl moves right", "The bowl moves left", "The apple disappears", "The score increases"], 1),

    q("Which block moves the bowl to the right?",
      ["Change x by -10", "Change y by 10", "Change x by 10", "Change y by -10"], 2),

    q('What does "change y by -3" do to the apple?',
      ["Moves it upward", "Moves it downward", "Moves it right", "Changes its size"], 1),

    q("Which coordinate controls the left and right movement of a sprite?",
      ["Y-coordinate", "X-coordinate", "Z-coordinate", "T-coordinate"], 1),

    q("Which coordinate controls the upward and downward movement of a sprite?",
      ["X-coordinate", "Z-coordinate", "Y-coordinate", "W-coordinate"], 2),

    q("What happens when the apple touches the bowl?",
      ["The score decreases", "The game stops", "The score increases by 1", "The bowl disappears"], 2),

    q('What does the "go to random position" block do?',
      ["Moves the sprite to a different random location", "Deletes the sprite", "Changes the sprite's colour", "Stops the game"], 0),

    q("Why is the apple's y-position set to 180 after it touches the bowl?",
      ["To move the apple to the bottom", "To return the apple to the top", "To move the bowl", "To increase the score"], 1),

    q("Which programming block is used to make a decision in the game?",
      ["Forever", "Change x by 10", "If...then", "Go to random position"], 2),

    q("What is the main objective of the Apple Catching Game?",
      ["To avoid the falling apples", "To catch falling apples using the bowl", "To change the background", "To move the apple with the keyboard"], 1),

    q("If the SCORE is 5 and the player catches another apple, what will the new score be?",
      ["4", "5", "6", "10"], 2),

    q('What will happen if "change y by -3" is replaced with "change y by -10"?',
      ["The apple will fall faster", "The apple will stop moving", "The apple will move left", "The apple will disappear"], 0),

    q('What will happen if "change x by 10" is replaced with "change x by 20" for the bowl?',
      ["The bowl will move more slowly", "The bowl will move farther right per key press", "The bowl will move upward", "The bowl will stop moving"], 1),

    q('What will happen if the "forever" block is removed from the apple\'s falling script?',
      ["The apple will fall continuously", "The apple will move downward only once", "The score will increase automatically", "The bowl will disappear"], 1),

    q("Which of these blocks is responsible for increasing the player's score?",
      ["Set SCORE to 0", "Change SCORE by 1", "Change x by 10", "Set y to 180"], 1)

];


// ============================================
// JSS 3 - SAME AS JSS 2, REARRANGED
// ============================================

const jss3Questions = [

    13, 4, 21, 0, 17,
    9, 23, 6, 15, 2,
    19, 11, 24, 7, 1,
    20, 14, 5, 22, 3,
    18, 10, 16, 8, 12

].map(index => jss2Questions[index]);


// ============================================
// SS 1 - ORIGINAL JSS 3 HTML QUESTIONS (24)
// ============================================

const ss1Questions = [

    q("What is web development?",
      [
        "The process of repairing computers",
        "The process of creating and maintaining websites",
        "The process of typing documents",
        "The process of installing computer games"
      ], 1),

    q("What is a website?",
      [
        "A collection of related web pages",
        "A computer keyboard",
        "A type of computer virus",
        "A computer operating system"
      ], 0),

    q("Which of the following is an example of a web browser?",
      ["Microsoft Word", "Microsoft Excel", "Google Chrome", "Calculator"], 2),

    q("Who is a web developer?",
      [
        "Someone who repairs televisions",
        "Someone who creates and maintains websites",
        "Someone who sells computer accessories",
        "Someone who prints documents"
      ], 1),

    q("Which of the following is commonly used to create the structure of a webpage?",
      ["HTML", "Microsoft Excel", "Paint", "Calculator"], 0),

    q("Which of the following is an example of a website?",
      ["Keyboard", "Mouse", "www.google.com", "Monitor"], 2),

    q("What is the full meaning of HTML?",
      [
        "High Text Machine Language",
        "Hyper Text Markup Language",
        "Hyper Tool Markup Language",
        "Home Text Machine Language"
      ], 1),

    q("What is HTML mainly used for?",
      [
        "Creating the structure and content of webpages",
        "Editing videos",
        "Repairing computers",
        "Drawing pictures"
      ], 0),

    q("Which of the following is the correct HTML opening tag?",
      ["<html>", "(html)", "[html]", "{html}"], 0),

    q("Which of the following is the correct closing HTML tag?",
      ["<html>", "<close html>", "</html>", "<html/>"], 2),

    q("What is the purpose of the <body> tag in HTML?",
      [
        "To change the computer password",
        "To contain the visible content of a webpage",
        "To shut down the browser",
        "To create a folder"
      ], 1),

    q("Which HTML tag contains information such as the webpage title?",
      ["<body>", "<p>", "<head>", "<br>"], 2),

    q("Which of the following shows the correct basic structure of an HTML document?",
      [
        "<body><html></body></html>",
        "<html><head></head><body></body></html>",
        "<head><html></html></head>",
        "<p><html></html></p>"
      ], 1),

    q("What is the purpose of creating a folder for a website project?",
      [
        "To organise and store website files",
        "To increase the computer's speed",
        "To delete the browser",
        "To change the computer screen"
      ], 0),

    q("Which of the following is a suitable name for a website project folder?",
      ["My Website", "<html>", "</body>", "<p>"], 0),

    q("Which file extension is commonly used when saving an HTML webpage?",
      [".mp3", ".jpg", ".html", ".exe"], 2),

    q("Which of the following is a correctly named HTML file?",
      ["index.mp3", "index.html", "index.jpg", "index.exe"], 1),

    q("What is the purpose of saving an HTML file with the .html extension?",
      [
        "To identify it as an HTML document",
        "To turn it into a video",
        "To make it a music file",
        "To delete its contents"
      ], 0),

    q('A student creates a folder named "My School Website". Which file can be saved inside it?',
      ["<body>", "</html>", "home.html", "<head>"], 2),

    q("Which HTML tag is used to create the title displayed on a browser tab?",
      ["<p>", "<title>", "<body>", "<html>"], 1),

    q("Where should the <title> tag be placed in an HTML document?",
      [
        "Inside the <body> tag",
        "Inside the <p> tag",
        "Inside the <head> tag",
        "Outside the HTML document"
      ], 2),

    q("Which of the following correctly creates a webpage title?",
      [
        "<title>My School</title>",
        "<title>My School<title>",
        "</title>My School<title>",
        "<p>My School</title>"
      ], 0),

    q("Study this code: <head><title>My First Website</title></head>. What will appear in the browser tab?",
      ["Head", "HTML", "My First Website", "My First Paragraph"], 2),

    q('What happens if a student changes the title from "My Website" to "My School Website"?',
      [
        "The webpage will be deleted",
        "The browser tab title will change",
        "The computer will restart",
        "The webpage will become a video"
      ], 1)

];


// ============================================
// SS 2 AND SS 3 - HTML FORMATTING AND LISTS
// ============================================

const ss2Questions = [

    q("Which HTML tag is used to make text bold?",
      ["<i>", "<b>", "<u>", "<mark>"], 1),

    q("Which HTML tag is used to show that a text is important?",
      ["<small>", "<del>", "<strong>", "<sub>"], 2),

    q("Which HTML tag is used to make text italic?",
      ["<i>", "<b>", "<u>", "<sup>"], 0),

    q("Which HTML tag is used to emphasize text?",
      ["<mark>", "<em>", "<big>", "<del>"], 1),

    q("Which HTML tag is used to highlight text?",
      ["<strong>", "<small>", "<mark>", "<sub>"], 2),

    q("Which HTML tag is used to underline text?",
      ["<u>", "<i>", "<b>", "<em>"], 0),

    q("Which HTML tag is used to make text smaller?",
      ["<big>", "<small>", "<strong>", "<sup>"], 1),

    q("Which HTML tag was traditionally used to make text bigger?",
      ["<small>", "<mark>", "<big>", "<del>"], 2),

    q("Which HTML tag is used to show deleted text?",
      ["<del>", "<em>", "<u>", "<b>"], 0),

    q("Which HTML tag is used to display text above the normal line?",
      ["<sub>", "<sup>", "<small>", "<mark>"], 1),

    q("Which HTML tag is used to display text below the normal line?",
      ["<sup>", "<big>", "<sub>", "<strong>"], 2),

    q('What will <b>Hello</b> do to the word "Hello"?',
      ["Underline it", "Make it bold", "Delete it", "Highlight it"], 1),

    q('What will <i>Welcome</i> do to the word "Welcome"?',
      ["Make it italic", "Make it bold", "Make it smaller", "Underline it"], 0),

    q('Which HTML code correctly underlines the word "School"?',
      [
        "<b>School</b>",
        "<i>School</i>",
        "<u>School</u>",
        "<mark>School</mark>"
      ], 2),

    q('Which HTML code correctly highlights the word "Important"?',
      [
        "<mark>Important</mark>",
        "<small>Important</small>",
        "<del>Important</del>",
        "<sup>Important</sup>"
      ], 0),

    q("Which HTML code correctly displays H₂O?",
      [
        "H<sup>2</sup>O",
        "H<sub>2</sub>O",
        "H<b>2</b>O",
        "H<i>2</i>O"
      ], 1),

    q("Which HTML code correctly displays X²?",
      [
        "X<sub>2</sub>",
        "X<small>2</small>",
        "X<sup>2</sup>",
        "X<del>2</del>"
      ], 2),

    q("What will <del>₦500</del> do?",
      [
        "Make ₦500 bold",
        "Highlight ₦500",
        "Draw a line through ₦500",
        "Underline ₦500"
      ], 2),

    q("Which HTML tag makes text bold while indicating strong importance?",
      ["<strong>", "<i>", "<small>", "<mark>"], 0),

    q("What is the difference between <b> and <strong>?",
      [
        "Both underline text",
        "<b> makes text bold, while <strong> indicates strong importance",
        "<strong> deletes text",
        "<b> makes text italic"
      ], 1),

    // HTML LISTS

    q("Which HTML tag is used to create an ordered list?",
      ["<ul>", "<li>", "<ol>", "<b>"], 2),

    q("Which HTML tag is used to create an unordered list?",
      ["<ul>", "<ol>", "<li>", "<u>"], 0),

    q("Which HTML tag is used to create an item inside a list?",
      ["<ol>", "<li>", "<ul>", "<i>"], 1),

    q("What is the full meaning of <ol> in HTML?",
      ["Open List", "Original List", "Ordered List", "Ordinary Line"], 2),

    q("What is the full meaning of <ul> in HTML?",
      ["Underlined List", "Unordered List", "Upper List", "Unique List"], 1),

    q("What is the full meaning of <li> in HTML?",
      ["List Item", "List Information", "Line Item", "List Input"], 0),

    q("Which HTML list normally displays items with numbers?",
      ["<ul>", "<li>", "<ol>", "<mark>"], 2),

    q("Which HTML list normally displays items with bullet points?",
      ["<ol>", "<ul>", "<li>", "<sup>"], 1),

    q("Which of the following correctly creates an ordered list?",
      [
        "<ol>\n<li>Rice</li>\n<li>Beans</li>\n</ol>",
        "<ul>\n<li>Rice</li>\n<li>Beans</li>\n</ul>",
        "<li>\n<ol>Rice</ol>\n<ol>Beans</ol>\n</li>",
        "<ol>\n<ul>Rice</ul>\n<ul>Beans</ul>\n</ol>"
      ], 0),

    q("Which of the following correctly creates an unordered list?",
      [
        "<ol>\n<li>HTML</li>\n<li>CSS</li>\n</ol>",
        "<li>\n<ul>HTML</ul>\n<ul>CSS</ul>\n</li>",
        "<ul>\n<li>HTML</li>\n<li>CSS</li>\n</ul>",
        "<ul>\n<ol>HTML</ol>\n<ol>CSS</ol>\n</ul>"
      ], 2)

];


// ============================================
// ASSIGN QUESTIONS TO CLASSES
// ============================================

const questions = {

    "JSS 1": jss1Questions,
    "JSS 2": jss2Questions,
    "JSS 3": jss3Questions,

    "SS 1": ss1Questions,
    "SS 2": ss2Questions,
    "SS 3": ss2Questions,

    "SSS 1": ss1Questions,
    "SSS 2": ss2Questions,
    "SSS 3": ss2Questions

};


// ============================================
// GOOGLE SHEETS CONNECTION
// ============================================

// IMPORTANT:
// Replace the URL below with the Google Apps
// Script URL from your SECOND Google Sheet.

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw6PVWnIiZsJbg2NYw1w8k7q_dyHMjg-LvOqPRRuxqoGHd6SnPR24sHQ8C-DOGNxHOq/exec";


// ============================================
// STUDENT INFORMATION
// ============================================

let studentName = "";
let studentClass = "";

let examStarted = false;
let examSubmitted = false;

let timerInterval = null;
let examDeadline = 0;


// ============================================
// START EXAMINATION
// ============================================

function startExam() {

    if (examStarted || examSubmitted) {
        return;
    }

    studentName = document
        .getElementById("studentName")
        .value.trim();

    studentClass = document
        .getElementById("studentClass")
        .value;

    if (!studentName || !studentClass) {

        alert("Please enter your full name and select your class.");

        return;
    }

    if (!questions[studentClass]) {

        alert("No questions found for this class.");

        return;
    }

    document
        .getElementById("registration")
        .classList.add("hidden");

    document
        .getElementById("examSection")
        .classList.remove("hidden");

    document
        .getElementById("examTitle")
        .textContent = "CODING EXAMINATION";

    document
        .getElementById("studentInfo")
        .textContent = studentName + " | " + studentClass;

    displayQuestions();

    examStarted = true;

    startTimer();

}


// ============================================
// DISPLAY EXAMINATION QUESTIONS
// ============================================

function displayQuestions() {

    const examForm = document.getElementById("examForm");

    examForm.innerHTML = "";

    const classQuestions = questions[studentClass];

    classQuestions.forEach((item, index) => {

        const div = document.createElement("div");

        div.className = "question";

        const heading = document.createElement("h3");

        heading.textContent =
            (index + 1) + ". " + item.question;

        div.appendChild(heading);

        item.options.forEach((option, optionIndex) => {

            const label = document.createElement("label");

            label.className = "option";

            const input = document.createElement("input");

            input.type = "radio";

            input.name = "question" + index;

            input.value = optionIndex;

            input.style.width = "auto";

            const letter = String.fromCharCode(65 + optionIndex);

            const optionText = document.createElement("span");

            optionText.textContent = " " + letter + ". " + option;

            optionText.style.whiteSpace = "pre-wrap";

            label.appendChild(input);

            label.appendChild(optionText);

            div.appendChild(label);

        });

        examForm.appendChild(div);

    });

}


// ============================================
// WORKING 10-MINUTE COUNTDOWN TIMER
// ============================================

function startTimer() {

    clearInterval(timerInterval);

    examDeadline = Date.now() + (10 * 60 * 1000);

    const timer = document.getElementById("timer");

    function countdown() {

        if (examSubmitted) {

            clearInterval(timerInterval);

            return;
        }

        const remaining = Math.max(
            0,
            Math.ceil((examDeadline - Date.now()) / 1000)
        );

        const minutes = Math.floor(remaining / 60);

        const seconds = remaining % 60;

        timer.textContent =
            "Time Remaining: " +
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");

        if (remaining <= 60) {

            timer.style.backgroundColor = "red";

            timer.style.color = "white";
        }

        if (remaining === 0) {

            clearInterval(timerInterval);

            submitExam("time");
        }
    }

    countdown();

    timerInterval = setInterval(countdown, 250);

}


// ============================================
// SUBMIT AND MARK EXAMINATION
// ============================================

async function submitExam(reason = "manual") {

    if (!examStarted || examSubmitted) {
        return;
    }

    examSubmitted = true;

    examStarted = false;

    clearInterval(timerInterval);

    const classQuestions = questions[studentClass];

    let score = 0;

    classQuestions.forEach((item, index) => {

        const selected = document.querySelector(
            'input[name="question' + index + '"]:checked'
        );

        if (selected) {

            const selectedAnswer = Number(selected.value);

            if (selectedAnswer === item.answer) {

                score++;
            }
        }
    });

    const total = classQuestions.length;

    const percentage = Math.round(
        (score / total) * 100
    );

    const studentResult = {

        name: studentName,

        studentClass: studentClass,

        subject: "Coding",

        score: score + "/" + total,

        percentage: percentage

    };

    document
        .getElementById("examSection")
        .classList.add("hidden");

    document
        .getElementById("resultSection")
        .classList.remove("hidden");

    let message = "";

    if (reason === "time") {

        message =
            "TIME UP! Your examination has been automatically submitted.";

    } else if (reason === "tab") {

        message =
            "Your examination has been automatically submitted because you left the examination page.";

    } else {

        message = "Examination Submitted Successfully!";

    }

    document
        .getElementById("resultText")
        .textContent =
            message +
            "\nYour result will be communicated by the school.";

    await saveResult(studentResult);

}


// ============================================
// AUTOMATIC SUBMISSION WHEN STUDENT
// SWITCHES TABS OR MINIMIZES THE PAGE
// ============================================

document.addEventListener("visibilitychange", function () {

    if (
        document.hidden &&
        examStarted &&
        !examSubmitted
    ) {

        submitExam("tab");

    }

});


// ============================================
// SAVE RESULTS TO GOOGLE SHEETS
// ============================================

async function saveResult(result) {

    const status = document.getElementById("saveStatus");

    status.textContent = "Submitting your result...";

    if (SCRIPT_URL.startsWith("PASTE_NEW_")) {

        status.textContent =
            "Google Sheets is not connected yet. Please inform your teacher.";

        return;
    }

    try {

        const response = await fetch(SCRIPT_URL, {

            method: "POST",

            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },

            body: JSON.stringify(result),

            keepalive: true

        });

        if (!response.ok) {

            throw new Error(
                "Server returned status " + response.status
            );

        }

        const data = await response.json();

        if (data.success) {

            status.textContent =
                "Your examination has been recorded successfully.";

        } else {

            status.textContent =
                "Result could not be saved. Please inform your teacher.";

            console.error("Saving error:", data.error);

        }

    } catch (error) {

        status.textContent =
            "Could not confirm submission. Please inform your teacher.";

        console.error("Submission error:", error);

    }

}