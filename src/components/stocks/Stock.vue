<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price | currency }})</small>
          
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
            type="number" 
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
            :class="{danger: insufficientFunds}"
          />
        </div>
        <div class="pull-right">
          <button 
            @click="buyStock"
            class="btn btn-success"
            :disabled="insufficientFunds || quantity < 0">
            {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientFunds() {
        return this.stock.price * this.quantity > this.$store.getters.funds
      }
    },
    methods: {
      buyStock() {
        if (this.stock.price > this.$store.getters.funds) {
          alert("You do not have enough money to buy this stock")
          return
        }
        const order = {
          id: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }

        this.$store.dispatch('buyStock', order)
      }
    }
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>