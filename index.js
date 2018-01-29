#!/usr/bin/env node
const program = require('commander')

program
	.version('0.0.1', '-v, --version')
	.description('easily generate licenses')
	.command('generate', 'generate a license').alias('g')
	.command('list', 'list all licenses available').alias('l')
	.command('print', 'print out a specific license').alias('p')
	.parse(process.argv)
