import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const conf: Record<string, TypeOrmModuleOptions> = {
  // test: {
  //   type: 'mysql',
  //   host: '119.45.0.66',
  //   username: 'root',
  //   password: '123456',
  //   database: 'nestjs-demo',
  //   entities: ['dist/**/*.entities{.ts,.js}'],
  //   synchronize: false
  // },
  tox: {
    type: 'mssql',
    host: '10.111.18.177',
    port: 20001,
    username: 'mdadmin',
    password: 'MDad1234',
    database: 'MDRAReport_PRD',
    entities: ['dist/src/entities/*{.ts,.js}'],
    extra: {
      trustServerCertificate: true
    },
    synchronize: false
  }
}
