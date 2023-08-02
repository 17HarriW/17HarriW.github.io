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

function one() {
    var elements = document.getElementsByClassName("column");
    var btns = document.getElementsByClassName("gridBtn");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%";
    }
    btns[0].classList.add("isActive");
    btns[1].classList.remove("isActive");
    btns[2].classList.remove("isActive");
}
function two() {
    var elements = document.getElementsByClassName("column");
    var btns = document.getElementsByClassName("gridBtn");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "40%";
    }
    btns[0].classList.remove("isActive");
    btns[1].classList.add("isActive");
    btns[2].classList.remove("isActive");
}
function four() {
    var elements = document.getElementsByClassName("column");
    var btns = document.getElementsByClassName("gridBtn");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "20%";
    }
    btns[0].classList.remove("isActive");
    btns[1].classList.remove("isActive");
    btns[2].classList.add("isActive");
}
function toggleDarkMode() {
    var darkModeImg = document.getElementById("darkModeImg");
    var bodyElement = document.body;
    var formControlElements = document.getElementsByClassName("formControl");
    var formBodyElements = document.getElementsByClassName("formBody");
    var bgTitleElements = document.getElementsByClassName("bgTitle");

    

    if (localStorage.getItem("darkMode") == "true") {
        bodyElement.classList.remove("darkModeBody");

        if (formBodyElements.length != 0) {
            formBodyElements[0].classList.remove("formBodyDark");
            for (var i = 0; i < formControlElements.length; i++) {
                formControlElements[i].classList.remove("formControlDark");
            }
        }

        if (bgTitleElements.length != 0) {
            for (var i = 0; i < bgTitleElements.length; i++) {
                bgTitleElements[i].classList.remove("bgTitleDark");
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

        if (bgTitleElements.length != 0) {
            for (var i = 0; i < bgTitleElements.length; i++) {
                bgTitleElements[i].classList.add("bgTitleDark");
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
    var bgTitleElements = document.getElementsByClassName("bgTitle");

    if (localStorage.getItem("darkMode") == "true") {
        bodyElement.classList.add("darkModeBody");

        if (formBodyElements.length != 0) {
            formBodyElements[0].classList.add("formBodyDark");
            for (var i = 0; i < formControlElements.length; i++) {
                formControlElements[i].classList.add("formControlDark");
            }
        }

        if (bgTitleElements.length != 0) {
            for (var i = 0; i < bgTitleElements.length; i++) {
                bgTitleElements[i].classList.add("bgTitleDark");
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

        if (bgTitleElements.length != 0) {
            for (var i = 0; i < bgTitleElements.length; i++) {
                bgTitleElements[i].classList.remove("bgTitleDark");
            }
        }
        
        darkModeImg.src = "images/moon.svg";
    }
}