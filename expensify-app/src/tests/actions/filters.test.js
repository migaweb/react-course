import moment from "moment"
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../../actions/filters"

test("Should generate set sortBy amount action object", () => {
    const date = "amount"
    const action = sortByAmount()
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT",
        sortBy: "amount"
    })
})

test("Should generate set sortBy date action object", () => {
    const date = "date"
    const action = sortByDate()
    expect(action).toEqual({
        type: "SORT_BY_DATE",
        sortBy: "date"
    })
})

test("Should generate set text action object", () => {
    const text = "Micke"
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text
    })
})

test("Should generate set text with default value action object", () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
})

test("Should generate set start date action object", () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })   
})

test("SHould generate set end date action object", () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
})