import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import Dashboard from './Views/Dashboard'
import Projects from './Views/Projects'
import './index.scss'

const App = () => {
	const { t } = useTranslation()

	const { pathname } = useLocation()

	const firstPath = useMemo(() => {
		return pathname.split('/')[1]
	}, [pathname])

	return (
		<div id="app">
			<Navigation />
			<div className="main-section">
				<span className="section-name">{t('Section.' + firstPath)}</span>
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/projects" element={<Projects />} />
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
