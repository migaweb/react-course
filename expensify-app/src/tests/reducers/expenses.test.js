import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"

test("should add an expense", () => {
    const expense = {
        id: "123",
        description: "My new expense",
        note: "",
        createdAt: 20000,
        amount: 29500
    }
    const action = {
        type:"ADD_EXPENSE",
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense ])
})

test("should edit an expense", () => {
    const expense = expenses[0]
    expense.description = "Update"
    expense.amount = 129998800
    expense.createdAt = 123
    const action = {
        type:"EDIT_EXPENSE",
        id: "1",
        updates: expense
    }
    const state = expensesReducer(expenses, action)
    expect(state[0]).toEqual(expense)
})

test("should not edit expense if expense not found", () => {
    const amount = 3334400
    const action = {
        type:"EDIT_EXPENSE",
        id: "-1",
        updates: [ amount ]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test("should remove expense by id", () => {
    const action = {
        type:"REMOVE_EXPENSE",
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test("should not remove expense if id is not found", () => {
    const action = {
        type:"REMOVE_EXPENSE",
        id: "-1"
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test("should set default state", () => {
    const state = expensesReducer(undefined, {type: "@@INIT"})
    expect(state).toEqual([])
})