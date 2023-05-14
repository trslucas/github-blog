import { BannerWithInformations } from '@/components/BannerWithInformations'
import { HomeContainer } from './styles'
import { Publications } from './components/publications'

export default function Home() {
  return (
    <HomeContainer className="container">
      <BannerWithInformations size="lg" />
      <Publications />
    </HomeContainer>
  )
}
