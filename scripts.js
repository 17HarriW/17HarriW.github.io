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