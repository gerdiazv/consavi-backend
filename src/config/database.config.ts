import { registerAs } from '@nestjs/config'
import { DataSourceOptions } from 'typeorm'
import { join } from 'path'

export default registerAs(
  'database',
  (): DataSourceOptions =>
    ({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USERNAME || 'admin',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'consavi-db',
      entities: ['dist/**/*.entity.{js,ts}'],
      synchronize: true,
      // logging: true,
      autoLoadEntities: true,
    }) as DataSourceOptions,
)
