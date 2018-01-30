# ezlicense
easily generate licenses from cli

## install
	# npm install -g ezlicense

## usage
list all licenses
`$ ezlicense list`

print out a specific license, for example mit
`$ ezlicense print mit`

generate license with author being enra4 and copyright year being 2018
`$ ezlicense generate -l mit -a enra4 -y 2018`

#### all the options for generating have defaults
* if not -l is provided, will look for license in package.json
* if not -a is provided, will look for author in package.json
* if not -y is provided, will look for year in os
