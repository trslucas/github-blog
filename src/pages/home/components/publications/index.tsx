import SearchComponentForm from '../searchComponentForm'
import {
  PublicationsContainer,
  PublicationsFormContainer,
  PublicationsInfos,
} from './styles'

export function Publications() {
  return (
    <PublicationsContainer>
      <PublicationsFormContainer>
        <PublicationsInfos>
          <span>Publicações</span>
          <span>6 publicações</span>
        </PublicationsInfos>
        <SearchComponentForm />
      </PublicationsFormContainer>
    </PublicationsContainer>
  )
}
