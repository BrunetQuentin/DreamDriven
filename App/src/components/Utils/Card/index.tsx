import React from 'react'
import './index.scss'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	header?: React.ReactNode
	children: React.ReactNode
}

const Card = ({ header, children, ...divAttr }: CardProps) => {
	return (
		<div {...divAttr} className={'card ' + (divAttr.className ?? '')}>
			{header && <div className="card-header">{header}</div>}
			<div className="card-body">{children}</div>
		</div>
	)
}

export default Card
