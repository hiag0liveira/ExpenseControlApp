import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExchangeRateService } from './exchangeRate/exchangeRate.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors();

  const exchangeRateService = app.get(ExchangeRateService);

  // Chame o método para fazer a coleta manual
  await exchangeRateService.triggerManualFetch();

  await app.listen(3000);


}
bootstrap();
