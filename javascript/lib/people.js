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

module.exports = {
    createPerson,
    filterAnimals
}