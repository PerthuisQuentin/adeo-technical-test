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

module.exports = {
    createCountry,
    filterPeopleAnimals
}