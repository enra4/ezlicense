#!/usr/bin/env node
const fs = require('fs')

fs.readdirSync(`${__dirname}/licenses`).forEach(filename => {
	filename = filename.split('.txt')[0]
	console.log(`  ${filename}`)
})
