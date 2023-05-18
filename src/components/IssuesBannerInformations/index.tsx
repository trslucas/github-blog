import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'
import {
  IssueInfosContainer,
  IssuesBannerInformationsContainer,
  IssuesInformations,
  IssuesLinkContainer,
  SocialUserInformations,
} from './styles'
import Link from 'next/link'
import { TextTitle } from '../HomeBannerInformations/styles'
import { InfoWithIcon } from '../InfoWithIcon'

interface IssueBannerInformationsProps {
  avatar_url: string
  name?: string
  login?: string
  bio?: string
  issueTitle?: string
  size: 'lg' | 'md'
  company?: string
  followers?: number
  html_url: string
  timePassed?: number | string
  comments?: number | string
}

export function IssueBannerInformations({
  html_url,
  size,
  comments,
  issueTitle,
  login,
  timePassed,
}: IssueBannerInformationsProps) {
  return (
    <IssuesBannerInformationsContainer size="md">
      <IssueInfosContainer>
        <IssuesLinkContainer>
          <Link href={'/'}>
            <CaretLeft size={18} />
            VOLTAR
          </Link>
          <Link href={html_url} target="blank">
            VER NO GITHUB
            <ArrowSquareOut size={18} weight="fill" />
          </Link>
        </IssuesLinkContainer>
        <IssuesInformations>
          <TextTitle>{issueTitle} </TextTitle>

          <SocialUserInformations>
            <InfoWithIcon
              icon={<GithubLogo size={22} weight="fill" />}
              text={login}
            />
            <InfoWithIcon
              icon={<CalendarBlank size={22} weight="fill" />}
              text={timePassed}
            />
            <InfoWithIcon
              icon={<ChatCircle size={22} weight="fill" />}
              text={comments}
            />
          </SocialUserInformations>
        </IssuesInformations>
      </IssueInfosContainer>
    </IssuesBannerInformationsContainer>
  )
}
