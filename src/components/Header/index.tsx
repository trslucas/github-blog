import { HeaderContainer } from './styles'

import githubLogo from '../../../public/images/logoGit.png'
import Image from 'next/image'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={githubLogo} alt="" />
    </HeaderContainer>
  )
}
