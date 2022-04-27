import elementCreator from "../../functions/elementCreator";
import timeline from "/src/imgs/timeline2.png";

function secondSection() {
  const secondSection = elementCreator(
    "section",
    "about-container_second-section"
  );

  const title = elementCreator("h2", "title", "OUR STORY");
  const img = elementCreator("img", "img", "", timeline);

  secondSection.append(title, img);

  return secondSection;
}

export default secondSection;
