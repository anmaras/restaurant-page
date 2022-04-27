import menu_firstSection from "./menu-page/first-section";
import menu_secondSection from "./menu-page/second-section";

function menu() {
  const menu = document.createElement("div");

  menu.className = "menu-container";

  menu.append(menu_firstSection(), menu_secondSection());

  return menu;
}
export default menu;
