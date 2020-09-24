const fc = require('fast-check')
const { Animals, People, Countries } = require('../lib')

const animalArbitrary = () =>
    fc
        .tuple(fc.string())
        .map(([name]) => Animals.createAnimal(name))

const personArbitrary = () =>
    fc
        .tuple(fc.string(), fc.array(animalArbitrary()))
        .map(([name, animals]) => People.createPerson(name, animals))

const countryArbitrary = () =>
    fc
        .tuple(fc.string(), fc.array(personArbitrary()))
        .map(([name, people]) => Countries.createCountry(name, people))


module.exports = {
    animalArbitrary,
    personArbitrary,
    countryArbitrary,
}