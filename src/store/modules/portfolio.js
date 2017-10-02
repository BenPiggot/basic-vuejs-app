const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(s => s.id === stockId)
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        stockId: stockId,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(s => s.stockId === stockId)

    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += stockPrice * quantity
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
      const record = getters.stocks.find(el => el.id === stock.stockId)
      return {
        id: stock.stockId,
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
