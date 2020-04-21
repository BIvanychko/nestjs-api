import { Injectable } from '@nestjs/common';
import { IDbConfig, IWebServerConfig, IDbPoolConfig } from '../interfaces/config.inteface';

@Injectable()
export class ConfigService {
    private static get(envName: string, defaultValue?: string | number): string | number {
        const envValue = process.env[envName] || defaultValue;
        if (envValue === undefined) {
            throw Error(`Environment variable '${envName}' is not set`);
        }
        return envValue;
    }

    private static getAsNumber(envName: string, defaultValue: number): number {
        const envValue = ConfigService.get(envName, defaultValue);
        return typeof envValue === 'string' ? parseInt(envValue, 10) : envValue;
    }

    private static getAsString(envName: string, defaultValue?: string): string {
        const envValue = ConfigService.get(envName, defaultValue);
        return envValue.toString();
    }

    static getDbConfig() : IDbConfig {
        return {
            host: ConfigService.getAsString('DATABASE_HOST','localhost'),
            port: ConfigService.getAsNumber('DATABASE_PORT', 5432),
            database: ConfigService.getAsString('DATABASE_NAME', 'test_db'),
            user: ConfigService.getAsString('DATABASE_USER','postgres'),
            password: ConfigService.getAsString('DATABASE_PASSWORD', '')
        }
    }

    static getWebServerConfig() : IWebServerConfig {
        return {
            port: ConfigService.getAsNumber('WEB_SERVER_PORT', 3000)
        }
    }

    static getDbPoolConfig() : IDbPoolConfig {
        return {
            min: ConfigService.getAsNumber('DATABASE_POOL_MIN', 1),
            max: ConfigService.getAsNumber('DATABASE_POOL_MAX', 5)
        }
    }
}
