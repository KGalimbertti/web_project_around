export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderItems = items;
    this._renderer = renderer;
    this.container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderItems.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this.container.prepend(element);
  }
}
