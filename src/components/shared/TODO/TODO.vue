<template>
  <div class="TODOStyle">
    <header>
      <h3 class="TODOStyle__titulo">{{ titleTODO }}</h3>
      <form
          class="TODOStyle__form"
          id="listaform_item"
          @submit.prevent="adicionarNaLista">
          &nbsp;
        <input
          type="text"
          name="conteudo"
          class="TODOStyle__input"
          id="conteudo_item"
          v-model.trim="conteudo"
          title="Insira no conteúdo do item"
          placeholder="tópico do item" />
        &nbsp;
        <select
          name="prioridade"
          class="TODOStyle__select"
          id="prioridade_item"
          title="Escolha a prioridade"
          v-model.number="prioridade">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button
          title="Aperte o botão para confirmar"
          id="enviar_item"
          class="TODOStyle__botao TODOStyle__botaosuccess"
          :disabled="conteudo.length < 5"
        >
          adicionar
        </button>
      </form>
    </header>
    <section class="TODOStyle__conteudo">
      <ul class="TODOStyle__lista">
        <li
          class="TODOStyle__item"
          v-for="(item, index) in listaOrdenada"
          :key="item.id"
        >
          <template v-if="editarItem == item.id">
            <input
              type="text"
              v-model.trim="editarConteudo"
            />
            <LapisUpdate
              title="Editar o conteúdo"
              :disabled="editarConteudo.length < 5"
              @click="editarNaLista(item.id)"
            />
          </template>
          <template v-else>
            <input
              :id="'conteudoeditavel' + item.id"
              type="checkbox"
              @click="feitoNaLista(item.id)" />
            <label
            class="prevent-select"
              :for="'conteudoeditavel' + item.id"
              :class="{TODOStyle__riscar : item.feito}">
              {{ item.conteudo }}
            </label>
            <LapisUpdate
            title="Habilite para editar o conteúdo"
            @click="editarHabilitar(item.id)"
            />
          </template>
          <LixoDelete
            title="Remova o item"
            @click="removerNaLista(item.id)"
          />
        </li>
      </ul>
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import LapisUpdate from '@/assets/IconUpdate.vue';
  import LixoDelete from '@/assets/IconDelete.vue';

  const titleTODO = "Lista TODO";

  const listaTODO: Array<listaT> = [];

  interface listaT {
    id: number,
    conteudo: string,
    prioridade: number,
    feito: boolean
  }

  export default defineComponent({
    name: "TODO",
    data() {
      return {
        titleTODO
      }
    },
    setup() {
      const lista = ref<Array<listaT>>(listaTODO);
      const conteudo = ref<string>("");
      const prioridade = ref<number>(1);
      const editarItem = ref();
      const editarConteudo = ref("");
      // TODO Pegar último item (C[R]UD)
      const pegarUltimoItemId = (lista: Array<listaT>): number => {
        const lastItem = [...lista].shift();
        let id = 1;
        if (lastItem?.id) { id += lastItem.id; }
        return id;
      }
      // TODO Adicianr itens na lista ([C]RUD)
      const adicionarNaLista = (): void => {
        const id = pegarUltimoItemId(lista.value);

        lista.value = [
          {
            id,
            conteudo: conteudo.value,
            prioridade: prioridade.value,
            feito: false
          },
          ...lista.value,
        ]
        conteudo.value = "";
        prioridade.value = 1;
      };
      // TODO Remover da lista (CRU[D])
      const removerNaLista = (id: number) : void => {
        lista.value = lista.value.filter(item => item.id !== id)
      }
      // TODO Editar o conteúdo (CR[U]D)
      const editarNaLista = (id: number) : void => {
        lista.value.map(item => {
          if (item.id === id) {
            item.conteudo = editarConteudo.value;
          }
        });
        editarConteudo.value = "";
        editarItem.value = "";
      }
      // TODO Editar Habilidado
      const editarHabilitar = (id: number) : void => {
        lista.value.map(item => {
          if (item.id === id) {
            editarConteudo.value = item.conteudo;
          }
        });
        editarItem.value = id;
      }
      // TODO Riscar o elemento (CR[U]D)
      const feitoNaLista = (id: number) : void => {
        lista.value.map(item => {
          if (item.id === id) {
            item.feito = !item.feito;
          }
        })
      }

      return {
        lista,
        conteudo,
        prioridade,
        adicionarNaLista,
        removerNaLista,
        editarNaLista,
        feitoNaLista,
        editarHabilitar,
        editarItem,
        editarConteudo
      }
    },
    computed: {
      listaOrdenada : function () {
        return [...this.lista].sort((a, b) => a.prioridade - b.prioridade)
      }
    },
    components: {
      LapisUpdate,
      LixoDelete
    }

  })
</script>
<style scoped lang="scss">
  @import './_.scss';
  .prevent-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
</style>
