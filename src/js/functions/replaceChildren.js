import about from "../pages/about";

function replaceChildren() {
  document.querySelector("#main").replaceChildren(about());
}
export default replaceChildren;
