import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, action) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    if (this.action === undefined) {
      this.action = ['touchstart', 'click'];
    } else {
      this.action = action;
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add('active');
    outsideClick(element, this.action, () => {
      element.classList.remove('active');
    });
  }
  init() {
    if (this.dropdownMenus.length) {
      this.dropdownMenus.forEach((menu) => {
        this.action.forEach((userEvent) => {
          menu.addEventListener(userEvent, this.handleClick);
        });
      });
    }
    return this;
  }
}
