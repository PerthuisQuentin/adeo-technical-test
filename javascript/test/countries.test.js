const assert = require('assert')

const { Countries } = require('../lib')

describe('Testing Countries', () => {
    it('Test createCountry', () => {
        const name = 'Dillauti'
        const country = Countries.createCountry(name, [
            {
                name: 'Winifred Graham',
                animals: [
                    { name: 'Anoa' },
                    { name: 'Duck' }
                ]
            },
            {
                name: 'Blanche Viciani',
                animals: [
                    { name: 'Barbet' },
                    { name: 'Rhea' },
                    { name: 'Snakes' }
                ]
            }
        ])

        assert.equal(country.hasOwnProperty('name'), true)
        assert.equal(country.name, name)
        assert.equal(country.hasOwnProperty('people'), true)
        assert.equal(Array.isArray(country.people), true)
        assert.equal(country.people.length, 2)
    })

    it('Test createPerson without parameters', () => {
        const country = Countries.createCountry()

        assert.equal(country.hasOwnProperty('name'), true)
        assert.equal(country.name, '')
        assert.equal(country.hasOwnProperty('people'), true)
        assert.equal(Array.isArray(country.people), true)
        assert.equal(country.people.length, 0)
    })

    it('Test filterPeopleAnimals with various filters', () => {
        const country = Countries.createCountry('Tohabdal', [
            {
                name: 'Winifred Graham',
                animals: [
                    { name: 'Gelada' },
                    { name: 'Rattlesnake' },
                    { name: 'Rhinoceros' },
                    { name: 'Rabbit' },
                    { name: 'Gazelle' },
                    { name: 'Duck' },
                ]
            },
            {
                name: 'Blanche Viciani',
                animals: [
                    { name: 'Gazelle' },
                    { name: 'Duck' },
                    { name: 'Bat' },
                    { name: 'Duck' },
                    { name: 'Tortoise' }
                ]
            }
        ])

        const countryWithEmptyFilter = Countries.filterPeopleAnimals('')(country)
        assert.equal(countryWithEmptyFilter.people[0].animals.length, 6)
        assert.equal(countryWithEmptyFilter.people[1].animals.length, 5)

        const countryWithFilter1 = Countries.filterPeopleAnimals('la')(country)
        assert.equal(countryWithFilter1.people[0].animals.length, 1)
        assert.equal(countryWithFilter1.people[1].animals.length, 0)

        const countryWithFilter2 = Countries.filterPeopleAnimals('e')(country)
        assert.equal(countryWithFilter2.people[0].animals.length, 4)
        assert.equal(countryWithFilter2.people[1].animals.length, 2)

        const countryWithFilter3 = Countries.filterPeopleAnimals('Duck')(country)
        assert.equal(countryWithFilter3.people[0].animals.length, 1)
        assert.equal(countryWithFilter3.people[1].animals.length, 2)
    })
})