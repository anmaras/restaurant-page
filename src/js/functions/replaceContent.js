import about from "../pages/about";
import home from "../pages/home";
import menu from "../pages/menu";

function replaceContent() {
  const MENU = "MENU";
  const HOME = "HOME";
  const ABOUT = "ABOUT";
  let content = "";

  if (this.textContent === HOME) {
    content = home();
  } else if (this.textContent === MENU) {
    content = menu();
  } else if (this.textContent === ABOUT) {
    content = about();
  } else return;
  document.querySelector("#main").replaceChildren(content);
}
export default replaceContent;
