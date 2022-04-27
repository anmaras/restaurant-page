import elementCreator from "../../functions/elementCreator";

function firstSection() {
  const firstSection = elementCreator(
    "section",
    "menu-container_first-section"
  );
  const tableImg = elementCreator("div", "img");
  const tableImgTitle = elementCreator("h1", "title", "menus");

  firstSection.append(tableImg, tableImgTitle);
  return firstSection;
}

export default firstSection;
