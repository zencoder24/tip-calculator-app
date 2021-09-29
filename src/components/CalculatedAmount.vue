<template>
  <div class="calc-item">
    <div>
      <label class="cal-label">{{calculatedHeader}}</label>
      <p class="per-person"> / person</p>
    </div>
  <!-- Static Amount (for Display)-->
    <h2 class="amount">$ {{calculatedAmount}}</h2>
  </div>
</template>

<script>
export default {
  name: "CalculatedAmount.vue",
  props:{
    calculatedHeader: String,
    calculatedAmount: { type: Number, default:'0.00'}
  }
  // ['calculatedHeader', 'calculatedAmount']
}
</script>

<style lang="scss" scoped >
.cal-label{
  color: white;
  font-size: 13px;
  font-weight: 700;
  font-family: inherit;

}
.calc-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.per-person{
  font-size: 0.75rem;
  color: hsl(185, 41%, 84%);
}
.amount{
  color: $primary;
  font-size: 2rem;
  font-weight: 700;
}

</style>