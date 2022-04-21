import elementCreator from "../functions/elementCreator";
import replaceChildren from "../functions/replaceChildren";

function navContainer() {
  const nav = document.createElement("nav");

  nav.className = "nav-container";

  nav.append(
    elementCreator("button", "nav-btn", "Home"),
    elementCreator("button", "nav-btn", "Menu"),
    elementCreator("button", "nav-btn", "About")
  );
  const buttons = nav.childNodes;

  buttons.forEach((button) => {
    button.addEventListener("click", replaceChildren);
  });

  return nav;
}

function headerComponent() {
  const header = document.createElement("header");

  header.id = "header";

  header.append(navContainer());

  return header;
}
export default headerComponent;
