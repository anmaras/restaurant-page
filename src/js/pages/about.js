import timeline from "/src/imgs/timeline2.png";

const timelineText = [
  {
    title: `2014, Lower Mainland`,
    text: `Coming from Seoul, we knew that we wanted to bring authentic Korean dishes to YVR, 
           but with a Western twist. We started selling Korean tacos and burritos at our small trailer, 
           driving all across Greater Vancouver, the Lower Mainland.`,
  },
  {
    title: `2017, Vancouver`,
    text: `The food truck hit the streets offering real food fast and 
            has since become a favorite for foodies and food truck goers in Vancouver.`,
  },
  {
    title: `2019, Davie Village`,
    text: `The four-on-the-floor neighborhood was one on our radar for a brick-and-mortar shop 
           because of the vibe and diversity in Davie Village.Disco Cheetah is the definition of a fast-casual Korean Cuisine 
           that puts our heart and soul into what we cook and what we serve.`,
  },
];

function aboutStoryText() {
  let markup = "";
  for (let i = 0; i < timelineText.length; i++) {
    markup += `<h3 class="title">${timelineText[i].title}</h3>
               <p class="text">${timelineText[i].text}</p>`;
  }
  return markup;
}

function about() {
  const about = document.createElement("div");
  about.className = "about-container";

  const markup = ` <section class="about-container_first-section">
      <div class="img">summer</div>
      <h1 class="title">ABOUT US</h1>
    </section>

    <section class="about-container_second-section">
      <h2 class="title">OUR STORY</h2>
      <img src="${timeline}" alt="test" class="img" />
    </section>
    <section class="about-container_third-section">${aboutStoryText()}</section>
`;

  about.insertAdjacentHTML("beforeend", markup);
  return about;
}
export default about;
