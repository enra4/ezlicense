#!/usr/bin/env node
const fs = require('fs')

const program = require('commander')

program
	.parse(process.argv)

const license = program.args

const file = `${__dirname}/licenses/${license}.txt`
if (fs.existsSync(file)) {
	const data = fs.readFileSync(file, 'utf8').split('\n')
	for (const line of data) {
		console.log(`  ${line}`)
	}
} else {
	console.log('  sry cant find that license :x')
}
