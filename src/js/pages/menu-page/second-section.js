import elementCreator from "../../functions/elementCreator";
import mayo from "/src/imgs/mayo.png";

import htmlBase from "./menu-items";

function secondSection() {
  const secondSection = elementCreator(
    "section",
    "menu-container_second-section"
  );
  const menu = elementCreator("div", "menu");
  const pdfbtn = elementCreator("div", "download-pdf", "download pdf");

  secondSection.append(pdfbtn, menu);

  menu.insertAdjacentHTML("afterbegin", htmlBase);

  return secondSection;
}

export default secondSection;
