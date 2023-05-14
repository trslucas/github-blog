import { ReactNode } from 'react'
import { InfoWithIconContainer } from './styles'

interface InfoWithIconProps {
  icon: string | ReactNode
  text: string | ReactNode
}

export function InfoWithIcon({ icon, text }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      {icon}
      {typeof text === 'string' ? <span>{text}</span> : text}
    </InfoWithIconContainer>
  )
}
