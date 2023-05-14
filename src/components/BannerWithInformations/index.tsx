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
  userName?: string
  userDescription?: string
  issueTitle?: string
  size: 'lg' | 'md'
}

export function BannerWithInformations({
  size,
  userName,
  userDescription,
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
              <div>{(userName = 'trslucas')} </div>
              <Link href={''}>github</Link>
            </UserPriorityInfos>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
            <div className="social">
              <p>githubUser</p>
              <p>work</p>
              <p>followers</p>
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
              <div>{(userName = 'trslucas')} </div>
              <Link href={''}>github</Link>
            </UserPriorityInfos>
          </UserInformationsContainer>
        </div>
      )}
    </BannerWithInformationsContainer>
  )
}
