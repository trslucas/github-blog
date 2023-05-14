import Link from 'next/link'
import {
  AvatarUserContainer,
  BannerWithInformationsContainer,
  UserInformationsContainer,
  UserPriorityInfos,
} from './styles'
import Image from 'next/image'

import imageUser from '../../../public/images/githubprofile.png'

interface BannerWithInformationsProps {
  avatarUrl?: string
  name?: string
  login?: string
  bio?: string
  issueTitle?: string
  size: 'lg' | 'md'
  company?: string
  followers?: number
  html_url: string
}

export function BannerWithInformations({
  size,
  login,
  bio,
  name,
  company,
  followers,
  html_url,
  // eslint-disable-next-line camelcase
  avatarUrl,
}: BannerWithInformationsProps) {
  return (
    <BannerWithInformationsContainer size={size}>
      {size === 'lg' ? (
        <div>
          <AvatarUserContainer>
            <Image src={imageUser} width={148} height={148} alt="" />
          </AvatarUserContainer>

          <UserInformationsContainer>
            <UserPriorityInfos>
              <h2>{name} </h2>
              <Link href={html_url} target="blank">
                github
              </Link>
            </UserPriorityInfos>
            <p>{bio}</p>
            <div className="social">
              <p>{login}</p>
              <p>{company}</p>
              <p>{followers}</p>
            </div>
          </UserInformationsContainer>
        </div>
      ) : (
        <div>
          <AvatarUserContainer>
            <Image src={imageUser} width={148} height={148} alt="" />
          </AvatarUserContainer>

          <UserInformationsContainer>
            <UserPriorityInfos>
              <Link href={html_url}>{html_url}</Link>
            </UserPriorityInfos>
          </UserInformationsContainer>
        </div>
      )}
    </BannerWithInformationsContainer>
  )
}
