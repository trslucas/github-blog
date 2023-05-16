import styled from 'styled-components'

export const PublicationCardContainer = styled.div`
  border-radius: 8px;
  background: ${({ theme }) => theme.colors['base-post']};
  width: 25rem;
  height: 16.25rem;
  padding: 1.5rem;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  h2 {
    flex: 1;
  }
`
