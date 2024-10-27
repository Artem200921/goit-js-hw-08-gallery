const list = document.querySelector(".js-gallery");
const button = document.querySelector(".gallery__button");

button.classList.add("hide");

list.addEventListener("click", (event) => {
  const listItem = event.target.closest("li");
  if (listItem) {
    listItem.classList.add("is-open");
    button.classList.add("visible");
    button.classList.remove("hide");
    button.addEventListener("click", () => {
      listItem.classList.remove("is-open");
      button.classList.replace("visible", "hide");
    });
  }
});
