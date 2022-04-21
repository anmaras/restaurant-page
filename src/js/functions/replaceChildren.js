import about from "../pages/about";
import home from "../pages/home";
import menu from "../pages/menu";

function replaceChildren() {
  let child = "";

  if (this.textContent === "Home") child = home();
  else if (this.textContent === "Menu") child = menu();
  else child = about();

  document.querySelector("#main").replaceChildren(child);
}
export default replaceChildren;
