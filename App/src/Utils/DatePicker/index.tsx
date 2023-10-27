import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMemo, useState } from 'react'
import Card from '../Card'
import './index.scss'

interface IDatePickerProps {
	onChange: (date: Date) => void
}

const DatePicker = () => {
	const [currentDate, setCurrentDate] = useState(new Date())

	const [selectedDate, setSelectedDate] = useState({
		month: currentDate.getMonth(),
		year: currentDate.getFullYear()
	})

	// get the first monday closest to the first day of the month or the first day of the month if it is a monday
	const firstDay = useMemo(() => {
		const firstDay = new Date(selectedDate.year, selectedDate.month, 1)
		const day = firstDay.getDay()
		// return Date object of the first monday
		return new Date(
			firstDay.setDate(firstDay.getDate() - day + (day === 0 ? -6 : 1))
		)
	}, [selectedDate])

	const days = useMemo(() => {
		const days = []
		for (let i = 0; i < 42; i++) {
			const day = new Date(firstDay)
			day.setDate(day.getDate() + i)
			days.push(day)
		}
		return days
	}, [firstDay])

	return (
		<Card
			header={
				<div className="calender-header">
					<FontAwesomeIcon icon={faCaretLeft} />
					<span>{selectedDate.month + ' ' + selectedDate.year}</span>
					<FontAwesomeIcon icon={faCaretRight} />
				</div>
			}
			className="calender"
		>
			{Array.from(Array(7).keys()).map((day, index) => {
				return (
					<div key={index} className="day-name">
						{day}
					</div>
				)
			})}
			{days.map((day, index) => {
				return (
					<div
						key={index}
						className={
							'day ' +
							(day.getMonth() !== selectedDate.month
								? 'not-current-month '
								: '') +
							(day.getDate() === new Date().getDate() &&
							day.getMonth() === new Date().getMonth()
								? 'today '
								: '') +
							(day.getDate() === currentDate.getDate() &&
							day.getMonth() === currentDate.getMonth()
								? 'selected'
								: '')
						}
						onClick={() => {
							setCurrentDate(day)
						}}
					>
						{day.getDate()}
					</div>
				)
			})}
		</Card>
	)
}

export default DatePicker
