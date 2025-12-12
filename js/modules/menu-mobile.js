import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (this.eventos === undefined) {
      this.eventos = ['click', 'touchstart'];
    } else {
      this.eventos = eventos;
    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add('active');
    this.menuButton.classList.add('active');
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove('active');
      this.menuButton.classList.remove('active');
    });
  }
  init() {
    if (this.menuButton) {
      this.eventos.forEach((evento) =>
        this.menuButton.addEventListener(evento, this.openMenu),
      );
    }
  }
}
