import { Controller, Get, Query } from '@nestjs/common';
import { ExchangeRateService } from './exchangeRate.service';

@Controller('exchange-rate')
export class ExchangeRateController {
    constructor(private readonly exchangeRateService: ExchangeRateService) { }

    @Get()
    async getExchangeRates(@Query('currency') currency: string) {
        return this.exchangeRateService.getExchangeRates(currency);
    }
}
