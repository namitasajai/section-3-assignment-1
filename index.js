let inputTxt = ""; 
    let major = ""; 
    let name = ""; 
    let x = 0; 
    const input = document.getElementById("name-text"); 
    input.addEventListener("keyup", function(event) {
        if(event.keyCode === 13) {
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

    function run1() {
        document.getElementById("placeholder1").style.display = "none"; 
        document.getElementById("terminalError1").style.display = "block"; 
    }
    function run2() {
        document.getElementById("placeholder2").style.display = "none"; 
        document.getElementById("terminalError2").style.display = "block"; 
    }
    function run3() {
        document.getElementById("placeholder3").style.display = "none"; 
        document.getElementById("terminalError3").style.display = "block"; 
        if (document.getElementById("c.tight").value === false) {
            document.getElementById("placeholder3").innerHTML = "Hello World";
            document.getElementById("placeholder2") .style. display = "block";
            document.getElementById ("terminalError2" ).style.display = "none";
        }
    }