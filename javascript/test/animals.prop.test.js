const assert = require('assert')
const fc = require('fast-check')

const { Animals } = require('../lib')
const { animalArbitrary } = require('./generator')

describe('Testing Animals properties', () => {
    it('Name should always contains a sub part of himself', () => {
        fc.assert(fc.property(
            animalArbitrary(), fc.integer(), fc.integer(),
            (animal, a, b) => {
                const subPart = animal.name.substring(a % animal.name.length, b % animal.name.length)
                return Animals.nameContains(subPart)(animal)
            }
        ))
    })
})