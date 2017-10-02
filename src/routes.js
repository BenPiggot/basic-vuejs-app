import Home from './components/Home.vue'
import Stocks from './components/stocks/Stocks.vue'
import Stock from './components/stocks/Stock.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import PortfolioStock from './components/portfolio/Stock.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/stocks', component: Stocks, children: [
    { path: ':id', component: Stock }
  ] },
  { path: '/portfolio', component: Portfolio, children: [
    { path: ':id', component: PortfolioStock}
  ] }
]