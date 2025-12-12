export default class Funcionamento {
  constructor(funcionamento, aberto) {
    this.funcionamento = document.querySelector(funcionamento);
    if (funcionamento) {
      this.activeClass = aberto;
    }
  }
  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(',')
      .map(Number);
  }
  dadosAtuais() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }
  aberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }
  ativaAberto() {
    if (this.aberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }
  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.aberto();
      this.dadosAtuais();
      this.ativaAberto();
    }
    return this;
  }
}
