import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	TimeScale,
	Filler,
} from 'chart.js'
import 'chartjs-adapter-date-fns'

interface ExchangeRateData {
	date: string
	rate: number
}

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	TimeScale,
	Filler,
)

const ChartCambio: FC = () => {
	const [data, setData] = useState<ExchangeRateData[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [targetCurrency, setTargetCurrency] = useState<string>('BRL')

	const fetchData = async (symbols: string) => {
		try {
			const response = await axios.get(
				`http://localhost:3001/api/exchange-rates?symbols=${symbols}`,
			)
			console.log('Data fetched:', response.data)
			const rates = response.data.rates

			setData(rates)
			setLoading(false)
		} catch (error) {
			console.error('Error fetching data', error)
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData(targetCurrency)
	}, [targetCurrency])

	const handleTargetCurrencyChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setTargetCurrency(e.target.value)
	}

	const chartData = {
		labels: data.map((item) => item.date),
		datasets: [
			{
				label: `USD to ${targetCurrency} Exchange Rate`,
				data: data.map((item) => item.rate),
				borderColor: 'rgba(75, 192, 192, 1)',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				fill: true,
			},
		],
	}

	const chartOptions: any = {
		responsive: true,
		scales: {
			x: {
				type: 'time',
				time: {
					unit: 'day',
					tooltipFormat: 'P',
					displayFormats: {
						day: 'MMM d',
					},
				},
				title: {
					display: true,
					text: 'Date',
				},
			},
			y: {
				title: {
					display: true,
					text: 'Exchange Rate',
				},
			},
		},
		plugins: {
			legend: {
				display: true,
				position: 'top' as const,
			},
		},
	}

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div style={{ padding: '20px' }}>
			<p>Chart of USD to {targetCurrency} exchange rate over time</p>
			<div>
				<label>
					Target Currency:
					<select
						className="input border-slate-700 w-90"
						name="category"
						required
						value={targetCurrency}
						onChange={handleTargetCurrencyChange}
						style={{ fontSize: '16px', padding: '3  px', width: '90px' }}
					>
						<option className="select-option" value="BRL">
							BRL
						</option>
						<option className="select-option" value="JPY">
							JPY
						</option>
						<option className="select-option" value="AUD">
							AUD
						</option>
						<option className="select-option" value="EUR">
							EUR
						</option>
						<option className="select-option" value="GBP">
							GBP
						</option>
						<option className="select-option" value="CAD">
							CAD
						</option>
						<option className="select-option" value="CNY">
							CNY
						</option>
						<option className="select-option" value="INR">
							INR
						</option>
						<option className="select-option" value="RUB">
							RUB
						</option>
						<option className="select-option" value="ZAR">
							ZAR
						</option>
						<option className="select-option" value="NZD">
							NZD
						</option>
						<option className="select-option" value="MXN">
							MXN
						</option>
						<option className="select-option" value="SGD">
							SGD
						</option>
						<option className="select-option" value="HKD">
							HKD
						</option>
						<option className="select-option" value="CHF">
							CHF
						</option>
						<option className="select-option" value="KRW">
							KRW
						</option>
						<option className="select-option" value="SEK">
							SEK
						</option>
						<option className="select-option" value="NOK">
							NOK
						</option>
						<option className="select-option" value="DKK">
							DKK
						</option>
						<option className="select-option" value="PLN">
							PLN
						</option>
						<option className="select-option" value="TRY">
							TRY
						</option>
						<option className="select-option" value="THB">
							THB
						</option>
						<option className="select-option" value="IDR">
							IDR
						</option>
						<option className="select-option" value="HUF">
							HUF
						</option>
						<option className="select-option" value="CZK">
							CZK
						</option>
						<option className="select-option" value="ILS">
							ILS
						</option>
						<option className="select-option" value="MYR">
							MYR
						</option>
						<option className="select-option" value="PHP">
							PHP
						</option>
						<option className="select-option" value="VND">
							VND
						</option>
						<option className="select-option" value="EGP">
							EGP
						</option>
						<option className="select-option" value="SAR">
							SAR
						</option>
						<option className="select-option" value="AED">
							AED
						</option>
						<option className="select-option" value="COP">
							COP
						</option>
						<option className="select-option" value="PEN">
							PEN
						</option>
						<option className="select-option" value="CLP">
							CLP
						</option>
						<option className="select-option" value="PKR">
							PKR
						</option>
						<option className="select-option" value="BDT">
							BDT
						</option>
						<option className="select-option" value="UAH">
							UAH
						</option>
						<option className="select-option" value="NGN">
							NGN
						</option>
						<option className="select-option" value="KES">
							KES
						</option>
						<option className="select-option" value="GHS">
							GHS
						</option>
						<option className="select-option" value="DZD">
							DZD
						</option>
						<option className="select-option" value="MAD">
							MAD
						</option>
						<option className="select-option" value="TWD">
							TWD
						</option>
						<option className="select-option" value="LKR">
							LKR
						</option>
						<option className="select-option" value="BHD">
							BHD
						</option>
						<option className="select-option" value="QAR">
							QAR
						</option>
						<option className="select-option" value="JOD">
							JOD
						</option>
						<option className="select-option" value="OMR">
							OMR
						</option>
					</select>
				</label>
			</div>
			<div>
				<Line data={chartData} options={chartOptions} />
			</div>
		</div>
	)
}

export default ChartCambio
