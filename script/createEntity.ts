const shelljs = require('shelljs')
const dbConfs = require('../ormconfig.json')
const testDbConf = dbConfs[0]
if (!shelljs.which('npm')) {
  shelljs.echo('Sorry, this script requires npm')
  shelljs.exit(1)
}
const buildDBEntityStr = `rimraf ./src/entities & npx typeorm-model-generator -h  ${
  testDbConf.host
} -d ${testDbConf.database} -p ${testDbConf.port ?? 3306} -u ${
  testDbConf.username
} -x ${testDbConf.username} -e ${
  testDbConf.type
} -o ./src/entities --noConfig true --ce pascal --cp camel`
if (shelljs.exec(buildDBEntityStr).code !== 0) {
  shelljs.echo('Error: failed')
  shelljs.exit(1)
}
