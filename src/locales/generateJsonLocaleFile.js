const { writeFileSync } = require('fs')

const args = process.argv.slice(2)

const EXPECTED_ARGS_NUMBER = 3

if (args.length !== EXPECTED_ARGS_NUMBER) {
	console.log(`bad number of arguments, expected ${EXPECTED_ARGS_NUMBER}, got ${args.length}`)
	process.exit(1)
}

const [keyPrefix, translationText, fileName] = args

const localesText = new Array(150)
	.fill(0)
	.map((_, index) => `  "${keyPrefix}-${index}": "${translationText} (${index})"`)
	.join(",\n")

const fileData = `{\n${localesText}\n}\n`

writeFileSync(fileName, fileData, 'utf8')