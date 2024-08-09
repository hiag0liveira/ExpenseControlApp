import { FC } from 'react'

const Notes: FC = () => {
	return (
		<div
			style={{
				padding: '20px',
				maxWidth: '1100px',
				backgroundColor: 'rgb(30, 41, 59)',
				borderRadius: '8px',
				color: '#fff',
			}}
		>
			<h2>Notes</h2>
			<textarea
				rows={10}
				style={{
					width: '100%',
					padding: '10px',
					borderRadius: '4px',
					border: '1px solid #ccc',
					backgroundColor: '#333',
					color: '#fff',
				}}
			/>
		</div>
	)
}

export default Notes
