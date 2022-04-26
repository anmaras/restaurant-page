import elementCreator from "../functions/elementCreator";
import date from "../functions/footerDate";
import github from "/src/icons/github.svg";
import hyperLinkGithub from "../functions/hyperlinkGitHub";

function footerComponent() {
  const footer = document.createElement("footer");
  const dateSpan = elementCreator("div", "footer-date", date());
  const iconSpan = elementCreator("img", "footer-icon", "", github);
  const text = elementCreator("div", "footer-text", `Antonis Maras `);

  footer.id = "footer";

  footer.append(text, dateSpan, iconSpan);

  footer.childNodes[2].addEventListener("click", hyperLinkGithub);

  return footer;
}

export default footerComponent;
