import { TextTitle } from '@/components/BannerWithInformations/styles'
import styled from 'styled-components'

export const PublicationsContainer = styled.section`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`

export const PublicationsFormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const PublicationsInfos = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled(TextTitle)`
  font-size: 1.2rem;
`

export const PublicationsNumber = styled.span`
  color: ${({ theme }) => theme.colors['base-span']};
`
