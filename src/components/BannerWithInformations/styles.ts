import styled, { css } from 'styled-components'

export interface BannerWithInformationsContainerProps {
  size: 'lg' | 'md'
}

export const BannerWithInformationsContainer = styled.div<BannerWithInformationsContainerProps>`
  width: 864px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  margin-top: -4.25rem;
  border-radius: 6px;

  ${({ size }) =>
    size === 'lg' &&
    css`
      height: 212px;
    `};

  ${({ size }) =>
    size === 'md' &&
    css`
      height: 168px;
    `}
`
export const AvatarUserContainer = styled.div``

export const UserPriorityInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const UserInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 5rem;
  }
`
