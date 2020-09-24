const assert = require('assert')

const { People, Animals } = require('../lib')

describe('Testing People', () => {
    it('Test createPerson', () => {
        const name = 'something'
        const animals = [
            Animals.createAnimal('Narwhal'),
            Animals.createAnimal('Badger'),
            Animals.createAnimal('Cobra')
        ]
        const person = People.createPerson(name, animals)

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
            Animals.createAnimal('Gelada'),
            Animals.createAnimal('Rattlesnake'),
            Animals.createAnimal('Rabbit'),
            Animals.createAnimal('Gazelle'),
            Animals.createAnimal('Duck'),
            Animals.createAnimal('Rhinoceros'),
            Animals.createAnimal('Bat'),
            Animals.createAnimal('Duck'),
            Animals.createAnimal('Caterpillar'),
            Animals.createAnimal('Tortoise')
        ])

        assert.equal(People.filterAnimals('')(person).animals.length, 10)
        assert.equal(People.filterAnimals('la')(person).animals.length, 2)
        assert.equal(People.filterAnimals('e')(person).animals.length, 6)
        assert.equal(People.filterAnimals('Duck')(person).animals.length, 2)
    })
})