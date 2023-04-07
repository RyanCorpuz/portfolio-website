const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {
    sections.forEach((current) => {
        const sectionTop = current.offsetTop - 150;
        const sectionHeight = current.offsetHeight;

        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("pullUp");
        } else {
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("pullUp");
        }
    });
});

const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open")
  const isOpen = dropDownMenu.classList.contains("open")

  toggleBtnIcon.classList = isOpen 
    ? "fa-solid fa-xmark" : 
  "fa-solid fa-bars";
}

window.addEventListener('click', function(e){
    if (!document.getElementById('dropdown_menu').contains(e.target) && (!document.getElementById('navbar').contains(e.target)) && dropDownMenu.classList.contains("open")){
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")
  
    toggleBtnIcon.classList = isOpen 
      ? "fa-solid fa-xmark" : 
    "fa-solid fa-bars"; //the same code you've used to hide the menu
  } 
})

const links = document.querySelectorAll(".droplink")

links.forEach( l => l.addEventListener("click", function(e) {
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")
  
    toggleBtnIcon.classList = isOpen 
      ? "fa-solid fa-xmark" : 
    "fa-solid fa-bars"; //the same code you've used to hide the menu
  
}));

window.addEventListener("scroll", function (e){
    const isOpen = dropDownMenu.classList.contains("open")
    if(isOpen) {
        dropDownMenu.classList.toggle("open")
    }
    toggleBtnIcon.classList = isOpen 
        ? "fa-solid fa-xmark" : 
      "fa-solid fa-bars";
})