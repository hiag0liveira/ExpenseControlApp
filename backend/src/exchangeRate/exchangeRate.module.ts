import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeRate } from './entities/exchangeRate.entity';
import { ExchangeRateService } from './exchangeRate.service';
import { ExchangeRateController } from './exchangeRate.controller';


@Module({
    imports: [TypeOrmModule.forFeature([ExchangeRate])],
    providers: [ExchangeRateService],
    controllers: [ExchangeRateController],
    exports: [ExchangeRateService],
})
export class ExchangeRateModule { }
