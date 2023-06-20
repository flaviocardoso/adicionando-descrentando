import { acceptHMRUpdate, defineStore } from "pinia";
import ILista from '@/interfaces/ILista';
import Store from '@/services/store';

const dadosTODO = new Store<ILista[]>('todo');

const pegarUltimoItemId = (lista: ILista[]): number => {
  const lastItem = [...lista].shift();
  let id = 1;
  if (lastItem?.id) { id += lastItem.id; }
  return id;
}

export const useTODO = defineStore({
    id: 'todo',
    state: () => ({
        lista: dadosTODO.pegarDados() as ILista[] || [] as ILista[]
    }),
    actions: {
        adicionar (item: { conteudo: string, prioridade: number }) {
          const id = pegarUltimoItemId(this.lista);
          const itemTODO = {
            id: id,
            conteudo: item.conteudo,
            prioridade: item.prioridade,
            feito: false
          };
          this.lista = [itemTODO, ...this.lista];
          dadosTODO.salvarDados(this.lista);
        },
        remover (id: number) {
          this.lista = this.lista.filter(item => item.id !== id)
          dadosTODO.salvarDados(this.lista)
        },
        editar (id: number, conteudo: string) {
          this.lista.map(item => {
            if (item.id === id) {
              item.conteudo = conteudo;
            }
          });
          dadosTODO.salvarDados(this.lista)
        },
        buscarConteudo (id: number): string {
         let item = this.lista.filter(item => item.id === id);
         return item[0].conteudo;
        },
        feito(id: number) {
          this.lista.map(item => {
            if (item.id === id) {
              item.feito = !item.feito;
            }
          })
          dadosTODO.salvarDados(this.lista)
        },
        clear() {
          this.lista = []
          dadosTODO.apagarDados()
        }
    },
    getters: {
      getLista: (state) => state.lista,
      empty: (state) => state.lista.length == 0
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTODO, import.meta.hot))
}
