function ContactCollapse() {
    var collapsibleImg = document.getElementById("contactCollapsibleImg");
    var content = document.getElementById("contactContent");
    content.classList.toggle("collapsed");

    if (collapsibleImg.getAttribute("src") == "images/collapse.svg") {
        collapsibleImg.src = "images/expand.svg";
    }
    else {
        collapsibleImg.src = "images/collapse.svg";
    }
}

function toggleDarkMode() {
    var darkModeImg = document.getElementById("darkModeImg");
    var bodyElement = document.body;
    var formControlElements = document.getElementsByClassName("formControl");
    var formBodyElements = document.getElementsByClassName("formBody");

    if (localStorage.getItem("darkMode") == "true") {
        bodyElement.classList.remove("darkModeBody");

        if (formBodyElements.length != 0) {
            formBodyElements[0].classList.remove("formBodyDark");
            for (var i = 0; i < formControlElements.length; i++) {
                formControlElements[i].classList.remove("formControlDark");
            }
        }

        darkModeImg.src = "images/moon.svg";
        localStorage.setItem("darkMode", "false");
    }
    else {
        bodyElement.classList.add("darkModeBody");

        if (formBodyElements.length != 0) {
            formBodyElements[0].classList.add("formBodyDark");
            for (var i = 0; i < formControlElements.length; i++) {
                formControlElements[i].classList.add("formControlDark");
            }
        }
        
        darkModeImg.src = "images/sun.svg";
        localStorage.setItem("darkMode", "true");
    }
}

function loadDarkMode() {
    var darkModeImg = document.getElementById("darkModeImg");
    var bodyElement = document.body;
    var formControlElements = document.getElementsByClassName("formControl");
    var formBodyElements = document.getElementsByClassName("formBody");

    if (localStorage.getItem("darkMode") == "true") {
        bodyElement.classList.add("darkModeBody");

        if (formBodyElements.length != 0) {
            formBodyElements[0].classList.add("formBodyDark");
            for (var i = 0; i < formControlElements.length; i++) {
                formControlElements[i].classList.add("formControlDark");
            }
        }
        
        darkModeImg.src = "images/sun.svg";
    }
    else {
        bodyElement.classList.remove("darkModeBody");

        if (formBodyElements.length != 0) {
            formBodyElements[0].classList.remove("formBodyDark");
            for (var i = 0; i < formControlElements.length; i++) {
                formControlElements[i].classList.remove("formControlDark");
            }
        }
        
        darkModeImg.src = "images/moon.svg";
    }
}