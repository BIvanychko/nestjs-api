export interface IDbConfig {
    host: string,
    port: number,
    database: string,
    user: string,
    password: string
}

export interface IWebServerConfig {
    port: number
}

export interface IDbPoolConfig {
    min: number,
    max: number
}