import DatePicker from '../../Utils/DatePicker'
import './index.scss'

const Dashboard = () => {
	return (
		<div className="dashboard">
			<div className="dashboard-calendar">
				<DatePicker />
			</div>
		</div>
	)
}

export default Dashboard
