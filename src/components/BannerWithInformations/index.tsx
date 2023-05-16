import Link from 'next/link'
import {
  AvatarUserContainer,
  BannerWithInformationsContainer,
  BioInfos,
  IssueInfosContainer,
  IssuesInformations,
  IssuesLinkContainer,
  LinkContainer,
  SocialUserInformations,
  TextTitle,
  UserContainer,
  UserInformationsContainer,
  UserPriorityInfos,
} from './styles'
import Image from 'next/image'

import { InfoWithIcon } from '../InfoWithIcon'

import {
  GithubLogo,
  Users,
  Buildings,
  ArrowSquareOut,
  CaretLeft,
  CalendarBlank,
  ChatCircle,
} from '@phosphor-icons/react'

interface BannerWithInformationsProps {
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

export function BannerWithInformations({
  size,
  login,
  bio,
  name,
  company,
  followers,
  html_url,
  comments,
  issueTitle,
  timePassed,
  // eslint-disable-next-line camelcase
  avatar_url,
}: BannerWithInformationsProps) {
  return (
    <BannerWithInformationsContainer size={size}>
      {size === 'lg' ? (
        <UserContainer>
          <AvatarUserContainer>
            <Image src={avatar_url} width={148} height={148} alt="" />
          </AvatarUserContainer>

          <UserInformationsContainer>
            <UserPriorityInfos>
              <TextTitle>{name} </TextTitle>
              <LinkContainer>
                <Link href={html_url} target="blank">
                  GITHUB
                  <ArrowSquareOut size={18} weight="fill" />
                </Link>
              </LinkContainer>
            </UserPriorityInfos>
            <BioInfos>{bio}</BioInfos>
            <SocialUserInformations>
              <InfoWithIcon
                icon={<GithubLogo size={22} weight="fill" />}
                text={login}
              />
              <InfoWithIcon
                icon={<Buildings size={22} weight="fill" />}
                text={company}
              />
              <InfoWithIcon
                icon={<Users size={22} weight="fill" />}
                text={`${followers} seguidores`}
              />
            </SocialUserInformations>
          </UserInformationsContainer>
        </UserContainer>
      ) : (
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
      )}
    </BannerWithInformationsContainer>
  )
}
