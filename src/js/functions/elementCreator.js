function elementCreator(tag, classname, textContent = "", src = "") {
  const element = document.createElement(tag);

  element.classList.add(classname);
  element.textContent = textContent;
  element.src = src;

  return element;
}

export default elementCreator;
