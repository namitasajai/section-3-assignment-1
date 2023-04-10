let inputTxt = "";
let major = "";
let name = "";
let x = 0;
const input = document.getElementById("name-text");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("input-btn").click();
    }
})

function changeQuestion() {
    inputTxt = document.getElementById("name-text").value;
    if (document.getElementById("name-text").value === "") {
        document.getElementById("name-text").style.borderColor = "rgb(185, 50, 50)";
        document.getElementById("input-btn").style.borderColor = "rgb(185, 50, 50)";
    } else if (x === 0) {
        x++;
        name = inputTxt;
        console.log(name);
        document.getElementById("questions").innerHTML = "What is your major?"
        document.getElementById("name-text").value = "";
    }
    else if (x === 1) {
        major = inputTxt;
        console.log(inputTxt);
        x++;
        major = inputTxt;
        document.getElementById("questions").innerHTML = "Do you like computer science?"
        document.getElementById("name-text").value = "";
    }

    else if (x === 2 && (inputTxt === "Yes" || inputTxt === "yes")) {
        x++;
        console.log(x);
        document.getElementById("questions").innerHTML = "Do you like PB&J?"
        document.getElementById("name-text").value = "";
    }
    else if (x === 2) {
        document.getElementById("questions").innerHTML = "<u>Yes</u> is the only right answer!"
        document.getElementById("name-text").value = "";
    }
    else if (x === 3 && (inputTxt === "Yes" || inputTxt === "yes")) {
        console.log(x)
        document.getElementById("questions").innerHTML = "Perfect..."
        document.getElementById("name").innerHTML = capitalize(name);
        document.getElementById("major").innerHTML = major.toLowerCase();
        document.getElementById("introduction").style.display = "block";
        document.getElementById("proceed0").style.display = "block";

    }
    else if (x === 3) {
        console.log(x)
        document.getElementById("questions").innerHTML = "Yes is the only right answer!"
        document.getElementById("name-text").value = "";
    }
    document.getElementById("placeholder1").innerHTML = name.toLowerCase() + "@pbjChef101 %";
    document.getElementById("placeholder2").innerHTML = name.toLowerCase() + "@pbjChef101 %";
    console.log(document.getElementById("placeholder2").innerHTML);
    console.log("reached");
    document.getElementById("placeholder3").innerHTML = name.toLowerCase() + "@pbjChef101 %";
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Part 1 - Run Button Functions
function run1() {
    document.getElementById("runTxt1").style.display = "none";
    document.getElementById("load1").style.display = "block";
    timeout = setTimeout(run1Helper, 2000);
}
function run1Helper() {
    document.getElementById("placeholder1").style.display = "none";
    document.getElementById("terminalError1").style.display = "block";
    var parts = document.getElementById("expDate").value.split('-');
    if (parts !== null) {
        var date = new Date(parts[0], parts[1] - 1, parts[2]); 
        var today = new Date(); 
        if (today < date) { //if date is after today
            document.getElementById("placeholder1").innerHTML = "Congrats! The bread is not expired!";
            document.getElementById("placeholder1").style.display = "block";
            document.getElementById("terminalError1").style.display = "none";
            document.getElementById("proceed1").style.display = "block";
        }
    }
    document.getElementById("runTxt1").style.display = "block";
    document.getElementById("load1").style.display = "none";
}

function run2() {
    document.getElementById("runTxt2").style.display = "none";
    document.getElementById("load2").style.display = "block";
    timeout = setTimeout(run2Helper, 2000);
}
function run2Helper() {
    document.getElementById("placeholder2").style.display = "none";
    document.getElementById("terminalError2").style.display = "block";
    if (document.getElementById("isAllergic").value === "false"
        && document.getElementById("b.spreaded").value === "true" &&
        document.getElementById("isAllergicVar").value === "isAllergic") {
        document.getElementById("placeholder2").innerHTML = "Congrats! The peanut butter has been spread!";
        document.getElementById("placeholder2").style.display = "block";
        document.getElementById("terminalError2").style.display = "none";
        document.getElementById("proceed2").style.display = "block";
    } else if (document.getElementById("isAllergicVar").value === "isNotAllergic") {
        document.getElementById("terminalError2").innerHTML = "Error: variable isAllergic might not have been initialized."
    } else if (document.getElementById("b.spreaded").value === "false") {
        document.getElementById("terminalError2").innerHTML = "Error: The peanut butter has not been spread."
    } else {
        document.getElementById("terminalError2").innerHTML = "Error: You're allergic to Peanut Butter!"
    }
    document.getElementById("runTxt2").style.display = "block";
    document.getElementById("load2").style.display = "none";
}
function run3() {
    document.getElementById("runTxt3").style.display = "none";
    document.getElementById("load3").style.display = "block";
    timeout = setTimeout(run3Helper, 2000);
}

function run3Helper() {
    document.getElementById("placeholder3").style.display = "none";
    document.getElementById("terminalError3").style.display = "block";
    if (document.getElementById("isTight").value === "false") {
        document.getElementById("placeholder3").innerHTML = "Hello World";
        document.getElementById("placeholder3").style.display = "block";
        document.getElementById("terminalError3").style.display = "none";
        document.getElementById("confetti").style.display = "block";
    }
    document.getElementById("runTxt3").style.display = "block";
    document.getElementById("load3").style.display = "none";
}

function clickStart() {
    document.getElementById("part1").style.display = "block";
}

function proceed1() {
    document.getElementById("part2").style.display = "block";
}
function proceed2() {
    document.getElementById("part3").style.display = "block";
}

function showConfetti() {
    var pbj1 = document.getElementById("pbj1");
    pbj1.style.display = "block";
    pbj1.style.animation = "confetti 3s linear infinite alternate";
    pbj1.style.position = 'relative';
    pbj1.style.top = "10px";
    pbj1.style.left = "40%";
    // pbj1.style.zIndex = "2";
    // var pbj2 = document.getElementById("pbj2");
    // pbj2.style.display = "block";
    // pbj2.style.animation = "confetti 3s linear infinite alternate";
    // pbj2.style.position = 'relative';
    // pbj2.style.bottom = "10px";
    // pbj2.style.left = "15%";
    // pbj2.style.zIndex = "2";
    document.getElementById("confetti").style.display = "none";
  }
