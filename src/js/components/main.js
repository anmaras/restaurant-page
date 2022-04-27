import home from "../pages/home";
import about from "../pages/about";
import menu from "../pages/menu";

function mainComponent() {
  const main = document.createElement("main");
  main.id = "main";

  main.append(menu());

  return main;
}

export default mainComponent;
