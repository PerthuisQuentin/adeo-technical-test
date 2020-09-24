const people = require('./people')
const People = require('./people')

const createCountry = (name = '', people = []) => ({
    name,
    people,
    toString: () => `${name} ${people}`,
})

// Filter people's animals by name
const filterPeopleAnimals = filter => country => ({
    ...country,
    people: country.people.map(people => People.filterAnimals(filter)(people))
})

// Add the people quantity at the end of the name
const addPeopleCount = country => ({
    ...country,
    name: `${country.name} [${country.people.length}]`
})

// Add the animals quantity at the end of the name for each people
const addPeopleAnimalsCount = country => ({
    ...country,
    people: country.people.map(people => People.addAnimalsCount(people))
})

// Add quantity at the end of the name for each children
const addChildrenCount = country => addPeopleCount(addPeopleAnimalsCount(country))

module.exports = {
    createCountry,
    filterPeopleAnimals,
    addPeopleCount,
    addPeopleAnimalsCount,
    addChildrenCount
}