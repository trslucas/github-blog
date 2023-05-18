import { Title } from '../publications/styles'
import { Header, PublicationCardContainer } from './styles'

interface PublicationCardProps {
  body?: string
  comments?: number
  comments_url?: string
  html_url?: string
  title?: string
  updated_at: Date
  number?: number
}

export function PublicationCard({
  body,
  title,
  number,
  updated_at,
}: PublicationCardProps) {
  return (
    <PublicationCardContainer>
      <Header>
        <Title>{title}</Title>
        <span>{updated_at}</span>
      </Header>
      <p>{body}</p>
    </PublicationCardContainer>
  )
}
