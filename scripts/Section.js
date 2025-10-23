class Section {
  constructor({ items }, containerSelector) {
    this._renderItems = items;
    this.container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderItems.forEach((item) => {
      this.container.prepend(item);
    });
  }

  addItem(element) {
    this.container.prepend(element);
  }
}
