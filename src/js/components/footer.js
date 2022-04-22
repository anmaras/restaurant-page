import elementCreator from "../functions/elementCreator";
import date from "../functions/footerDate";

function footerComponent() {
  const footer = document.createElement("footer");
  const dateSpan = elementCreator("span", "footer-date", date());
  const iconSpan = elementCreator(
    "img",
    "footer-icon",
    "",
    "./src/icons/github.svg"
  );

  footer.id = "footer";

  footer.append(elementCreator("div", "footer-text", `Antonis Maras`));

  footer.childNodes[0].append(dateSpan, iconSpan);

  return footer;
}

export default footerComponent;
