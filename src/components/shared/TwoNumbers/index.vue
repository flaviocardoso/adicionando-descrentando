<template>
  <div class="TwoNumbers">
    <Card>
      <template #title>
        <TextCenter>TWO NUMBERS</TextCenter>
      </template>
      <template #content>
        <Block>
          <input class="numero" type="number" ref="pNumero" placeholder="Primeiro número"/>
        </Block>
        <Block>
          <select class="operador" ref="op">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </Block>
        <Block>
          <input  class="numero" type="number" ref="sNumero" placeholder="Segundo número"/>
        </Block>
        <Block>
          <Button type="success" @click="acaoIgual">=</Button>
        </Block>
      </template>
      <template #footer>
        <Block>
          <span class="resultado">{{ resultado }}</span>
        </Block>
      </template>
    </Card>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Block from '../Block';
  import Button from '../Button';
  import Card from '../Card';
  import TextCenter from '../TextCenter';

  const opMathFunc = {
    "+" : (a: any, b: any) => a + b,
    "-" : (a: any, b: any) => a - b,
    "*" : (a: any, b: any) => a * b,
    "/" : (a: any, b: any) => (a / b).toFixed(2)
  }

  type OPMATH = "+" | "-" | "*" | "/";

  const opMathValues = {
    "+" : "Adicionar",
    "-" : "Diminuir",
    "*" : "Multiplicar",
    "/" : "Dividir"
  }

  const opMathSign = ["+", "-", "*", "/"];

  export default defineComponent({
    name: "TwoNumbers",
    setup() {
      const pNumero = ref<HTMLInputElement>();
      const sNumero = ref<HTMLInputElement>();
      const op = ref<HTMLSelectElement>();
      const resultado = ref(0);

      function acaoIgual() {
        if (op.value && opMathSign.includes(op.value?.value)) {
          let valorOp = op.value.value as OPMATH;
          resultado.value = opMathFunc[valorOp](Number(pNumero.value?.value), Number(sNumero.value?.value))
        } else {
          resultado.value = opMathFunc['+'](Number(pNumero.value?.value), Number(sNumero.value?.value))
        }
      }

      return {
        pNumero,
        sNumero,
        op,
        resultado,
        acaoIgual
      }
    },
    mounted() {
    },
    components: {
        TextCenter,
        Block,
        Card,
        Button
    }
  });
</script>
<style scoped lang="scss">
  @import './_.scss';
</style>
