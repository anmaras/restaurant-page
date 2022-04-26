import elementCreator from "../functions/elementCreator";
import firstSection from "./about-page/first-section";
import secondSection from "./about-page/second-section";
import thirdSection from "./about-page/third-section";

function about() {
  const about = elementCreator("div", "about-container");

  about.append(firstSection(), secondSection(), thirdSection());
  return about;
}
export default about;
