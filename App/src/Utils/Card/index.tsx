import React from 'react'
import './index.scss'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	header?: React.ReactNode
	children: React.ReactNode
}

const Card = ({ header, children, ...divAttr }: CardProps) => {
	return (
		<div className="card">
			{header && <div className="card-header">{header}</div>}
			<div {...divAttr}>{children}</div>
		</div>
	)
}

export default Card
