const createAnimal = (name = '') => ({
    name,
    toString: () => name
})

const nameContains = filter => animal => animal.name.includes(filter)

module.exports = {
    createAnimal,
    nameContains
}