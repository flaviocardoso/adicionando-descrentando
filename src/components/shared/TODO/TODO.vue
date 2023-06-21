<template>
  <div class="TODOStyle">
    <header>
        <span class="TODOStyle__titulo">{{ titleTODO }}</span>
        <button @dblclick="limparLista" class="TODOStyle__cleaner">Apagar lista</button>
    </header>
    <main class="TODOStyleConteudo">
      <form
          class="TODOStyle__form"
          id="listaform_item"
          @submit.prevent="adicionarItem">
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
      <section class="TODOStyle__conteudo" v-if="listaVazia">
        <ul class="TODOStyle__lista"><li class="TODOStyle__item">Lista vazia</li></ul>
      </section>
      <section class="TODOStyle__conteudo" v-else>
        <ul class="TODOStyle__lista">
          <li
            class="TODOStyle__item"
            v-for="(item, index) in listaOrdenada"
            :key="item.id"
          >
            <template v-if="itemEditavel == item.id">
              <input
                type="text"
                v-model.trim="conteudoEditavel"
              />
              <button
                title="Editar o conteúdo"
                :disabled="conteudoEditavel.length < 5"
                @click="editarItem(item.id)">
                <LapisUpdate/>
              </button>
            </template>
            <template v-else>
              <span
                class="prevent-select"
                @click="marcarItemFeito(item.id)"
                :for="'conteudoeditavel' + item.id"
                :class="{TODOStyle__riscar : item.feito}">
                {{ item.conteudo }}
              </span>
              <button
                title="Habilite para editar o conteúdo"
                @click="habilitarItemEditar(item.id)">
                <LapisUpdate/>
              </button>
            </template>
            <button
              title="Remova o item"
              @click="removerItem(item.id)">
              <LixoDelete />
            </button>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import LapisUpdate from '@/components/shared/IconUpdate.vue';
import LixoDelete from '@/components/shared/IconDelete.vue';
import { useTODO } from '@/stores/todo';

const storeLista = useTODO();
const titleTODO = ref("Lista TODO");
const conteudo = ref<string>("");
const prioridade = ref<number>(1);
const itemEditavel = ref();
const conteudoEditavel = ref("");

const adicionarItem = (): void => {
  let item = {
    conteudo: conteudo.value,
    prioridade: prioridade.value,
  }
  storeLista.adicionar(item);

  conteudo.value = "";
  prioridade.value = 1;
};
const removerItem = (id: number) : void => {
  storeLista.remover(id);
}
const limparLista = (): void => {
  storeLista.clear();
}
const editarItem = (id: number) : void => {
  storeLista.editar(id, conteudoEditavel.value);
  conteudoEditavel.value = "";
  itemEditavel.value = "";
}
const habilitarItemEditar = (id: number) : void => {
  conteudoEditavel.value = storeLista.buscarConteudo(id);
  itemEditavel.value = id;
}
const marcarItemFeito = (id: number) : void => {
  storeLista.feito(id);
}
const listaVazia = computed(() => storeLista.empty)
const listaOrdenada = computed(
  () => ([...storeLista.getLista].sort((a, b) => a.prioridade - b.prioridade))
);

</script>
<style scoped lang="scss">
  @import './_.scss';
</style>
