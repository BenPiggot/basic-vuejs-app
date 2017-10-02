<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | {{ stock.quantity }})</small>
          
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
            type="number" 
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
          />
        </div>
        <div class="pull-right">
          <button 
            @click="sellStock"
            class="btn btn-success"
            :disabled="quantity < 0">
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const record = this.$store.getters.stockPortfolio.find(s => s.id === this.stock.id)

        if (this.quantity > record.quantity) {
          alert("You cannot sell more stocks than you have")
          return
        }
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.placeSellOrder(order)
        this.quantity = 0
      }
    }
  }
</script>