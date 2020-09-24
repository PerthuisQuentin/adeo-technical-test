const fc = require('fast-check')
const { Animals } = require('../lib')

const animalArbitrary = () =>
    fc
        .tuple(fc.string())
        .map(([name]) => Animals.createAnimal(name))

module.exports = {
    animalArbitrary
}