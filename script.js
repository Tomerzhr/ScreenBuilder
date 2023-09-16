// tab event

document.addEventListener("DOMContentLoaded", function (event) {
  let tab;

  const buttons = document.querySelectorAll(".Button");

  for (const button of buttons) {
    button.addEventListener("click", function (event) {
      tab = button.lastElementChild.innerHTML;

      openContent(tab);
    });
  }
});

function openContent(tabName) {
  let i;
  let tabContent;

  tabContent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
}

openContent("Main");

// selected tab

var selectedButton = document.querySelectorAll(".Button");
for (var i = 0; i < selectedButton.length; i++) {
  selectedButton[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Close/Open menu

const closer = document.querySelector(".close");
const workDesk = document.querySelector(".workDesk");
closer.addEventListener("click", togNav);

function togNav() {
  if (workDesk.style.marginLeft == "0px") {
    document.querySelector(".workDesk").style.marginLeft = "360px";
  } else {
    document.querySelector(".workDesk").style.marginLeft = "0px";
  }
}

// element adding section

///////////////element tab ////////////////

// layout

const elementType = document.getElementById("element-type");
const elementWidth = document.getElementById("element-width");
const elementHeight = document.getElementById("element-height");

// style

const elementBackground = document.getElementById("element-background");
const elementBorderNumber = document.getElementById("element-border-number");
const elementBorderType = document.getElementById("element-border-type");
const elementBorderColor = document.getElementById("element-border-color");
const elementBorderRadios = document.getElementById("element-border-radios");

// margin
const elementMarginTop = document.getElementById("element-margin-top");
const elementMarginRight = document.getElementById("element-margin-right");
const elementMarginBottom = document.getElementById("element-margin-bottom");
const elementMarginLeft = document.getElementById("element-margin-left");

// padding
const elementPaddingTop = document.getElementById("element-padding-top");
const elementPaddingRight = document.getElementById("element-padding-right");
const elementPaddingBottom = document.getElementById("element-padding-bottom");
const elementPaddingLeft = document.getElementById("element-padding-left");

//shadow
const elementShadowX = document.getElementById("element-shadow-x");
const elementShadowY = document.getElementById("element-shadow-y");
const elementShadowBlur = document.getElementById("element-shadow-blur");
const elementShadowSpread = document.getElementById("element-shadow-spread");
const elementShadowColor = document.getElementById("element-shadow-color");

//opacity
const elementOpacity = document.getElementById("element-opacity");

// flex
const elementDisplay = document.getElementById("element-display");
const flexDirectionDiv = document.querySelector(".flex-direction");
const alignItemsDiv = document.querySelector(".align-items");
const justifyContentDiv = document.querySelector(".justify-content");
const flexDirection = document.getElementById("element-flex-direction");
const alignItems = document.getElementById("element-align-items");
const justifyContent = document.getElementById("element-justify-content");

elementDisplay.addEventListener("change", displayElement);

function displayElement() {
  if (elementDisplay.value == "flex") {
    flexDirectionDiv.style.display = "flex";
    alignItemsDiv.style.display = "flex";
    justifyContentDiv.style.display = "flex";
  } else {
    flexDirectionDiv.style.display = "none";
    alignItemsDiv.style.display = "none";
    justifyContentDiv.style.display = "none";
  }
}
displayElement();

// overflow
const overFlow = document.getElementById("element-overflow");

//  buttons
const addElementButton = document.querySelector(".add-element-btn");
const deleteElementButton = document.querySelector(".delete-element-btn");

const container = document.querySelector(".container");

addElementButton.addEventListener("click", elementValidation);
deleteElementButton.addEventListener("click", deleteElement);

function elementValidation(e) {
  e.preventDefault();

  if (elementWidth.value == "") {
    elementWidth.style.borderColor = "grey";
  } else if (elementHeight.value == "") {
    elementHeight.style.borderColor = "grey";
  } else {
    buildElement();
  }
}

function buildElement() {
  let element = document.createElement(`${elementType.value}`);
  element.classList.add(`${elementType.value}-new`);
  element.style.width = elementWidth.value + "px";
  element.style.height = elementHeight.value + "px";
  element.style.background = elementBackground.value;
  element.style.margin =
    elementMarginTop.value +
    "px" +
    " " +
    elementMarginRight.value +
    "px" +
    " " +
    elementMarginBottom.value +
    "px" +
    " " +
    elementMarginLeft.value +
    "px";
  element.style.padding =
    elementPaddingTop.value +
    "px" +
    " " +
    elementPaddingRight.value +
    "px" +
    " " +
    elementPaddingBottom.value +
    "px" +
    " " +
    elementPaddingLeft.value +
    "px";
  element.style.border = elementBorderNumber.value + "px" + " " + elementBorderType.value + " " + elementBorderColor.value;
  element.style.borderRadius = elementBorderRadios.value + "px";
  element.style.boxShadow =
    elementShadowX.value +
    "px" +
    " " +
    elementShadowY.value +
    "px" +
    " " +
    elementShadowBlur.value +
    "px" +
    " " +
    elementShadowSpread.value +
    "px" +
    " " +
    elementShadowColor.value;

  element.style.opacity = elementOpacity.value;
  element.style.display = elementDisplay.value;
  element.style.flexDirection = flexDirection.value;
  element.style.alignItems = alignItems.value;
  element.style.justifyContent = justifyContent.value;
  element.style.overflow = overFlow.value;
  container.appendChild(element);
}

function deleteElement() {
  container.removeChild(container.lastChild);
}

///////////// font tab //////////////////

//property
const fontType = document.getElementById("font-type");
const innerText = document.getElementById("font-text");
const fontSize = document.getElementById("font-size");
const fontWeight = document.getElementById("font-weight");

//style
const fontFamily = document.getElementById("font-family");
const fontColor = document.getElementById("font-color");
const fontAlign = document.getElementById("font-text-align");

//text area
const fontTextArea = document.getElementById("font-text");

//buttons
const addFontButton = document.querySelector(".add-font-btn");
const deleteFontButton = document.querySelector(".delete-font-btn");

addFontButton.addEventListener("click", fontValidation);
deleteFontButton.addEventListener("click", deleteFont);

function fontValidation(e) {
  e.preventDefault();

  if (fontTextArea.value == "") {
    fontTextArea.style.borderColor = "grey";
  } else {
    fontTextArea.style.borderColor = "#dddddd";
    addFont();
  }
}

function addFont() {
  const div = document.querySelector(".div-new");

  let font = document.createElement(`${fontType.value}`);
  font.classList.add(`${fontType.value}-new`);
  font.innerText = innerText.value;
  font.style.fontSize = fontSize.value + "px";
  font.style.fontWeight = fontWeight.value;
  font.style.fontFamily = fontFamily.value;
  font.style.color = fontColor.value;
  font.style.textAlign = fontAlign.value;

  if (container.contains(div)) {
    container.lastChild.appendChild(font);
  } else if (container) {
    container.appendChild(font);
  }
}

function deleteFont() {
  const div = document.querySelector(".div-new");
  if (container.contains(div)) {
    div.removeChild(div.lastChild);
  } else if (container) {
    container.removeChild(container.lastChild);
  }
}

////////////// main///////////

///// global properties

// display
const globalDisplay = document.getElementById("global-display");
const globalFlexDirection = document.querySelector(".flex-direction-main");
const globalAlignItems = document.querySelector(".align-items-main");
const globalJustifyContent = document.querySelector(".justify-content-main");
const globalFlexDirectionInput = document.getElementById("global-flex-direction");
const globalAlignItemsInput = document.getElementById("global-align-items");
const globalJustifyContentInput = document.getElementById("global-justify-content");

globalDisplay.addEventListener("change", displayGlobal);

function displayGlobal() {
  if (globalDisplay.value == "flex") {
    globalFlexDirection.style.display = "flex";
    globalAlignItems.style.display = "flex";
    globalJustifyContent.style.display = "flex";
  } else {
    globalFlexDirection.style.display = "none";
    globalAlignItems.style.display = "none";
    globalJustifyContent.style.display = "none";
  }
}

displayGlobal();

// overflow
const globalOverflow = document.getElementById("global-overflow");

////// global style
const globalBackground = document.getElementById("global-background");

// buttons
const applyGlobalButton = document.querySelector(".apply-global-btn");
const undoGlobalButton = document.querySelector(".undo-global-btn");

applyGlobalButton.addEventListener("click", applyGlobal);
undoGlobalButton.addEventListener("click", undoGlobal);

function applyGlobal() {
  container.style.display = globalDisplay.value;
  container.style.flexDirection = globalFlexDirectionInput.value;
  container.style.alignItems = globalAlignItemsInput.value;
  container.style.justifyContent = globalJustifyContentInput.value;
  container.style.overflow = globalOverflow.value;
  container.style.backgroundColor = globalBackground.value;
}

function undoGlobal() {
  container.style = "";
}

// save project to sessionStorage
const saveButton = document.querySelector(".save-btn");
const clearButton = document.querySelector(".clear-btn");

saveButton.addEventListener("click", () => {
  let project = container.innerHTML;
  sessionStorage.setItem("project", project);
});

clearButton.addEventListener("click", () => {
  sessionStorage.removeItem("project");
  container.innerHTML = "";
});

window.onload = () => {
  const project = sessionStorage.getItem("project");
  container.innerHTML = project;
};
