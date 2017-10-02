const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  'BUY_STOCK'(state, {id, quantity, stockPrice}) {
    const record = state.stocks.find(s => s.id === id)
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: id,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCK'(state, {id, quantity, stockPrice}) {
    const record = state.stocks.find(s => s.id === id)

    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += stockPrice * quantity
  },
  'SET_PORTFOLIO'(state, portfolio) {
    state.funds = portfolio.funds
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
    debugger
  }
}

const actions = {
  sellStock(context, order) {
    context.commit('SELL_STOCK', order)
  }
}

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      debugger
      const record = getters.stocks.find(el => el.id === stock.id)
      console.log(record)
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds(state) {
    return state.funds
  }
}

export default {
  state, 
  actions,
  mutations,
  getters
}
