import Card from '../../Utils/Card'
import './index.scss'

const projects = [
	{
		name: 'AMVMaker',
		description:
			'Application that automates the creation of AMVs (Anime Music Videos)',
		createdAt: new Date(2023, 3, 14),
		TaskDone: 51,
		TaskLeft: 7,
		tasks: [
			{
				name: 'Task 1',
				description: 'This is a task'
			},
			{
				name: 'Task 2',
				description: 'This is a task'
			}
		]
	},
	{
		name: 'DreamDriver',
		description: 'Application that helps you achieve your dreams',
		createdAt: new Date(2023, 9, 26),
		TaskDone: 2,
		TaskLeft: 302,
		tasks: [
			{
				name: 'Task 1',
				description: 'This is a task'
			},
			{
				name: 'Task 2',
				description: 'This is a task'
			}
		]
	}
]
const Projects = () => {
	return (
		<div className="projects">
			{projects.map((project, index) => {
				return (
					<Card
						className="project"
						key={index}
						header={
							<div className="project-header">
								<span className="project-name">{project.name}</span>
								<span className="project-date">
									{'Créer le ' +
										project.createdAt.toLocaleString(undefined, {
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										}) +
										' (' +
										(
											(new Date().getTime() - project.createdAt.getTime()) /
											(24 * 60 * 60 * 1000)
										).toFixed(0) +
										')'}
								</span>
							</div>
						}
					>
						<span>{project.description}</span>
						<div className="tasks">
							{project.tasks.map((task, index) => {
								return (
									<div className="task" key={index}>
										<p>{task.name}</p>
										<span>{task.description}</span>
									</div>
								)
							})}
						</div>
					</Card>
				)
			})}
		</div>
	)
}

export default Projects
