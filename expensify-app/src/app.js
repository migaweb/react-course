import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore"
import { addExpense } from "./actions/expenses"
import { setTextFilter } from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"
import "normalize.css/normalize.css"
import "./styles/styles.scss"
import "react-dates/lib/css/_datepicker.css"

const store = configureStore()

store.dispatch(addExpense({ description: "Water bill", amount: 5600, createdAt: 1323343433 }))
store.dispatch(addExpense({ description: "Gas bill", amount: 3400, createdAt: 1323343433 }))
store.dispatch(addExpense({ description: "Internet bill", amount: 1200, createdAt: 13444343433 }))
store.dispatch(addExpense({ description: "Rent", amount: 109500, createdAt: 43311 }))
//store.dispatch(setTextFilter("water"))


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById("app"))
