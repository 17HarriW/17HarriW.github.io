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
    var welcomeTitleElement = document.getElementById("welcomeTitle");

    

    if (localStorage.getItem("darkMode") == "true") {
        bodyElement.classList.remove("darkModeBody");

        if (formBodyElements.length != 0) {
            formBodyElements[0].classList.remove("formBodyDark");
            for (var i = 0; i < formControlElements.length; i++) {
                formControlElements[i].classList.remove("formControlDark");
            }
        }

        if (welcomeTitleElement != null) {
            welcomeTitleElement.classList.remove("bgTitleDark");
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

        if (welcomeTitleElement != null) {
            welcomeTitleElement.classList.add("bgTitleDark");
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
    var welcomeTitleElement = document.getElementById("welcomeTitle");

    if (localStorage.getItem("darkMode") == "true") {
        bodyElement.classList.add("darkModeBody");

        if (formBodyElements.length != 0) {
            formBodyElements[0].classList.add("formBodyDark");
            for (var i = 0; i < formControlElements.length; i++) {
                formControlElements[i].classList.add("formControlDark");
            }
        }

        if (welcomeTitleElement != null) {
            welcomeTitleElement.classList.add("bgTitleDark");
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

        if (welcomeTitleElement != null) {
            welcomeTitleElement.classList.remove("bgTitleDark");
        }
        
        darkModeImg.src = "images/moon.svg";
    }
}