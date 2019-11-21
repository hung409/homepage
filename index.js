function writecom() {
  let element = document.createElement('div');
  element.innerHTML = 'Hello Webpack';
  return element;
}
document.body.appendChild(writecom());