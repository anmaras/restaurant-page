function elementCreator(tag, classname, textContent = "") {
  const div = document.createElement(tag);

  div.classList.add(classname);
  div.textContent = textContent;

  return div;
}

export default elementCreator;
