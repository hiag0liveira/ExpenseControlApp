import { FC, useEffect, useState } from 'react'
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
import { instance } from '../api/axios.api'

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

	const fetchData = async (currency: string) => {
		try {
			const response = await instance.get(`/exchange-rate`, {
				params: {
					currency: currency,
				},
			})

			const rates: ExchangeRateData[] = response.data.map((item: any) => ({
				date: item.date,
				rate: item.rate,
			}))

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
						style={{ fontSize: '16px', padding: '3px', width: '90px' }}
					>
						<option className="select-option" value="USD">
							USD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="AED">
							AED
						</option>{' '}
						className="select-option"
						<option className="select-option" value="AFN">
							AFN
						</option>{' '}
						className="select-option"
						<option className="select-option" value="ALL">
							ALL
						</option>{' '}
						className="select-option"
						<option className="select-option" value="AMD">
							AMD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="ANG">
							ANG
						</option>{' '}
						className="select-option"
						<option className="select-option" value="AOA">
							AOA
						</option>{' '}
						className="select-option"
						<option className="select-option" value="ARS">
							ARS
						</option>{' '}
						className="select-option"
						<option className="select-option" value="AUD">
							AUD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="AWG">
							AWG
						</option>{' '}
						className="select-option"
						<option className="select-option" value="AZN">
							AZN
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BAM">
							BAM
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BBD">
							BBD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BDT">
							BDT
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BGN">
							BGN
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BHD">
							BHD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BIF">
							BIF
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BMD">
							BMD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BND">
							BND
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BOB">
							BOB
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BRL">
							BRL
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BSD">
							BSD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BTN">
							BTN
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BWP">
							BWP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BYN">
							BYN
						</option>{' '}
						className="select-option"
						<option className="select-option" value="BZD">
							BZD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="CAD">
							CAD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="CDF">
							CDF
						</option>{' '}
						className="select-option"
						<option className="select-option" value="CHF">
							CHF
						</option>{' '}
						className="select-option"
						<option className="select-option" value="CLP">
							CLP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="CNY">
							CNY
						</option>{' '}
						className="select-option"
						<option className="select-option" value="COP">
							COP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="CRC">
							CRC
						</option>{' '}
						className="select-option"
						<option className="select-option" value="CUP">
							CUP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="CVE">
							CVE
						</option>{' '}
						className="select-option"
						<option className="select-option" value="CZK">
							CZK
						</option>{' '}
						className="select-option"
						<option className="select-option" value="DJF">
							DJF
						</option>{' '}
						className="select-option"
						<option className="select-option" value="DKK">
							DKK
						</option>{' '}
						className="select-option"
						<option className="select-option" value="DOP">
							DOP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="DZD">
							DZD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="EGP">
							EGP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="ERN">
							ERN
						</option>{' '}
						className="select-option"
						<option className="select-option" value="ETB">
							ETB
						</option>{' '}
						className="select-option"
						<option className="select-option" value="EUR">
							EUR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="FJD">
							FJD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="FKP">
							FKP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="FOK">
							FOK
						</option>{' '}
						className="select-option"
						<option className="select-option" value="GBP">
							GBP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="GEL">
							GEL
						</option>{' '}
						className="select-option"
						<option className="select-option" value="GGP">
							GGP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="GHS">
							GHS
						</option>{' '}
						className="select-option"
						<option className="select-option" value="GIP">
							GIP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="GMD">
							GMD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="GNF">
							GNF
						</option>{' '}
						className="select-option"
						<option className="select-option" value="GTQ">
							GTQ
						</option>{' '}
						className="select-option"
						<option className="select-option" value="GYD">
							GYD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="HKD">
							HKD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="HNL">
							HNL
						</option>{' '}
						className="select-option"
						<option className="select-option" value="HRK">
							HRK
						</option>{' '}
						className="select-option"
						<option className="select-option" value="HTG">
							HTG
						</option>{' '}
						className="select-option"
						<option className="select-option" value="HUF">
							HUF
						</option>{' '}
						className="select-option"
						<option className="select-option" value="IDR">
							IDR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="ILS">
							ILS
						</option>{' '}
						className="select-option"
						<option className="select-option" value="IMP">
							IMP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="INR">
							INR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="IQD">
							IQD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="IRR">
							IRR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="ISK">
							ISK
						</option>{' '}
						className="select-option"
						<option className="select-option" value="JEP">
							JEP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="JMD">
							JMD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="JOD">
							JOD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="JPY">
							JPY
						</option>{' '}
						className="select-option"
						<option className="select-option" value="KES">
							KES
						</option>{' '}
						className="select-option"
						<option className="select-option" value="KGS">
							KGS
						</option>{' '}
						className="select-option"
						<option className="select-option" value="KHR">
							KHR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="KID">
							KID
						</option>{' '}
						className="select-option"
						<option className="select-option" value="KMF">
							KMF
						</option>{' '}
						className="select-option"
						<option className="select-option" value="KRW">
							KRW
						</option>{' '}
						className="select-option"
						<option className="select-option" value="KWD">
							KWD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="KYD">
							KYD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="KZT">
							KZT
						</option>{' '}
						className="select-option"
						<option className="select-option" value="LAK">
							LAK
						</option>{' '}
						className="select-option"
						<option className="select-option" value="LBP">
							LBP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="LKR">
							LKR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="LRD">
							LRD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="LSL">
							LSL
						</option>{' '}
						className="select-option"
						<option className="select-option" value="LYD">
							LYD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MAD">
							MAD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MDL">
							MDL
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MGA">
							MGA
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MKD">
							MKD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MMK">
							MMK
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MNT">
							MNT
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MOP">
							MOP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MRU">
							MRU
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MUR">
							MUR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MVR">
							MVR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MWK">
							MWK
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MXN">
							MXN
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MYR">
							MYR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="MZN">
							MZN
						</option>{' '}
						className="select-option"
						<option className="select-option" value="NAD">
							NAD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="NGN">
							NGN
						</option>{' '}
						className="select-option"
						<option className="select-option" value="NIO">
							NIO
						</option>{' '}
						className="select-option"
						<option className="select-option" value="NOK">
							NOK
						</option>{' '}
						className="select-option"
						<option className="select-option" value="NPR">
							NPR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="NZD">
							NZD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="OMR">
							OMR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="PAB">
							PAB
						</option>{' '}
						className="select-option"
						<option className="select-option" value="PEN">
							PEN
						</option>{' '}
						className="select-option"
						<option className="select-option" value="PGK">
							PGK
						</option>{' '}
						className="select-option"
						<option className="select-option" value="PHP">
							PHP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="PKR">
							PKR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="PLN">
							PLN
						</option>{' '}
						className="select-option"
						<option className="select-option" value="PYG">
							PYG
						</option>{' '}
						className="select-option"
						<option className="select-option" value="QAR">
							QAR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="RON">
							RON
						</option>{' '}
						className="select-option"
						<option className="select-option" value="RSD">
							RSD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="RUB">
							RUB
						</option>{' '}
						className="select-option"
						<option className="select-option" value="RWF">
							RWF
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SAR">
							SAR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SBD">
							SBD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SCR">
							SCR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SDG">
							SDG
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SEK">
							SEK
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SGD">
							SGD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SHP">
							SHP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SLE">
							SLE
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SLL">
							SLL
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SOS">
							SOS
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SRD">
							SRD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SSP">
							SSP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="STN">
							STN
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SYP">
							SYP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="SZL">
							SZL
						</option>{' '}
						className="select-option"
						<option className="select-option" value="THB">
							THB
						</option>{' '}
						className="select-option"
						<option className="select-option" value="TJS">
							TJS
						</option>{' '}
						className="select-option"
						<option className="select-option" value="TMT">
							TMT
						</option>{' '}
						className="select-option"
						<option className="select-option" value="TND">
							TND
						</option>{' '}
						className="select-option"
						<option className="select-option" value="TOP">
							TOP
						</option>{' '}
						className="select-option"
						<option className="select-option" value="TRY">
							TRY
						</option>{' '}
						className="select-option"
						<option className="select-option" value="TTD">
							TTD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="TVD">
							TVD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="TWD">
							TWD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="TZS">
							TZS
						</option>{' '}
						className="select-option"
						<option className="select-option" value="UAH">
							UAH
						</option>{' '}
						className="select-option"
						<option className="select-option" value="UGX">
							UGX
						</option>{' '}
						className="select-option"
						<option className="select-option" value="UYU">
							UYU
						</option>{' '}
						className="select-option"
						<option className="select-option" value="UZS">
							UZS
						</option>{' '}
						className="select-option"
						<option className="select-option" value="VES">
							VES
						</option>{' '}
						className="select-option"
						<option className="select-option" value="VND">
							VND
						</option>{' '}
						className="select-option"
						<option className="select-option" value="VUV">
							VUV
						</option>{' '}
						className="select-option"
						<option className="select-option" value="WST">
							WST
						</option>{' '}
						className="select-option"
						<option className="select-option" value="XAF">
							XAF
						</option>{' '}
						className="select-option"
						<option className="select-option" value="XCD">
							XCD
						</option>{' '}
						className="select-option"
						<option className="select-option" value="XDR">
							XDR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="XOF">
							XOF
						</option>{' '}
						className="select-option"
						<option className="select-option" value="XPF">
							XPF
						</option>{' '}
						className="select-option"
						<option className="select-option" value="YER">
							YER
						</option>{' '}
						className="select-option"
						<option className="select-option" value="ZAR">
							ZAR
						</option>{' '}
						className="select-option"
						<option className="select-option" value="ZMW">
							ZMW
						</option>{' '}
						className="select-option"
						<option className="select-option" value="ZWL">
							ZWL
						</option>{' '}
						className="select-option"
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
