const { readdir, rename } = require('fs/promises')

const path = require('path')
const entityDir = path.resolve(__dirname, '../src/entities')
;(async () => {
  const files = await readdir(entityDir)
  for (const f of files) {
    const fileNameArr = f.split('.')
    if (!fileNameArr.includes('entity')) {
      const newFileName = fileNameArr[0] + '.entity' + '.ts'
      await rename(`${entityDir}/${f}`, `${entityDir}/${newFileName}`)
    } else {
      console.log('nothing')
    }
  }
})()
