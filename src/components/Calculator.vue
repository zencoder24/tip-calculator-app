<!--The Calculator component utilized 3 custom components (ButtonGroup, InputField, CalculatedAmount).
 2 InputField components are utilized to represent the Bill Amount and the Number of People
 1 ButtonGroup component is utilized to represent the Tip Percentages
 2 CalculatedAmount components are utilized to represent the Tip amount and Total per person-->

<template>
  <div class="calculator-wrapper">
      <div class="input-group">
        <InputField v-model.number="billValue" input-label="Bill" input-icon="dollar-sign"/>
        <div class="tip-section">
          <ButtonGroup v-model="percent" :percentage="percent" @percent-set="percentSet"/>
        </div>
        <InputField :class="peopleNumValue === 0 ? 'is-danger': ''" v-model.number="peopleNumValue" input-label="Number of People" input-icon="user">
          <!--This InputField instance has an opening and closing bracket because the
           conditional element below is placed where the slot element is on the parent
           component-->
          <p v-show="peopleNumValue === 0" class="label is-small has-text-danger">Can't Be Zero</p>
        </InputField>
      </div>
      <div class="calculated-container">
        <div class="calculatedAmountGroup">
          <CalculatedAmount calculated-header="Tip Amount" :calculated-amount="tipAmountPerPerson()"/>
          <CalculatedAmount calculated-header="Total" :calculated-amount="totalPerPerson()"/>
        </div>
        <button id="reset-btn" class="button is-primary" @click="reset()">RESET</button>
      </div>
  </div>
</template>

<script>
import InputField from './InputField'
import ButtonGroup from './ButtonGroup'
import CalculatedAmount from "./CalculatedAmount";

export default {
  name: 'Calculator',
  components:{
    InputField, ButtonGroup, CalculatedAmount
  },
  data() {
    return {
      //Default Values
      billValue: 142.55,
      percent:.05,
      customPercent: '',
      peopleNumValue: 5,
      tipAmount: null,
      total: null
    }
  },
  methods:{
    percentSet(val){
     return this.percent = val/100
    },

    //TODO: Figure out why the displayed total value is removing trailing zeros
    //This function converts the value passed into a dollar amount
    formatPrice(value) {
      let val = (value/1).toFixed(2).replace(',', '.')
      return parseFloat(val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
    },
    tipAmountPerPerson(){
      let rawTipAmount = (this.billValue * this.percent) / this.peopleNumValue
      this.tipAmount = this.formatPrice(rawTipAmount)
      if(this.tipAmount === Infinity){

      }else {
        return this.tipAmount
      }

    },
    totalPerPerson(){
      let rawTotal = (this.billValue / this.peopleNumValue) + this.tipAmount
      this.total= this.formatPrice(rawTotal)
      if(this.total === Infinity){

      }else{
        return this.total
      }
    },
    reset(){
          this.billValue = 142.55,
          this.percent = .05,
          this.peopleNumValue = 5
    }

  }
}
</script>


<style lang="scss" scoped >
  .calculator-wrapper{
    background: $white;
    height: 100vh;
    width: 96%;
    margin-top: 30px;
    margin-right: 25px;
    border-radius: 30px;
    padding: 0 35px;
    display: flex;
    flex-direction: column;
  }
  .input-group{
    padding-top: 30px;

  }

  .tip-section{
    margin: 28px 0;
  }
  .calculated-container{
    background: $VeryDarkCyan;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 10%;
    padding: 25px;
    border-radius: 12px;

  }
  #reset-btn{
    width: 100%;
    color: $VeryDarkCyan;
    border: none;
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 700;
  }
  //Tablet Size
  @media all and (min-width: 768px){
    .calculator-wrapper{
      flex-direction: row;
      height: 63vh;
      margin: 0 auto;
      width: 95%;
      padding: 0;

    }
    .input-group{
      margin: 0 4%;
      width: 50%;
      padding-top: 41px;
    }
    .calculated-container{
      margin: 4%;
      width: 50%;
      padding-top: 7%;
    }
    //#reset-btn{
    //  margin-top: 30%;
    //}
  }

  @media all and (min-width: 1216px){
    .calculator-wrapper{
      width: 75%;
    }
    .calculated-container{
      margin: 2%;
    }
  }

  @media all and (min-width: 1440px){
    .calculator-wrapper{
      width: 65%;
      height: 51vh;
    }
  }

</style>
