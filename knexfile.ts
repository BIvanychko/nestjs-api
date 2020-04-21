import * as path from 'path';
import {ConfigService} from './src/config/config.service';

module.exports = {
    client: 'postgresql',
    connection: ConfigService.getDbConfig(),
    pool: ConfigService.getDbPoolConfig(),
    migrations: {
        directory: path.join(__dirname, 'migrations'),
        tableName: 'migrations'
    }
};