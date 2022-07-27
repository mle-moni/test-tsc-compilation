const { writeFileSync } = require('fs')

const anotherTest = require('./fr/anotherTest.json')
const hehe = require('./fr/hehe.json')
const login = require('./fr/login.json')
const menu = require('./fr/menu.json')
const mobile = require('./fr/mobile.json')
const sample = require('./fr/sample.json')
const userErrors = require('./fr/userErrors.json')
const common = require('./fr/common.json')

const keys = [
	...Object.keys(anotherTest).map((key) => `anotherTest:${key}`),
	...Object.keys(hehe).map((key) => `hehe:${key}`),
	...Object.keys(login).map((key) => `login:${key}`),
	...Object.keys(menu).map((key) => `menu:${key}`),
	...Object.keys(mobile).map((key) => `mobile:${key}`),
	...Object.keys(sample).map((key) => `sample:${key}`),
	...Object.keys(userErrors).map((key) => `userErrors:${key}`),
	...Object.keys(common).map((key) => `common:${key}`),
]

const keysText = keys.map((key) => `| '${key}'`).join('\n')

const fileText = `export type AllKeysUnion = \n${keysText};\n`

const FILE_NAME = 'AllKeysUnion.ts'

writeFileSync(FILE_NAME, fileText, 'utf8')
