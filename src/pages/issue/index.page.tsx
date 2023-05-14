import { BannerWithInformations } from '@/components/BannerWithInformations'
import { IssueContainer } from './styles'

export default function Issue() {
  return (
    <IssueContainer className="container">
      <BannerWithInformations size="md" avatar_url="" html_url="" />
    </IssueContainer>
  )
}
