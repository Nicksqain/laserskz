// Аккордеон
// Меню
let dropdownButtons = document.querySelectorAll(".dropdown");
let intelDropItems = document.querySelectorAll(".item.intel .class__block");
const dropdown = document.querySelector(".dropdown__content");
function myFunction() {
  document.getElementById("dropdown").classList.toggle("show");
}
Array.from(dropdownButtons).map((e) => {
  e.onclick = function () {
    e.classList.toggle("show");
    dropdown.classList.toggle("open");

    // обнуление

    intelDropItems.forEach((element) => {
      element.style.transform = "translateX(-500px)";
    });
  };

  window.onclick = function (event) {
    if (
      !dropdown.contains(event.target) &&
      !event.target.classList.contains("dropdown")
    ) {
      var dropdowns = document.getElementsByClassName("dropdown__content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("open")) {
          openDropdown.classList.remove("open");
          e.classList.remove("show");
        }
      }
    }
  };
});

// Скроллтеллинг анимации

// #1
let timetableDropdown = document.querySelector("#timetable .image__block");
timetableDropdown.ontransitionstart = (e) => {
  if (e.propertyName == "transform") {
    let i = 0;
    let x = setInterval(() => {
      if (i == intelDropItems.length) {
        clearInterval(x);
      }
      intelDropItems[i].style.transform = "";
      i++;
      if (i == intelDropItems.length) {
        clearInterval(x);
      }
    }, 100);
  }
};
// #2

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      entry.isIntersecting ? entry.target.classList.replace('to-left', 'to-right') : entry.target.classList.replace('to-right', 'to-left')
  })
}, {
  threshold: .5
})

observer.observe(document.querySelector('img'))
