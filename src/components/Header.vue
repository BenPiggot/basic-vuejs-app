<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand" active-class="active" exact>Home</router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
        <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
      <ul class="nav navbar-nav navbar-right">
        <li @click="endDay"><a href="#">End Day</a></li>
        <li @click="isDropdownOpen = !isDropdownOpen" class="dropdown" :class="{open: isDropdownOpen}">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save / Load <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a @click="saveData" href="#">Save Data</a></li>
            <li><a @click="loadData" href="#">Load Data</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks()
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds, 
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        }
        this.$http.put('data.json', data)
      },
      loadData() {
        console.log('yo')
        this.fetchData()
      }
    }
  }
</script>
