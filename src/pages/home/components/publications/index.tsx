import SearchComponentForm from '../searchComponentForm'
import {
  PublicationsContainer,
  PublicationsFormContainer,
  PublicationsInfos,
  PublicationsNumber,
  Title,
} from './styles'

export function Publications() {
  return (
    <PublicationsContainer>
      <PublicationsFormContainer>
        <PublicationsInfos>
          <Title>Publicações</Title>
          <PublicationsNumber>6 publicações</PublicationsNumber>
        </PublicationsInfos>
        <SearchComponentForm />
      </PublicationsFormContainer>
    </PublicationsContainer>
  )
}
