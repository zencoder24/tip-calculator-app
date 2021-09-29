<!-- I tried to logically compartmentalize each component that makes up a tip calculator. This project
 takes bill amount, applies a tip percentage to it and divides that among
 a specified amount of people. The tip amount per person and total amount
 per person is dynamically displayed-->

<template>
  <div class="container is-family-monospace">
    <img id="logo" src="./assets/images/logo.svg" alt="Splitter Logo">
    <Calculator/>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    Calculator
  }
}
</script>

<style lang="scss">

  #logo{
   margin: 16% 42%;
  }

  @media all and (min-width: 768px){
    #logo{
      margin-left: 45%;
      margin-bottom: 5%;
    }

  }

  @media all and (min-width: 1216px){
    #logo{
      margin-top: 6%;
    }
  }

</style>

