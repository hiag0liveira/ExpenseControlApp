import { FC, useState } from 'react'

const Calculator: FC = () => {
	const [input, setInput] = useState<string>('')

	const handleButtonClick = (value: string) => {
		setInput(input + value)
	}

	const handleClear = () => {
		setInput('')
	}

	const handleCalculate = () => {
		try {
			setInput(eval(input).toString())
		} catch {
			setInput('Error')
		}
	}

	return (
		<div
			style={{
				padding: '20px',
				maxWidth: '300px',
				backgroundColor: 'rgb(30, 41, 59)',
				borderRadius: '8px',
				color: '#fff',
			}}
		>
			<h2>Calculator</h2>
			<input
				type="text"
				value={input}
				readOnly
				style={{
					width: '100%',
					marginBottom: '10px',
					padding: '10px',
					borderRadius: '4px',
					border: '1px solid #ccc',
					backgroundColor: '#333',
					color: '#fff',
				}}
			/>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 1fr)',
					gap: '5px',
				}}
			>
				{['1', '2', '3', '+'].map((value) => (
					<button
						key={value}
						onClick={() => handleButtonClick(value)}
						style={{
							padding: '10px',
							borderRadius: '4px',
							backgroundColor: '#555',
							color: '#fff',
						}}
					>
						{value}
					</button>
				))}
				{['4', '5', '6', '-'].map((value) => (
					<button
						key={value}
						onClick={() => handleButtonClick(value)}
						style={{
							padding: '10px',
							borderRadius: '4px',
							backgroundColor: '#555',
							color: '#fff',
						}}
					>
						{value}
					</button>
				))}
				{['7', '8', '9', '*'].map((value) => (
					<button
						key={value}
						onClick={() => handleButtonClick(value)}
						style={{
							padding: '10px',
							borderRadius: '4px',
							backgroundColor: '#555',
							color: '#fff',
						}}
					>
						{value}
					</button>
				))}
				<button
					onClick={handleClear}
					style={{
						padding: '10px',
						borderRadius: '4px',
						backgroundColor: '#f44336',
						color: '#fff',
					}}
				>
					C
				</button>
				<button
					onClick={() => handleButtonClick('0')}
					style={{
						padding: '10px',
						borderRadius: '4px',
						backgroundColor: '#555',
						color: '#fff',
					}}
				>
					0
				</button>
				<button
					onClick={handleCalculate}
					style={{
						padding: '10px',
						borderRadius: '4px',
						backgroundColor: '#4caf50',
						color: '#fff',
					}}
				>
					=
				</button>
				<button
					onClick={() => handleButtonClick('/')}
					style={{
						padding: '10px',
						borderRadius: '4px',
						backgroundColor: '#555',
						color: '#fff',
					}}
				>
					/
				</button>
			</div>
		</div>
	)
}

export default Calculator
