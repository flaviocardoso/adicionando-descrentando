
class Store {
  constructor(private nome: string) {}

  set value(dados: any) {
    const dadosString = JSON.stringify(dados);
    localStorage.setItem(this.nome, dadosString);
  }

  get value(): any {
    const dadosString = localStorage.getItem(this.nome);
    if (dadosString) {
      return JSON.parse(dadosString);
    }
  }
}

export default Store;
