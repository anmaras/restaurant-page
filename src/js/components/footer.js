import elementCreator from "../functions/elementCreator";

function footerComponent() {
  const footer = document.createElement("footer");

  footer.id = "footer";

  footer.append(elementCreator("div", "footer-text", "Antonis Maras 2022"));

  return footer;
}

export default footerComponent;
