import elementCreator from "../../functions/elementCreator";
import summer from "/src/imgs/summer.jpg";

function firstSection() {
  const firstSection = elementCreator(
    "section",
    "about-container_first-section"
  );
  const summerImg = elementCreator("div", "img", "", "summer");
  const summerImgTitle = elementCreator("h1", "title", "ABOUT US");

  firstSection.append(summerImg, summerImgTitle);
  return firstSection;
}

export default firstSection;
