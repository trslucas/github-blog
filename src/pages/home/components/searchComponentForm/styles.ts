import styled from 'styled-components'

export const SearchPublicationFormContainer = styled.form`
  width: 100%;
`
export const SearchPublicationInput = styled.input`
  margin-top: 1rem;
  width: 100%;
  height: 3.125rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  border-radius: 6px;
  padding: 1rem;
  color: ${({ theme }) => theme.colors['base-text']};
`

export const PublicationsCardsContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  width: 100%;
  margin-left: 0.5rem;
`

export const PublicationCard = styled.div`
  border-radius: 8px;
  background: ${({ theme }) => theme.colors['base-post']};
  width: 25rem;
  height: 16.25rem;
`
