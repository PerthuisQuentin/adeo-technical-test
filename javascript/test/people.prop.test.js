const fc = require('fast-check')

const { People } = require('../lib')
const { personArbitrary } = require('./generator')

describe('Testing People properties', () => {
    it('Person with filtered animals should always have as much or less animals', () => {
        fc.assert(fc.property(
            personArbitrary(), fc.string(),
            (person, filter) => {
                const filteredPerson = People.filterAnimals(filter)(person)
                return filteredPerson.animals.length <= person.animals.length
            }
        ))
    })

    it('Person with animals count should have a longer name', () => {
        fc.assert(fc.property(
            personArbitrary(),
            person => {
                const personWithAnimalsCount = People.addAnimalsCount(person)
                return personWithAnimalsCount.name > person.name
            }
        ))
    })
})