export default class Modal {
  constructor(abrir, fechar, conteudo) {
    this.botaoAbrir = document.querySelector(abrir);
    this.botaoFechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(conteudo);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }
  addEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEvents();
    }
    return this;
  }
}
