# Commands to analyze tsc perfs

(don't forget to change `<path>`)

`npx tsc --generateTrace <path>`

`npx @typescript/analyze-trace <path> --forceMillis=100 --skipMillis=50`
