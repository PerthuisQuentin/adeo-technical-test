const Animals = require('./animals')

const createPerson = (name = '', animals = []) => ({
    name,
    animals,
    toString: () => `${name} ${animals}`,
})

// Filter person's animals by name
const filterAnimals = filter => person => ({
    ...person,
    animals: person.animals.filter(Animals.nameContains(filter))
})

// Add the animals quantity at the end of the name
const addAnimalsCount = person => ({
    ...person,
    name: `${person.name} [${person.animals.length}]`
})

module.exports = {
    createPerson,
    filterAnimals,
    addAnimalsCount
}