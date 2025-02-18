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

cards = document.getElementsByClassName("product-card");

Array.from(cards).forEach(function (card) {
  const characters = card.querySelector(".product-characters");

  card.addEventListener("mouseover", () => {
    characters.style.height = `${characters.scrollHeight}px`;
  });

  card.addEventListener("mouseout", () => {
    characters.style.height = `${characters.scrollHeight}px`;
    window.getComputedStyle(characters, null).getPropertyValue("height");
    characters.style.height = "0";
  });

  characters.addEventListener("transitionend", () => {
    if (characters.style.height !== "0px") {
      characters.style.height = "auto";
    }
  });
});
