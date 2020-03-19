// const person = {
//     name: "Micke",
//     age: 23,
//     location: {
//         city: "Malmö",
//         temp: 6
//     }
// }

// const { name: firstName = "Anonymous", age } = person
// // const name = person.name
// // const age = person.age
// console.log(`${firstName} is ${age}.`)

// const {city, temp: temperature} = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// }

// const { name: publisherName = "Self-Published" } = book.publisher

// console.log(publisherName)

const address = ["1299 South Juniper Street", "Philadelphia", "Pennsylvania", "19147"]

const [, city, yourState = "Dallas", ] = address
console.log(`You are in ${city} ${yourState}.`)

const menu = ["Coffee (hot)","$2.00","$2.50","$2.75"]

const [menuItem, , price] = menu
console.log(`A medium ${menuItem} costs ${price}`)