export default class AnimaNumeros {
  constructor(numeros, targetObserver, classObserver) {
    this.numeros = document.querySelectorAll(numeros);
    this.targetObserver = document.querySelectorAll(targetObserver);
    this.classObserver = classObserver;
    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.classObserver)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.targetObserver[0], { attributes: true });
  }
  init() {
    if (this.numeros.length && this.targetObserver) {
      this.addMutationObserver();
    }
    return this;
  }
}
