import elementCreator from "../functions/elementCreator";
import about_firstSection from "./about-page/first-section";
import about_secondSection from "./about-page/second-section";
import about_thirdSection from "./about-page/third-section";

function about() {
  const about = elementCreator("div", "about-container");

  about.append(
    about_firstSection(),
    about_secondSection(),
    about_thirdSection()
  );
  return about;
}
export default about;
