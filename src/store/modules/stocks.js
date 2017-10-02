import stocks from '../../data/stocks.js'

const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS' (state) {
    state.stocks = state.stocks.map(s => {
      return {
        id: s.id,
        name: s.name,
        price: s.price += (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 10)
      }
    })
  }
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

const actions = {
  buyStock: (context, order) => {
    context.commit('BUY_STOCK', order);
  },
  initStocks: (context) => {
    context.commit('SET_STOCKS', stocks)
  }, 
  randomizeStocks: (context) => {
    context.commit('RND_STOCKS')
  }
}

export default {
  state, 
  getters,
  mutations,
  actions
}