import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import Dashboard from './Views/Dashboard'
import './index.scss'

const App = () => {
	const redirect = useNavigate()

	return (
		<div className="background">
			<div id="app">
				<Navigation />
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/projects" element={<div>projects</div>} />
					<Route path="/journal" element={<div>journal</div>} />
					<Route path="/files" element={<div>files</div>} />
					<Route path="/settings" element={<div>settings</div>} />
					<Route path="/*" element={<Navigate to={'/dashboard'} />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
