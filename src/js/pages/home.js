import elementCreator from "../functions/elementCreator";
import truckLogo from "/src/imgs/truckLogo.png";
import restauranLogo from "/src/imgs/restaurantLogo.png";

function firstSection() {
  const element = elementCreator("section", "home-container_first-section");

  const markup = `<div class="home-container_first-section_title">
  <h1>DISCO</h1>
  <h2>CHEETAH</h2>
  <h2>KOREAN GRILL</h2>
  </div>`;

  element.insertAdjacentHTML("beforeend", markup);
  return element;
}

function secondSection() {
  const element = elementCreator("section", "home-container_second-section");

  const markup = `<div class="home-second-section_mission">
  <h1>SERVING REAL FOOD, FAST!</h1>
      <p>We cook up bright, bold Korean dishes 
      that are totally unique in Vancouver, 
      you won’t find our flavors and colors anywhere else. 
      And we serve it all hot, 
      fast and in a format that’s affordable and comfortable 
      for urban Vancouverites to enjoy.</p>
  </div>`;

  element.insertAdjacentHTML("beforeend", markup);

  return element;
}

/* function sectionElement() {
  let text = "MONDAY - THURSDAY 11AM – 10PM \n FRIDAY - SUNDAY 11AM - 11PM";

  const container = elementCreator("div", "constainer_visit-restaurant");
  const logo = elementCreator("img", "logo", "", restauranLogo);

  const title = elementCreator("h2", "title", "Visit Our Restaurant");
  const hours = elementCreator(
    "div",
    "hours-container",
    "MONDAY - THURSDAY 11AM – 10PM"
  );

  const address = elementCreator("a", "restauran-address");
  address.setAttribute("href", "#");
  const btn = elementCreator("button", "hours-btn", "HOURS & LOCATION");

  container.append(logo, title, hours, address, btn);
  return container;
} */

/* function secondSection() {
  const element = elementCreator("div", "second-section");
  const h2 = elementCreator(
    "h2",
    "second-section_title",
    "SERVING REAL FOOD,FAST!"
  );
  const paragraph = elementCreator(
    "p",
    "second-section_p",
    "We cook up bright, bold Korean dishes that are totally unique in Vancouver, you won’t find our flavors and colors anywhere else. And we serve it all hot, fast and in a format that’s affordable and comfortable for urban Vancouverites to enjoy."
  );

  element.append(h2, paragraph);

  return element;
} */
/* 
function thirdSection() {
  const element = elementCreator("div", "third-section");

  element.append(sectionElement());

  return element;
}
function fourthSection() {
  const element = elementCreator("div", "fourth-section");
  return element;
}
function fifthSection() {
  const element = elementCreator("div", "fifth-section");
  return element;
}
 */
function home() {
  const container = elementCreator("div", "home-container");

  container.append(firstSection(), secondSection());

  return container;
}

export default home;
