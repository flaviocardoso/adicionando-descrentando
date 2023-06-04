<template>
  <div class="TODOStyle">
    <header>
      <h3>{{ titleDODO }}</h3>
      <p>
        <form
          @submit.prevent="adicionarNaLista">
          &nbsp;
          <input type="" v-model.trim="conteudo" placeholder="tópico do item" />
          &nbsp;
          <select v-model.number="prioridade">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          &nbsp;
          <button
            :disabled="conteudo.length < 5"
          >adicionar</button>
        </form>
      </p>
    </header>
    <section>
      <ul>
        <li
          v-for="(item, index) in listaOrdenada"
          :key="item.id"
        >
        {{ item.conteudo }} - p: {{ item.prioridade }}
      </li>
      </ul>
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  const titleDODO = "Lista TODO";

  const listaTODO = [
    { id: 1, conteudo: "item 1", prioridade: 1 },
    { id: 2, conteudo: "item 2", prioridade: 2 },
    { id: 3, conteudo: "item 3", prioridade: 1 },
    { id: 4, conteudo: "item 4", prioridade: 3 },
    { id: 5, conteudo: "item 5", prioridade: 3},
  ];

  interface listaT {
    id: number,
    conteudo: string,
    prioridade: number
  }

  export default defineComponent({
    name: "TODO",
    data() {
      return {
        titleDODO
      }
    },
    setup() {
      const lista = ref<Array<listaT>>(listaTODO);
      const conteudo = ref<string>("");
      const prioridade = ref<number>(1);

      const reverseLista = (lista: Array<listaT>): Array<listaT> => {
        return [...lista].reverse();
      }

      lista.value = reverseLista(lista.value);

      const adicionarNaLista = (): void => {
        lista.value = [
          {
            id: lista.value.length + 1,
            conteudo: conteudo.value,
            prioridade: prioridade.value
          },
          ...lista.value
        ]
        conteudo.value = "";
        prioridade.value = 1;
      };

      return {
        lista,
        conteudo,
        prioridade,
        adicionarNaLista
      }
    },
    computed: {
      listaOrdenada : function () {
        return [...this.lista].sort((a, b) => a.prioridade - b.prioridade)
      }
    }

  })
</script>
<style scoped lang="scss">
  @import './_.scss';
</style>
