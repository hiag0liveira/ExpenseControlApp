import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { format, subDays } from 'date-fns';

const app = express();
const port = 3001;
const apiKey = 'f6ae31fa2e16454889e3d3315f6681cc';

app.use(cors());

// Cache object to store the API response
let cache = {
    date: '',
    data: null
};

app.get('/api/exchange-rates', async (req, res) => {
    const { symbols = 'BRL' } = req.query;
    const today = new Date();
    const formattedToday = format(today, 'yyyy-MM-dd');

    // Check if cache is valid
    if (cache.date === formattedToday) {
        console.log('Returning cached data');
        return res.json(cache.data);
    }

    const endDate = today;
    const startDate = subDays(endDate, 30);
    const formattedEndDate = formattedToday;
    const formattedStartDate = format(startDate, 'yyyy-MM-dd');

    console.log(`Fetching data from ${formattedStartDate} to ${formattedEndDate}`);

    try {
        const promises = [];
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const date = format(d, 'yyyy-MM-dd');
            promises.push(axios.get(`https://openexchangerates.org/api/historical/${date}.json?app_id=${apiKey}&symbols=${symbols}`));
        }

        const responses = await Promise.all(promises);
        const rates = responses.map((response, index) => ({
            date: format(subDays(endDate, 30 - index), 'yyyy-MM-dd'),
            rate: response.data.rates[symbols],
        }));

        const responseData = { rates };

        // Update cache
        cache = {
            date: formattedToday,
            data: responseData
        };

        res.json(responseData);
    } catch (error) {
        console.error('Error fetching data from API:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
