import { HeaderContainer } from './styles'

import githubLogo from '../../../public/images/logoGit.png'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Image src={githubLogo} alt="" />
      </Link>
    </HeaderContainer>
  )
}
