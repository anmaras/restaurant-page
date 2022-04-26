import elementCreator from "../../functions/elementCreator";

const titleText1 = "2014, Lower Mainland";
const paraText1 =
  "Coming from Seoul, we knew that we wanted to bring authentic Korean dishes to YVR, but with a Western twist. We started selling Korean tacos and burritos at our small trailer, driving all across Greater Vancouver, the Lower Mainland.";
const titleText2 = "2017, Vancouver";
const paraText2 =
  "The food truck hit the streets offering real food fast and has since become a favorite for foodies and food truck goers in Vancouver.";
const titleText3 = "2019, Davie Village";
const paraText3 =
  "The four-on-the-floor neighborhood was one on our radar for a brick-and-mortar shop because of the vibe and diversity in Davie Village. Disco Cheetah is the definition of a fast-casual Korean Cuisine that puts our heart and soul into what we cook and what we serve.";

function thirdSection() {
  const thirdSection = elementCreator("div", "third-section");
  const title1 = elementCreator("h3", "title", titleText1);
  const title2 = elementCreator("h3", "title", titleText2);
  const title3 = elementCreator("h3", "title", titleText3);
  const para1 = elementCreator("p", "text", paraText1);
  const para2 = elementCreator("p", "text", paraText2);
  const para3 = elementCreator("p", "text", paraText3);

  thirdSection.append(title1, para1, title2, para2, title3, para3);

  return thirdSection;
}

export default thirdSection;
