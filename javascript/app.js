const { Countries } = require('./lib')

let countries = require('./data').data

// Filter people's animals
let filter = process.argv.find(arg => arg.startsWith('--filter='))
if (filter) {
  filter = filter.split('=')[1]
  countries = countries.map(country => Countries.filterPeopleAnimals(filter)(country))
}

// Add children counts
if (process.argv.find(arg => arg === '--count')) {
  countries = countries.map(country => Countries.addChildrenCount(country))
}

console.log(JSON.stringify(countries, null, 2))