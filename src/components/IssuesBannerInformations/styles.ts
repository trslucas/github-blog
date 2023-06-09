import styled from 'styled-components'
import {
  HomeBannerInformationsContainer,
  LinkContainer,
} from '../HomeBannerInformations/styles'

export const IssuesBannerInformationsContainer = styled(
  HomeBannerInformationsContainer,
)`
  @media (max-width: 53rem) {
    width: 28rem;
    h2 {
      margin-top: 1rem;
    }
  }
`

export const IssueInfosContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 1.5rem;
  flex-direction: column;

  @media (max-width: 53rem) {
    margin-bottom: 3rem;
  }
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

export const SocialUserInformations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 53rem) {
    margin-bottom: 0.75rem;
    margin-top: 1.5rem;
  }
`
