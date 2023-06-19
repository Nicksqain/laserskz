document.addEventListener("click", function (ClickOnTab) {
  //if (ClickOnTab.target.className == "tab__label") {   // старый код, посмотреть и исправить
  //console.log( ClickOnTab.target )
  //let numTab = ClickOnTab.target.getAttribute("tab-number");
  if (ClickOnTab.target.hasAttribute("tab-number")) {
    let target = ClickOnTab.target.closest("h4[tab-number]");
    let numTab = target.getAttribute("tab-number");
    let tabLabel = document.querySelectorAll(".class__block h4");
    for (let i = 0; i < tabLabel.length; i++) {
      tabLabel[i].classList.remove("selected");
    }
    target.classList.add("selected");
    let tabContent = document.getElementsByClassName("accordTab");

    for (let i = 0; i < tabContent.length; i++) {
      if (numTab == i) {
        // tabContent[i].style.opacity = "100%";
        // tabContent[i].style.display = "flex";
        tabContent[i].style.height = tabContent[i].scrollHeight + "px";
      } else {
        // tabContent[i].style.opacity = "0%";
        tabContent[i].style.height = "0px";
      }
    }
    //}
  }
});
