import about from "../pages/about";
import home from "../pages/home";
import menu from "../pages/menu";

function replaceContent() {
  const MENU = "MENU";
  const HOME = "HOME";
  let content = "";

  if (this.textContent === HOME) {
    content = home();
  } else if (this.textContent === MENU) {
    content = menu();
  } else content = about();

  document.querySelector("#main").replaceChildren(content);
}
export default replaceContent;
