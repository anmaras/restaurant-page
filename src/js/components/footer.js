import date from "../functions/footerDate";
import github from "/src/icons/github.svg";
import hyperLinkGithub from "../functions/hyperlinkGitHub";

function footerComponent() {
  const footer = document.createElement("footer");
  footer.id = "footer";
  const markup = `
  <div class="footer-text">Antonis Maras</div>
    <img src="${github}" class="footer-icon" alt=" github icon" />
    <div class="footer-date">${date()}</div>
  `;
  footer.insertAdjacentHTML("beforeend", markup);
  footer.childNodes[3].addEventListener("click", hyperLinkGithub);

  return footer;
}
export default footerComponent;
