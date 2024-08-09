import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import axios from 'axios';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExchangeRate } from './entities/exchangeRate.entity';

@Injectable()
export class ExchangeRateService {
    constructor(
        @InjectRepository(ExchangeRate)
        private readonly exchangeRateRepository: Repository<ExchangeRate>,
    ) { }

    async triggerManualFetch() {
        await this.fetchAndSaveExchangeRates();
    }

    @Cron('0 0 * * *') // Executa uma vez ao dia à meia-noite
    async fetchAndSaveExchangeRates() {
        const options = {
            method: 'GET',
            url: 'https://exchangerate-api.p.rapidapi.com/rapid/latest/USD',
            headers: {
                'x-rapidapi-key': '941e30ca2cmshbff951bbf8238d8p1a9319jsn364577f8faa6',
                'x-rapidapi-host': 'exchangerate-api.p.rapidapi.com',
            }
        };

        try {
            const response = await axios.request(options);
            console.log('API Response:', response.data);

            const rates = response.data.rates;
            const date = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

            for (const currency in rates) {
                const existingRate = await this.exchangeRateRepository.findOne({
                    where: { date, currency },
                });

                if (!existingRate) {
                    const newRate = this.exchangeRateRepository.create({
                        date,
                        rate: rates[currency],
                        currency,
                    });

                    console.log('Saving exchange rate:', newRate);

                    await this.exchangeRateRepository.save(newRate);
                } else {
                    console.log(`Rate for ${currency} on ${date} already exists, skipping.`);
                }
            }
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
        }
    }
    async getExchangeRates(currency: string | string[]): Promise<ExchangeRate[]> {
        // Se currency for um array, desestruture para pegar apenas o primeiro elemento
        if (Array.isArray(currency)) {
            currency = currency[0];
        }

        const rates = await this.exchangeRateRepository.find({
            where: {
                currency
            },
            order: { date: 'ASC' },
        });
        return rates;
    }


}