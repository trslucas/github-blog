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

  ${({ size }) =>
    size === 'lg' &&
    css`
      height: 212px;
    `};

  ${({ size }) =>
    size === 'md' &&
    css`
      height: 168px;
      align-items: center;
      justify-content: start;

      h2 {
        font-size: 1.7rem;
      }
    `}
`
export const AvatarUserContainer = styled.div`
  img {
    border-radius: 6px;
  }
`

export const UserContainer = styled.div`
  display: flex;

  align-items: start;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
`

export const UserPriorityInfos = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  gap: 1rem;

  justify-content: space-between;
`

export const TextTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors['base-title']};
`
export const BioInfos = styled.p`
  color: ${({ theme }) => theme.colors['base-text']};
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
`
export const SocialUserInformations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`

export const LinkContainer = styled.div`
  a {
    font-size: 0.85rem;
    display: flex;
    gap: 5px;
    font-weight: bold;
    justify-content: center;

    align-items: center;

    color: ${({ theme }) => theme.colors['brand-blue']};
  }
`

export const IssueInfosContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 1.5rem;
  flex-direction: column;
`

export const IssuesLinkContainer = styled(LinkContainer)`
  display: flex;
  justify-content: space-between;
`

export const IssuesInformations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
`
