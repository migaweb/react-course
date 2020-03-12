const obj = {
    name: "Vikram",
    getName() {
        return this.name
    }
}

const getName = obj.getName.bind({name: "Micke"})
console.log(getName())