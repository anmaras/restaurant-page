import elementCreator from "../functions/elementCreator";
import date from "../functions/footerDate";
import github from "/src/icons/github.svg";

function footerComponent() {
  const footer = document.createElement("footer");
  const dateSpan = elementCreator("div", "footer-date", date());
  const iconSpan = elementCreator("img", "footer-icon", "", github);
  const text = elementCreator("div", "footer-text", `Antonis Maras `);

  footer.id = "footer";

  footer.append(text, dateSpan, iconSpan);

  return footer;
}

export default footerComponent;
