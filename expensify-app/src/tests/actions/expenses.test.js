import { addExpense, editExpense, removeExpense } from "../../actions/expenses"

test("Should set up remove expense action object", () => {
    const action = removeExpense({ id: "123abc" })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
})

test("Should set up edit expense action objects", () => {
    const action = editExpense("123abc", 
        {
            note: "My little note"
        }
    )
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
            id: "123abc",
            updates: {
                note: "My little note"
            }
    })
})

test("Should setup add expence action object with provided values", () => {
    const expenseData = {
        description: "rent",
        amount: 129500,
        createdAt: 1000,
        note: "This was last months rent"
    }

    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test("Should setup add expence action object with default values", () => {
    const action = addExpense()
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "", 
            note: "", 
            amount: 0, 
            createdAt: 0
        }
    })
})