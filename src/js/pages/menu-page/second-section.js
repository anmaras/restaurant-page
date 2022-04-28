import elementCreator from "../../functions/elementCreator";

import { htmlMain, htmlSides } from "./menu-items";

function secondSection() {
  const secondSection = elementCreator(
    "section",
    "menu-container_second-section"
  );
  const pdfbtn = elementCreator("div", "download-pdf", "download pdf");
  const menuMains = elementCreator("div", "menu-main");
  const menuSides = elementCreator("div", "menu-sides");

  menuMains.insertAdjacentHTML("afterbegin", htmlMain);
  menuSides.insertAdjacentHTML("afterbegin", htmlSides);

  secondSection.append(pdfbtn, menuMains, menuSides);

  return secondSection;
}

export default secondSection;
