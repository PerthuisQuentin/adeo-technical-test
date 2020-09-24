const people = require('./people')
const People = require('./people')

const createCountry = (name = '', people = []) => ({
    name,
    people,
    toString: () => `${name} ${people}`,
})

const filterPeopleAnimals = filter => country => ({
    ...country,
    people: country.people.map(people => People.filterAnimals(filter)(people))
})

module.exports = {
    createCountry,
    filterPeopleAnimals
}