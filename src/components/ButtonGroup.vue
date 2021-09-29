<!--The method used to display button values and button elements is shown
 her in this StackOverflow Question
 (https://stackoverflow.com/questions/69331614/passing-value-from-clicked-button-as-a-prop/69333288#69333288)-->

<template>
  <label class="label">Select Tip % </label>
  <div class="">
    <ul class="grid-container">
      <!--Tip Buttons -->
      <li v-for="(percent, i) in percentages" :key="i">
        <button class="button"
                @click="setPercent(percent)"
                :class="selPercent === percent && 'selected'">
          {{ percent }}%
        </button>
      </li>
      <!--Custom Tip Amount -->
      <!-- TODO: Remove bounded amount dynamically shown in the input field -->
      <li><input type="number"
                 class="input"
                 :value="modelValue"
                 placeholder="Custom"
                 @input='$emit("update:modelValue", $event.target.value)'></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  data(){
    return{
      selPercent: this.percentage,
      percentages: [5, 10, 15, 25, 50 ]
    }
  },
  methods:{
    setPercent(value){
      this.selPercent = value;
      this.$emit('percent-set', value);
    }
  },
  props:{
    percentage: Number,
    modelValue:
        { type: Number, default: 0, required: true}
  }
}
</script>


<style lang="scss" scoped>
.grid-container{
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-row-gap: 15px;
  grid-column-gap: 10px;
}
button{
  width: 93%;
  font-family: inherit;
  border-radius: 7px;
  padding: 23px 0;
  font-size: 1.2rem;
  font-weight: 700;
}
button:focus{
  background: $LightGrayishCyan;
}

.button:hover{
  background: $primary;
}

.input{
  background: hsl(189, 41%, 97%);
  outline: none;
  text-align: right;
  font-family: inherit;
  width: 92%;
  font-weight: 700;
  font-size: 16px;
  color:$VeryDarkCyan;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/*Editing the placeholder style on the input field */
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: $VeryDarkCyan;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: $VeryDarkCyan;
  padding-right: 8px;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color:$VeryDarkCyan;
  padding-right: 15px;
}

@media all and (min-width: 768px){
  .grid-container{
    grid-template-columns: repeat(3, 32%);
  }

}

</style>