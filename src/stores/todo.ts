import { acceptHMRUpdate, defineStore } from "pinia";
import ILista from '@/interfaces/ILista';

const pegarUltimoItemId = (lista: ILista[]): number => {
  const lastItem = [...lista].shift();
  let id = 1;
  if (lastItem?.id) { id += lastItem.id; }
  return id;
}

export const useTODO = defineStore({
    id: 'todo',
    state: () => ({
        lista: [] as ILista[]
    }),
    actions: {
        adicionar (item: { conteudo: string, prioridade: number }) {
          const id = pegarUltimoItemId(this.lista);
          this.lista = [
            {
              id: id,
              conteudo: item.conteudo,
              prioridade: item.prioridade,
              feito: false
            },
            ...this.lista,
          ]
        },
        remover (id: number) {
          this.lista = this.lista.filter(item => item.id !== id)
        },
        editar (id: number, conteudo: string) {
          this.lista.map(item => {
            if (item.id === id) {
              item.conteudo = conteudo;
            }
          });
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
        },
        clear() {
            this.lista = []
        }
    },
    getters: {
      getLista: (state) => state.lista,
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTODO, import.meta.hot))
}
