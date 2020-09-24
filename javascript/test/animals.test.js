const assert = require('assert')

const { Animals } = require('../lib')

describe('Testing Animals', () => {
    it('Test createAnimal', () => {
        const name = 'Winifred Graham'
        const animal = Animals.createAnimal(name)

        assert.equal(animal.hasOwnProperty('name'), true)
        assert.equal(animal.name, name)
    })

    it('Test createAnimal without parameters', () => {
        const animal = Animals.createAnimal()

        assert.equal(animal.hasOwnProperty('name'), true)
        assert.equal(animal.name, '')
    })

    it('Test nameContains on empty filter', () => {
        const animal = Animals.createAnimal('Philip Murray')

        assert.equal(Animals.nameContains('')(animal), true)
    })

    it('Test nameContains with valid filters', () => {
        const animal = Animals.createAnimal('Bobby Ristori')

        assert.equal(Animals.nameContains('Bo')(animal), true)
        assert.equal(Animals.nameContains('y R')(animal), true)
        assert.equal(Animals.nameContains('st')(animal), true)
        assert.equal(Animals.nameContains('ori')(animal), true)
        assert.equal(Animals.nameContains('Bobby Ristori')(animal), true)
    })

    it('Test nameContains with invalid filters', () => {
        const animal = Animals.createAnimal('Louise Pinzauti')

        assert.equal(Animals.nameContains('fds')(animal), false)
        assert.equal(Animals.nameContains('r')(animal), false)
        assert.equal(Animals.nameContains('qfjkl')(animal), false)
    })
})