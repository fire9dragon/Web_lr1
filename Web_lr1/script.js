popupTitle = document.getElementById("header-title");
popupText = document.getElementById("header-text");

popupTitle.addEventListener("mouseover", () => {
  popupText.style.height = `${popupText.scrollHeight}px`;
});

popupTitle.addEventListener("mouseout", () => {
  popupText.style.height = `${popupText.scrollHeight}px`;
  window.getComputedStyle(popupText, null).getPropertyValue("height");
  popupText.style.height = "0";
});

popupText.addEventListener("transitionend", () => {
  if (popupText.style.height !== "0px") {
    popupText.style.height = "auto";
  }
});
