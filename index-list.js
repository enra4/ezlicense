#!/usr/bin/env node
const fs = require('fs')

fs.readdirSync(`${__dirname}/licenses`).forEach(filename => {
	console.log(`  ${filename}`)
})
