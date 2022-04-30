import home from "./pages/home";

function mainComponent() {
  const main = document.createElement("main");
  main.id = "main";

  main.append(home());

  return main;
}

export default mainComponent;
