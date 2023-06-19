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
            <button
              title="Editar o conteúdo"
              :disabled="editarConteudo.length < 5"
              @click="editarNaLista(item.id)">
              <LapisUpdate/>
            </button>
          </template>
          <template v-else>
            <span
              class="prevent-select"
              @click="feitoNaLista(item.id)"
              :for="'conteudoeditavel' + item.id"
              :class="{TODOStyle__riscar : item.feito}">
              {{ item.conteudo }}
            </span>
            <button
              title="Habilite para editar o conteúdo"
              @click="editarHabilitar(item.id)">
              <LapisUpdate/>
            </button>
          </template>
          <button
            title="Remova o item"
            @click="removerNaLista(item.id)">
            <LixoDelete />
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import LapisUpdate from '@/components/shared/IconUpdate.vue';
import LixoDelete from '@/components/shared/IconDelete.vue';
import { useTODO } from '@/stores/todo';

const listaTODO = useTODO();
const titleTODO = ref("Lista TODO");
const lista = ref(listaTODO);
const conteudo = ref<string>("");
const prioridade = ref<number>(1);
const editarItem = ref();
const editarConteudo = ref("");

// TODO Adicianr itens na lista ([C]RUD)
const adicionarNaLista = (): void => {
  let item = {
    conteudo: conteudo.value,
    prioridade: prioridade.value,
  }
  listaTODO.adicionar(item);

  conteudo.value = "";
  prioridade.value = 1;
};
// TODO Remover da lista (CRU[D])
const removerNaLista = (id: number) : void => {
  listaTODO.remover(id);
}
// TODO Editar o conteúdo (CR[U]D)
const editarNaLista = (id: number) : void => {
  listaTODO.editar(id, editarConteudo.value);
  editarConteudo.value = "";
  editarItem.value = "";
}
// TODO Editar Habilidado
const editarHabilitar = (id: number) : void => {
  editarConteudo.value = listaTODO.buscarConteudo(id);
  editarItem.value = id;
}
// TODO Riscar o elemento (CR[U]D)
const feitoNaLista = (id: number) : void => {
  listaTODO.feito(id);
}

const listaOrdenada = computed(
  () => ([...lista.value.getLista].sort((a, b) => a.prioridade - b.prioridade))
);

</script>
<style scoped lang="scss">
  @import './_.scss';
</style>
