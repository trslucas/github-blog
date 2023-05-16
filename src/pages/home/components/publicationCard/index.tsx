import { Title } from '../publications/styles'
import { Header, PublicationCardContainer } from './styles'

export function PublicationCard() {
  return (
    <PublicationCardContainer>
      <Header>
        <Title>Javascript data types and data structure</Title>
        <span>Há 1 dia</span>
      </Header>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </PublicationCardContainer>
  )
}
