import styled from 'styled-components'

export interface HomeBannerInformationsProps {
  size: 'lg' | 'md'
}

export const HomeBannerInformationsContainer = styled.div<HomeBannerInformationsProps>`
  width: 52.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 212px;
  background: ${({ theme }) => theme.colors['base-profile']};
  margin-top: -4.25rem;
  border-radius: 6px;
  padding: 0 2.5rem;
  box-shadow: 1px 1px 8px #000;

  @media (max-width: 53rem) {
    width: 28rem;

    h2 {
      font-size: 1.3rem;
      margin-top: 3rem;
    }
    p {
      font-size: 0.85rem;
      width: 80%;
    }
  }
`
export const AvatarUserContainer = styled.div`
  img {
    border-radius: 6px;
  }

  @media (max-width: 53rem) {
    img {
      width: 80px;
      height: 80px;
    }
    margin-top: 3rem;
    margin-left: 2rem;
  }
`

export const UserContainer = styled.div`
  display: flex;

  align-items: start;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;

  @media (max-width: 53rem) {
    padding-right: 2rem;
  }
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

  @media (max-width: 53rem) {
    h2 {
      font-size: 1.3rem;
    }
  }
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

  @media (max-width: 53rem) {
    margin-bottom: -1rem;
  }
`
export const SocialUserInformations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 53rem) {
    padding-bottom: 1.5rem;
    span {
      font-size: 0.65rem;
    }

    margin-bottom: 2rem;

    margin-top: -2rem;
  }
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

  @media (max-width: 53rem) {
    margin-top: 3rem;
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
