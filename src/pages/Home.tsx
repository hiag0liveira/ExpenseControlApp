import { FC } from 'react'
import ChartCambio from '../components/ChartCambio'
import Calculator from '../components/Calculator'
import Notes from '../components/Notes'

const Home: FC = () => {
	const tips = [
		'Create a budget and stick to it',
		'Track your expenses daily',
		'Reduce unnecessary subscriptions',
		'Save at least 20% of your income',
		'Invest in low-cost index funds',
		'Use cashback and reward programs',
		'Plan your meals and cook at home',
		'Avoid impulse purchases',
		'Review your financial goals regularly',
		'Stay informed about financial trends',
	]

	return (
		<div style={{ padding: '20px' }}>
			<h1
				style={{
					fontSize: '24px',
					fontWeight: 'bold',
					marginBottom: '45px',
					textAlign: 'center',
				}}
			>
				Follow the world economy
			</h1>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div style={{ fontSize: '24px', flexGrow: 1, marginRight: '20px' }}>
					<h2 style={{ marginBottom: '40px' }}>Economy and Saving Tips</h2>
					<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
						{tips.map((tip, index) => (
							<li key={index} style={{ marginBottom: '30px' }}>
								{tip}
							</li>
						))}
					</ul>
				</div>
				<div style={{ flexGrow: 2, maxWidth: '60%' }}>
					<div style={{ marginBottom: '20px' }}>
						<ChartCambio />
					</div>
					<div style={{ display: 'flex', gap: '20px' }}>
						<Calculator />
						<div style={{ flexGrow: 1 }}>
							<Notes />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
