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

program.parse(process.argv)

// -- CLI logic --

let countries = require(Path.resolve(__dirname, program.input)).data

// Filter people's animals
if (program.filter) countries = countries.map(country => Countries.filterPeopleAnimals(program.filter)(country))

console.log(JSON.stringify(countries, null, 2))
