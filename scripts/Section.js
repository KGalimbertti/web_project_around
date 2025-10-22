class Section {
  constructor({ items }, containerSelector) {
    this._renderItems = items;
    this.container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderItems.forEach((item) => {
      this.container.append(item);
    });
  }

  addItem(element) {
    this.container.append(element);
  }
}
