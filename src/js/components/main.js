import home from "../pages/home";
import about from "../pages/about";

function mainComponent() {
  const main = document.createElement("main");
  main.id = "main";

  main.append(about());

  return main;
}

export default mainComponent;
