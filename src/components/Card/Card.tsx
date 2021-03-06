import React, { AllHTMLAttributes } from 'react'

import styles from './Card.module.css'
import clsx from 'clsx'

export interface ICardProps extends AllHTMLAttributes<HTMLDivElement> {
  className?: string
}

const Card: React.FC<ICardProps> = ({
  children,
  className,
  ...others
}: ICardProps) => {
  return (
    <div className={clsx(styles.card, className)} {...others}>
      {children}
    </div>
  )
}

export default Card
