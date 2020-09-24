const assert = require('assert')

const { People } = require('../lib')

describe('Testing People', () => {
    it('Test createPerson', () => {
        const name = 'Winifred Graham'
        const person = People.createPerson(name, [
            { name: 'Narwhal' },
            { name: 'Badger' },
            { name: 'Cobra' }
        ])

        assert.equal(person.hasOwnProperty('name'), true)
        assert.equal(person.name, name)
        assert.equal(person.hasOwnProperty('animals'), true)
        assert.equal(Array.isArray(person.animals), true)
        assert.equal(person.animals.length, 3)
    })

    it('Test createPerson without parameters', () => {
        const person = People.createPerson()

        assert.equal(person.hasOwnProperty('name'), true)
        assert.equal(person.name, '')
        assert.equal(person.hasOwnProperty('animals'), true)
        assert.equal(Array.isArray(person.animals), true)
        assert.equal(person.animals.length, 0)
    })

    it('Test filterAnimals with various filters', () => {
        const person = People.createPerson('Alexander Fleury', [
            { name: 'Gelada' },
            { name: 'Rattlesnake' },
            { name: 'Rabbit' },
            { name: 'Gazelle' },
            { name: 'Duck' },
            { name: 'Rhinoceros' },
            { name: 'Bat' },
            { name: 'Duck' },
            { name: 'Caterpillar' },
            { name: 'Tortoise' }
        ])

        assert.equal(People.filterAnimals('')(person).animals.length, 10)
        assert.equal(People.filterAnimals('la')(person).animals.length, 2)
        assert.equal(People.filterAnimals('e')(person).animals.length, 6)
        assert.equal(People.filterAnimals('Duck')(person).animals.length, 2)
    })
})