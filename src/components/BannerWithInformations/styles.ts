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
  padding: 0 2.5rem;
  box-shadow: 1px 1px 8px #000;

  > div {
    display: flex;

    align-items: start;
    justify-content: center;
    width: 100%;
    gap: 1.5rem;
  }

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
export const AvatarUserContainer = styled.div`
  img {
    background-color: blue;
  }
`

export const UserPriorityInfos = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  gap: 1rem;

  justify-content: space-between;
`

export const UserInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.5rem;

  strong {
    font-size: 5rem;
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`
