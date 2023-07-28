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


function darkMode() {
    var darkModeImg = document.getElementById("darkModeImg");
    var element = document.body;
    element.classList.toggle("darkModeBody");

    if (darkModeImg.getAttribute("src") == "images/moon.svg") {
        darkModeImg.src = "images/sun.svg";
    }
    else {
        darkModeImg.src = "images/moon.svg";
    }
}