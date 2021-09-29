<!--The Purpose of the InputField Custom Component is to provide a template
for the Input Fields used in this app. Each Input Field uses an input-label
and input-icon as props when they are instantiated in the Calculator.vue
component-->
<template>
  <div class="field">
    <div id="input-label-group">
      <label class="label">{{inputLabel}}</label>
      <slot></slot>
    </div>
    <div class="control has-icons-left">
      <input class="input"
             type="number"
             v-bind="$attrs"
             :value="modelValue"
             @input='$emit("update:modelValue", $event.target.value)'
             pattern="^\d*(\.\d{0,2})?$" />
      <span class="icon is-small is-left">
      <fa id='icon'
          v-bind:icon='inputIcon' />
    </span>
    </div>
  </div>
</template>

<script >
  export default {
    name: 'InputField',
    inheritAttrs: false, //inheritAttrs ensures that the attributes passed arent on the root element
    props:{
      inputLabel:String,
      inputIcon:String,
      modelValue:
          { type: Number, default: 0, required: true}
    }
  }
</script>

<style lang="scss" scoped>
  #input-label-group{
    display: flex;
    justify-content: space-between;
  }


  label.label{
    font-size: 0.9rem;
  }
  #icon{
    color: $DarkGrayishCyan2;
  }

  .input{
    text-align: right;
    outline: none;
    width: 100%;
    background: $LightGrayishCyan2;
  }
  input[type="number"]
  {
    font-size:18px;
    font-weight: 700;
    font-family: inherit;
    color: $VeryDarkCyan;
  }
 /* The styles below removes the default spinner put on number input fields  */
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>


