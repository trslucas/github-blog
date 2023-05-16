import { PublicationCard } from '../publicationCard'
import {
  PublicationsCardsContainer,
  SearchPublicationFormContainer,
  SearchPublicationInput,
} from './styles'

export default function SearchComponentForm() {
  return (
    <SearchPublicationFormContainer>
      <SearchPublicationInput type="text" placeholder="Buscar Conteúdo" />
      <PublicationsCardsContainer>
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
      </PublicationsCardsContainer>
    </SearchPublicationFormContainer>
  )
}
