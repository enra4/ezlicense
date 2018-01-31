#!/usr/bin/env node
const program = require('commander')

program
	.version('0.1.3', '-v, --version')
	.description('easily generate licenses')
	.command('generate', 'generate a license')
	.command('list', 'list all licenses available')
	.command('print', 'print out a specific license')
	.parse(process.argv)
