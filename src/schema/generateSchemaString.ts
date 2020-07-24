import schema from './'
import fs = require('fs')
console.log(schema)
const data = `
const data = \`${schema}\`
export default data
`
console.log('Generating Schema String')

fs.writeFile('./src/schema/schemaString.ts', data, (err) => {
    if (err) console.error(err)
    console.log('Successfully Generated Schema String')
})