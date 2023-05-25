import styled from 'styled-components'

export const PublicationCardContainer = styled.div`
  border-radius: 8px;
  background: ${({ theme }) => theme.colors['base-post']};
  width: 25rem;
  height: 16.25rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors['base-post']};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors['base-label']};
  }

  @media (max-width: 53rem) {
    width: 24.45rem;
    height: 16.25rem;
  }
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
