import {
	faBell,
	faBook,
	faCaretDown,
	faCaretRight,
	faChalkboardUser,
	faDiagramProject,
	faFolder,
	faGears,
	type IconDefinition
} from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons/faIdCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import './index.scss'

const Navigation = () => {
	const { pathname } = useLocation()

	const firstPath = useMemo(() => {
		return pathname.split('/')[1]
	}, [pathname])

	const navigation = useMemo<
		Array<{
			name: string
			icon: IconDefinition
		}>
	>(() => {
		return [
			{
				name: 'dashboard',
				icon: faChalkboardUser
			},
			{
				name: 'projects',
				icon: faDiagramProject
			},
			{
				name: 'journal',
				icon: faBook
			},
			{
				name: 'files',
				icon: faFolder
			},
			{
				name: 'settings',
				icon: faGears
			}
		]
	}, [])

	const { t } = useTranslation()

	return (
		<div id="navigation">
			<div className="app-name">
				<FontAwesomeIcon icon={faIdCard} />
				<h3>Dream Driven</h3>
			</div>
			<div className="profil">
				<div className="profil-image">
					<img
						src="https://avatars.githubusercontent.com/u/60052506?v=4"
						alt="profil"
					/>
				</div>
				<div className="profil-name">
					<h4>
						Yassine
						<FontAwesomeIcon icon={faCaretDown} />
					</h4>
					<p>Mon status bla bla</p>
				</div>
				<div className="notifications">
					<FontAwesomeIcon icon={faBell} />
					<p>1</p>
				</div>
			</div>
			A voir intégrer un truc sympa mais je sais pas quoi ? Peut etre un fun
			fact dans une card pour motiver les gens ?
			<div className="navigations-wrapper">
				{navigation.map((item, index) => (
					<Link
						key={index}
						to={`/${item.name}`}
						className={
							'navigation-item' + (firstPath === item.name ? ' active' : '')
						}
					>
						<FontAwesomeIcon icon={item.icon} />
						<p>{t('Section.' + item.name)}</p>
						{firstPath === item.name && (
							<FontAwesomeIcon icon={faCaretRight} className="caret-right" />
						)}
					</Link>
				))}
			</div>
		</div>
	)
}
export default Navigation
