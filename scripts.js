function ALevelsCollapse() {
    var collapsibleImg = document.getElementById("ALevelCollapsibleImg");
    var content = document.getElementById("ALevelContent");
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
    var element = document.body;

    if (localStorage.getItem("darkMode") == "true") {
        element.classList.remove("darkModeBody");
        darkModeImg.src = "images/moon.svg";
        localStorage.setItem("darkMode", "false");
    }
    else {
        element.classList.add("darkModeBody");
        darkModeImg.src = "images/sun.svg";
        localStorage.setItem("darkMode", "true");
    }
}

function loadDarkMode() {
    var darkModeImg = document.getElementById("darkModeImg");
    var element = document.body;

    if (localStorage.getItem("darkMode") == "true") {
        element.classList.add("darkModeBody");
        darkModeImg.src = "images/sun.svg";
    }
    else {
        element.classList.remove("darkModeBody");
        darkModeImg.src = "images/moon.svg";
    }
}