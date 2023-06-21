import { acceptHMRUpdate, defineStore } from "pinia";
import ILista from '@/interfaces/ILista';
import Store from '@/services/store';

const NOME_STORE_TODO = 'TESTE_API_LOCAL_TODO'
const dados = new Store<ILista[]>(NOME_STORE_TODO);

const pegarUltimoItemId = (lista: ILista[]): number => {
  const lastItem = [...lista].shift();
  let id = 1;
  if (lastItem?.id) { id += lastItem.id; }
  return id;
}

export const useTODO = defineStore({
    id: 'todo',
    state: () => ({
        lista: dados.pegar as ILista[] || [] as ILista[]
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
          dados.salvar = this.lista
        },
        remover (id: number) {
          this.lista = this.lista.filter(item => item.id !== id)
          dados.salvar = this.lista
        },
        editar (id: number, conteudo: string) {
          this.lista.map(item => {
            if (item.id === id) {
              item.conteudo = conteudo;
            }
          });
          dados.salvar = this.lista
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
          dados.salvar = this.lista
        },
        clear() {
          this.lista = []
          dados.apagar()
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
