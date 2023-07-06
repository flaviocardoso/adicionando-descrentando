<template>
  <section class="CalculadoraStyle prevent-select">
    <div class="dentro">
      <span class="screen">
        <span class="conta" ref="conta"></span>
      </span>
      <span class="linha">
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoAction($event, 'porcentagem')"
            @mouseup="UpBotao($event)"
            id="tecla1">%</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoAction($event,'limpar')"
            @mouseup="UpBotao($event)"
            id="tecla2">C</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoAction($event,'voltar')"
            @mouseup="UpBotao($event)"
            id="tecla2">B</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoAction($event,'dividir')"
            @mouseup="UpBotao($event)"
            id="tecla3">÷</span>
        </span>
      </span>
      <span class="linha">
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoNum($event)"
            @mouseup="UpBotao($event)"
            id="tecla4">7</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoNum($event)"
            @mouseup="UpBotao($event)"
            id="tecla5">8</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoNum($event)"
            @mouseup="UpBotao($event)"
            id="tecla6">9</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoAction($event, 'multiplicar')"
            @mouseup="UpBotao($event)"
            id="tecla7">&times;</span>
        </span>
      </span>
      <span class="linha">
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoNum($event)"
            @mouseup="UpBotao($event)"
            id="tecla8">4</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoNum($event)"
            @mouseup="UpBotao($event)"
            id="tecla9">5</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoNum($event)"
            @mouseup="UpBotao($event)"
            id="tecla10">6</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoAction($event, 'diminuir')"
            @mouseup="UpBotao($event)"
            data-action="diminuir"
            id="tecla11">-</span>
        </span>
      </span>
      <span class="linha">
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoNum($event)"
            @mouseup="UpBotao($event)"
            id="tecla12">1</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoNum($event)"
            @mouseup="UpBotao($event)"
            id="tecla13">2</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoNum($event)"
            @mouseup="UpBotao($event)"
            id="tecla14">3</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoAction($event, 'somar')"
            @mouseup="UpBotao($event)"
            id="tecla15">+</span>
        </span>
      </span>
      <span class="linha">
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoAction($event, 'maismenos')"
            @mouseup="UpBotao($event)"
            data-action="maismenos"
            id="tecla16">+/-</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoNum($event)"
            @mouseup="UpBotao($event)"
            id="tecla17">0</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoAction($event, 'virgular')"
            @mouseup="UpBotao($event)"
            id="tecla18">.</span>
        </span>
        <span class="normal">
          <span class="tecla"
            @mousedown="DownBotaoAction($event, 'calcular')"
            @mouseup="UpBotao($event)"
            id="tecla19">=</span>
        </span>
      </span>
    </div>
  </section>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const opMathFunc = {
    "somar" : (a: number, b: number) => Number(a) + Number(b),
    "diminuir" : (a: number, b: number) => Number((a - b).toFixed(9)),
    "multiplicar" : (a: number, b: number) => Number((a * b).toFixed(9)),
    "dividir" : (a: number, b: number) => Number((a / b).toFixed(9)),
    "": (a: number, b: number) => 0
  }

  type OPMATH = "somar" | "diminuir" | "multiplicar" | "dividir" | "";

  const conta = ref()
  const lastnum = ref()
  const action = ref()
  const operador = ref<OPMATH>()
  const lastoperador = ref()
  const pc = ref(1)

  const DownBotaoNum = (event: any) : void => {
    const alvo = event.target;
    const valor = alvo.textContent;
    const tela = conta.value.textContent;
    alvo.classList.toggle('tecla-click');
    if (conta.value.textContent === '0' || operador.value || action.value === 'calcular' || pc.value >= 100) {
      conta.value.textContent = valor
      lastoperador.value = operador.value
      operador.value = ''
      pc.value = 1
      action.value = ''
    }
    else {
      conta.value.textContent = tela + valor
    }
  }
  const DownBotaoAction = (event: any, acao: String):void => {
    const alvo = event.target;
    action.value = acao;
    const tela = conta.value.textContent;
    alvo.classList.toggle('tecla-click');

    const casooperador = acao === 'dividir' || acao === 'multiplicar' || acao === 'diminuir' || acao === 'somar';
    if (casooperador) {
      operador.value = acao as OPMATH;
      lastnum.value = tela
    } else {
      if (tela) {
        switch(action.value) {
          case 'porcentagem':
            pc.value *= 100
            conta.value.textContent = Math.round(tela / 100 * pc.value)/pc.value;
          break;
          case 'limpar':
            operador.value = '';
            lastnum.value = '';
            conta.value.textContent = '';
          break;
          case 'voltar':
            if (tela.length) {
              conta.value.textContent = tela.slice(0, -1);
            } else {
              conta.value.textContent = tela;
            }
          break;
          case 'virgular':
            if (tela.length) {
              if (!tela.includes('.')) {
                conta.value.textContent = tela + ".";
              }
            } else {
              conta.value.textContent = tela;
            }
          break;
          case 'maismenos':
            if (tela.length) {
              conta.value.textContent = tela * -1;
            } else {
              conta.value.textContent = tela;
            }
          break
          case 'calcular':
            if (lastoperador.value) {
              let numRound = opMathFunc[lastoperador.value as OPMATH](lastnum.value, tela)
              conta.value.textContent = Math.round(numRound * 100)/100;
              lastoperador.value = ''
            }
          break;
        }
      }
    }
  }

  const UpBotao = (event: any):void => {
    const alvo = event.target;
    alvo.classList.toggle('tecla-click');
  }
</script>
<style scoped>
@import './_.scss';
</style>
