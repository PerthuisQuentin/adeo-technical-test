const fc = require('fast-check')
const { Animals, People } = require('../lib')

const animalArbitrary = () =>
    fc
        .tuple(fc.string())
        .map(([name]) => Animals.createAnimal(name))

const personArbitrary = () =>
    fc
        .tuple(fc.string(), fc.array(animalArbitrary()))
        .map(([name, animals]) => People.createPerson(name, animals))
module.exports = {
    animalArbitrary,
    personArbitrary,
}