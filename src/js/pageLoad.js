import headerComponent from "./components/header";
import mainComponent from "./components/main";
import footerComponent from "./components/footer";

function pageLoad() {
  const element = document.createElement("div");

  element.id = "content";

  element.append(headerComponent(), mainComponent(), footerComponent());

  return element;
}

export default pageLoad;
