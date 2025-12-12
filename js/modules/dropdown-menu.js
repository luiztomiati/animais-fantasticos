import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, action) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    if (this.action === undefined) {
      this.action = ['touchstart', 'click'];
    } else {
      this.action = action;
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, this.action, () => {
      this.classList.remove('active');
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
