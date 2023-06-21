
class Store<T> {
  constructor(private nome: string) {}

  set salvar(dados: T) {
    const dadosString = JSON.stringify(dados);
    localStorage.setItem(this.nome, dadosString);
  }

  get pegar(): any {
    const dadosString = localStorage.getItem(this.nome);
    if (dadosString) {
      return JSON.parse(dadosString);
    }
  }

  apagar(): void {
    localStorage.removeItem(this.nome)
  }
}

export default Store;
