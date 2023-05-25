import styled from 'styled-components'

export const InfoWithIconContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  @media (max-width: 53rem) {
    span {
      font-size: 0.85rem;
    }
  }
`
