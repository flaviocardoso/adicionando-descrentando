<template>
  <div class="TwoNumbers">
    <Card class="TwoNumbers__cartao">
      <template #title>
        <TextCenter>
          TWO NUMBERS
        </TextCenter>
      </template>
      <template #content>
        <input class="TwoNumbers__input" type="number" v-model.number="pNumero" placeholder="Primeiro número"/>
        <Block>
          <select class="TwoNumbers__input" v-model="op">
            <option v-for="( value , key ) in opValues" :key="key" :value=key>{{ value }}</option>
          </select>
        </Block>
        <input  class="TwoNumbers__input" type="number" v-model.number="sNumero" placeholder="Segundo número"/>
        <Block class="TwoNumbers__botao">
          <Button class="TwoNumbers__botaoclean" type="danger" @click="acaoLimpar">C</Button>
          <Button class="TwoNumbers__botaoresultado" type="info" @click="acaoIgual">=</Button>
        </Block>
      </template>
      <template #footer>
        <TextCenter v-if="resultado !== undefined">
          <span class="TwoNumbers__resultado">{{ resultado }}</span>
        </TextCenter>
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
    "+" : (a: number, b: number) => a + b,
    "-" : (a: number, b: number) => Number((a - b).toFixed(9)),
    "*" : (a: number, b: number) => Number((a * b).toFixed(9)),
    "/" : (a: number, b: number) => Number((a / b).toFixed(9))
  }

  type OPMATH = "+" | "-" | "*" | "/";

  const opMathValues = {
    "+" : "ADICIONAR",
    "-" : "DIMINIR",
     "*" :  "MULTIPLICAR",
    "/" : "DIVIDIR"
  }

  export default defineComponent({
    name: "TwoNumbers",
    setup() {
      const pNumero = ref<number>(0);
      const sNumero = ref<number>(0);
      const op = ref<OPMATH>('+');
      const resultado = ref<number>();
      const opValues = ref(opMathValues);

      function acaoIgual(): void {
        // TODO let valorOp = op.value as OPMATH;
        resultado.value = opMathFunc[op.value](pNumero.value, sNumero.value)
      }

      const acaoLimpar = (): void => {
        pNumero.value = 0;
        sNumero.value = pNumero.value;
        resultado.value = undefined;
      }

      return {
        opValues,
        pNumero,
        sNumero,
        op,
        resultado,
        acaoIgual,
        acaoLimpar
      }
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
