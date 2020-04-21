import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseService } from './database/database.service';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const dbConfig = ConfigService.getDbConfig();
  const webServerConfig = ConfigService.getWebServerConfig();

  const databaseService = new DatabaseService();
  databaseService.initDb(dbConfig);

  await app.listen(webServerConfig.port);
}
bootstrap();
