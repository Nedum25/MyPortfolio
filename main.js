
var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")

function openTab(tabName){
    for( let tabLink of tabLinks){
    tabLink.classList.remove("active-link");
     }

    for(let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");

}
 function toggleMenu(icon) {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("show");

  // Swap icon classes
  const iconElement = icon.querySelector("i");
  iconElement.classList.toggle("fa-bars");
  iconElement.classList.toggle("fa-times");

  // Close menu on link click (and reset icon)
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("show");
      iconElement.classList.add("fa-bars");
      iconElement.classList.remove("fa-times");
    });
  });
}
const roles = ["Data Scientist", "Frontend Developer", "Machine/Deep Learning Enthusiast"];
let index = 0;
let charIndex = 0;
let typingElement = document.querySelector(".typing-text");

function type() {
  if (charIndex < roles[index].length) {
    typingElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typingElement) type();
});
// JS in main.js
window.addEventListener("scroll", () => {
  document.querySelector(".scroll-top").classList.toggle("show", window.scrollY > 300);
});
