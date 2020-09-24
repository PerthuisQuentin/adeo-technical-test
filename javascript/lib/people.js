const Animals = require('./animals')

const createPerson = (name = '', animals = []) => ({
    name,
    animals,
    toString: () => `${name} ${animals}`,
})

const filterAnimals = filter => person => ({
    ...person,
    animals: person.animals.filter(Animals.nameContains(filter))
})

module.exports = {
    createPerson,
    filterAnimals
}