const fc = require('fast-check')

const { Countries } = require('../lib')
const { countryArbitrary } = require('./generator')

describe('Testing Countries properties', () => {
    it('Person with filtered animals should always have as much or less animals', () => {
        fc.assert(fc.property(
            countryArbitrary(), fc.string(),
            (country, filter) => {
                const filteredCountry = Countries.filterPeopleAnimals(filter)(country)
                return filteredCountry.people.every((filteredPerson, index) => filteredPerson.animals.length <= country.people[index].animals.length)
            }
        ))
    })
})