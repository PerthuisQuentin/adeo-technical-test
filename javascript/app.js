const Path = require('path')
const { Command } = require('commander')

const { Countries } = require('./lib')
const package = require('./package.json')

// -- CLI setup --

const program = new Command()

program.version(package.version)

program
  .option('-i, --input <path>', 'javascript data file to use', 'data.js')
  .option('-f, --filter <string>', 'string to filter animals')
  .option('-c, --count', 'add children count in names')

program.parse(process.argv)

// -- CLI logic --

let countries = require(Path.resolve(__dirname, program.input)).data

// Filter people's animals
if (program.filter) countries = countries.map(country => Countries.filterPeopleAnimals(program.filter)(country))

// Add children counts
if (program.count) countries = countries.map(country => Countries.addChildrenCount(country))

console.log(JSON.stringify(countries, null, 2))
