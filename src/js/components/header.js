import replaceContent from "../functions/replaceContent";
import discoCheetah from "/home/antonis/the_odin_project/restaurant-page/src/imgs/discoCheetah.png";

function navContainer() {
  const nav = document.createElement("nav");

  nav.className = "nav-container";

  const markup = ` <img src="${discoCheetah}" class="nav-icon" />
    <div class="nav__page-link">HOME</div>
    <div class="nav__page-link">MENU</div>
    <div class="nav__page-link">ABOUT</div>
    <div class="nav-btn">ORDER ONLINE</div>  
   `;

  nav.insertAdjacentHTML("beforeend", markup);

  const buttons = nav.childNodes;

  buttons.forEach((button) => {
    button.addEventListener("click", replaceContent);
  });

  return nav;
}

function headerComponent() {
  const header = document.createElement("header");

  header.id = "header";

  header.append(navContainer());

  return header;
}
export default headerComponent;
