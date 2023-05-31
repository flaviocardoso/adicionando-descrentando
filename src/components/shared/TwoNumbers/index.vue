<template>
  <div class="TwoNumbers">
    <Card>
      <template #title>
        <TextCenter>TWO NUMBERS</TextCenter>
      </template>
      <template #content>
        <Block>
          <input class="numero" type="number" v-model.number="pNumero" placeholder="Primeiro número"/>
        </Block>
        <Block>
          <select class="operador" v-model="op">
            <option v-for="( value , key ) in opValues" :value=key>{{ value }}</option>
          </select>
        </Block>
        <Block>
          <input  class="numero" type="number" v-model.number="sNumero" placeholder="Segundo número"/>
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
    "+" : (a: number, b: number) => a + b,
    "-" : (a: number, b: number) => a - b,
    "*" : (a: number, b: number) => a * b,
    "/" : (a: number, b: number) => Number((a / b).toFixed(2))
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
      const op = ref('+');
      const resultado = ref<number>();
      const opValues = ref(opMathValues);

      function acaoIgual() {
        let valorOp = op.value as OPMATH;
        resultado.value = opMathFunc[valorOp](pNumero.value, sNumero.value)
      }

      return {
        opValues,
        pNumero,
        sNumero,
        op,
        resultado,
        acaoIgual
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
