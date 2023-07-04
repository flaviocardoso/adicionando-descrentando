<template>
  <section class="CalculadoraStyle prevent-select">
    <div class="dentro">
      <span class="screen">
        <span class="resultado">{{ conteudo }}</span>
        <span class="conta">{{ conteudo }}</span>
      </span>
      <span class="linha">
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla1">%</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla2">C</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla2">B</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla3">÷</span>
        </span>
      </span>
      <span class="linha">
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla4">7</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla5">8</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla6">9</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla7">x</span>
        </span>
      </span>
      <span class="linha">
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla8">4</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla9">5</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla10">6</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla11">-</span>
        </span>
      </span>
      <span class="linha">
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla12">1</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla13">2</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla14">3</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla15">+</span>
        </span>
      </span>
      <span class="linha">
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla16">+/-</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla17">0 </span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla18">,</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotao($event)"
            @mouseup="UpBotao($event)"
            id="tecla19">=</span>
        </span>
      </span>
    </div>
  </section>
</template>
<script setup lang="ts">
  import { computed, ref } from 'vue';
  const conteudo = ref()

  const DownBotao = (event: any) : void => {
    const alvo = event.target;
    alvo.classList.toggle('tecla-click');
    const valor = alvo.innerHTML;
    conteudo.value = valor;
  }
  const UpBotao = (event: any):void => {
    const alvo = event.target;
    alvo.classList.toggle('tecla-click');
  }
</script>
<style scoped>
@import './_.scss';
</style>
