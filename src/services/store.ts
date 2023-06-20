
class Store<T> {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  salvarDados(dados: T) {
    const dadosString = JSON.stringify(dados);
    localStorage.setItem(this.nome, dadosString);
  }

  pegarDados(): any {
    const dadosString = localStorage.getItem(this.nome);
    if (dadosString) {
      return JSON.parse(dadosString);
    }
  }

  apagarDados(): void {
    localStorage.removeItem(this.nome)
  }
}

export default Store;
