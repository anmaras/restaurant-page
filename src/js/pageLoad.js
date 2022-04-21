import { headerComponent } from "/src/js/header";
import { mainComponent } from "/src/js/main";
import { footerComponent } from "/src/js/footer";

function pageLoad() {
  const element = document.createElement("div");

  element.id = "content";

  element.append(headerComponent(), mainComponent(), footerComponent());

  return element;
}

export { pageLoad };
