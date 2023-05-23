import UseIssue from '@/hooks/useIssues'
import SearchComponentForm from '../searchComponentForm'
import {
  PublicationsContainer,
  PublicationsFormContainer,
  PublicationsInfos,
  PublicationsNumber,
  Title,
} from './styles'

export function Publications() {
  const { issues } = UseIssue()

  return (
    <PublicationsContainer>
      <PublicationsFormContainer>
        <PublicationsInfos>
          <Title>Publicações</Title>
          <PublicationsNumber>{issues.length} publicações</PublicationsNumber>
        </PublicationsInfos>
        <SearchComponentForm />
      </PublicationsFormContainer>
    </PublicationsContainer>
  )
}
