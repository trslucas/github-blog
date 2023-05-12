import Link from 'next/link'
import {
  AvatarUserContainer,
  BannerWithInformationsContainer,
  UserInformationsContainer,
  UserPriorityInfos,
} from './styles'

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
          <AvatarUserContainer></AvatarUserContainer>

          <UserInformationsContainer>
            <UserPriorityInfos>
              {userName} <Link href={''}>github</Link>
            </UserPriorityInfos>
          </UserInformationsContainer>
        </div>
      ) : (
        ''
      )}
    </BannerWithInformationsContainer>
  )
}
