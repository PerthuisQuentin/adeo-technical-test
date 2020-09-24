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

    it('Countries with people count should have a longer name and same people names', () => {
        fc.assert(fc.property(
            countryArbitrary(),
            country => {
                const countryWithPeopleCount = Countries.addPeopleCount(country)
                return (
                    countryWithPeopleCount.name > country.name &&
                    countryWithPeopleCount.people.every((person, index) => person.name === country.people[index].name)
                )
            }
        ))
    })

    it('Person with animals count should have a longer name and same country name', () => {
        fc.assert(fc.property(
            countryArbitrary(),
            country => {
                const countryWithAnimalsCount = Countries.addPeopleAnimalsCount(country)
                return (
                    countryWithAnimalsCount.name === country.name &&
                    countryWithAnimalsCount.people.every((personWithAnimalsCount, index) => personWithAnimalsCount.name > country.people[index].name)
                )
            }
        ))
    })

    it('Country with children counts should have a longer names', () => {
        fc.assert(fc.property(
            countryArbitrary(),
            country => {
                const countryWithChildrenCounts = Countries.addChildrenCount(country)
                return (
                    countryWithChildrenCounts.name > country.name &&
                    countryWithChildrenCounts.people.every((personWithAnimalsCount, index) => personWithAnimalsCount.name > country.people[index].name)
                )
            }
        ))
    })
})