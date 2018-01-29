#!/usr/bin/env node
const fs = require('fs')

const program = require('commander')

program
	.option('-l, --license [licenseName]', 'license to generate')
	.option('-y, --year [year]', 'include year (default: steal from os)')
	.option('-a, --author [name]', 'include author (default: steal from package.json)')
	.parse(process.argv)

if (!program.license) {
	console.log('  no --license [licenseName] was supplied, pls do something')
	process.exit()
}

if (!program.year) {
	program.year = (new Date()).getFullYear()
}

if (!program.author) {
	if (fs.existsSync('./package.json')) {
		const name = require('./package.json').author
		if (name) {
			program.author = name
		} else {
			console.log('  no --author [name] was supplied and no package.json was found, pls do something')
			process.exit()
		}
	} else {
		console.log('  no --author [name] was supplied and no package.json was found, pls do something')
		process.exit()
	}
}

const file = `${__dirname}/licenses/${program.license}.txt`
if (fs.existsSync(file)) {
	// place year and name into license
	// couldnt find out how to do with regex bc i suck
	let content = fs.readFileSync(file, 'utf8')
	content = content.split('[year]').join(program.year)
	content = content.split('[name]').join(program.author)

	const license = fs.createWriteStream('license')
	license.write(content)
} else {
	console.log('  sry cant find that license :x')
}
