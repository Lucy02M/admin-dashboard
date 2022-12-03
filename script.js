const myImage = document.querySelector(".themeimg");
const mySrc = myImage.getAttribute("src");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
  if (mySrc === "./images/weather-sunny.png") {
    myImage.setAttribute("src", "./images/weather-night.png");
    myImage.style.backgroundColor = "rgba(85, 129, 170, 0.5)"
  } else {
    myImage.setAttribute("src", "./images/weather-sunny.png");
    myImage.style.backgroundColor = "rgba(212, 182, 47, 0.5)";
  }
  let element = document.querySelector(":root");
    element.classList.toggle("dark-mode");
};

myImage.onmouseout = () => {
    const mySrc = myImage.getAttribute("src");
    myImage.style.backgroundColor = "";
};

