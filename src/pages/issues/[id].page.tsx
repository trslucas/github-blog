import { useQuery } from '@tanstack/react-query'
import { IssueContainer, IssueDescription } from './styles'
import { IssueBannerInformations } from '@/components/IssuesBannerInformations'
import axios from 'axios'
import { useRouter } from 'next/router'

interface IssueProps {
  body?: string
  comments?: number
  comments_url?: string
  html_url: string
  title?: string
  updated_at: Date
  number: number
  user: {
    login: string
  }
  id: number
}

export default function Issue() {
  const router = useRouter()
  const { id } = router.query
  const { data } = useQuery<IssueProps>(['issueData'], async () => {
    const response = await axios.get(
      `https://api.github.com/repos/trslucas/fundamentos-next/issues/${id}`,
    )

    return response?.data
  })
  const date = String(data?.updated_at)
  const timePassed = Date.now() - new Date(date).getTime()
  const dayInMiliSeconds = 86400000 // 24 horas
  const timePassedInMili = Math.floor(timePassed / dayInMiliSeconds)
  return (
    <IssueContainer className="container">
      {data && (
        <IssueBannerInformations
          size="md"
          avatar_url=""
          html_url={`https://github.com/${data?.user?.login}/fundamentos-next/issues/${data?.number}`}
          login={data?.user?.login}
          comments={`${data?.comments} comentários`}
          issueTitle={data?.title}
          timePassed={
            timePassedInMili <= 1
              ? `Há ${timePassedInMili} dia`
              : `Há ${timePassedInMili} dias`
          }
        />
      )}

      <IssueDescription>
        <p>{data?.body}</p>
      </IssueDescription>
    </IssueContainer>
  )
}
