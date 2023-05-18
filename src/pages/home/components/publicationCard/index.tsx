import { Title } from '../publications/styles'
import { Header, PublicationCardContainer } from './styles'

interface PublicationCardProps {
  body?: string
  title?: string
  updated_at: Date
}

export function PublicationCard({
  body,
  title,
  updated_at,
}: PublicationCardProps) {
  return (
    <PublicationCardContainer>
      <Header>
        <Title>{title}</Title>
        <span>{String(updated_at)}</span>
      </Header>
      <p>{body}</p>
    </PublicationCardContainer>
  )
}
