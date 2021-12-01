import { renameFn } from './rename'
import { conf } from '../dbConf'
const shelljs = require('shelljs')
const useConf = conf.tox as any

if (!shelljs.which('npm')) {
  shelljs.echo('Sorry, this script requires npm')
  shelljs.exit(1)
}
const buildDBEntityStr = `npx rimraf ./src/entities & npx typeorm-model-generator -h  ${
  useConf.host
} -d ${useConf.database} -p ${useConf.port ?? 3306} -u ${useConf.username} -x ${
  useConf.password
} -e ${useConf.type} -o ./src/entities  --noConfig true --ce pascal --cp camel`
console.log(buildDBEntityStr)
try {
  shelljs.exec(buildDBEntityStr)
  renameFn()
} catch (error) {}
