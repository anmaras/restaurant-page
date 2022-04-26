import elementCreator from "../functions/elementCreator";
import replaceContent from "../functions/replaceContent";
import discoCheetah from "/home/antonis/the_odin_project/restaurant-page/src/imgs/discoCheetah.png";

function navContainer() {
  const nav = document.createElement("nav");

  nav.className = "nav-container";

  nav.append(
    elementCreator("img", "nav-icon", "", discoCheetah),
    elementCreator("div", "nav-div", "HOME"),
    elementCreator("div", "nav-div", "MENU"),
    elementCreator("div", "nav-div", "ABOUT"),
    elementCreator("div", "nav-btn", "ORDER ONLINE")
  );
  const buttons = nav.childNodes;

  buttons.forEach((button) => {
    button.addEventListener("click", replaceContent);
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
