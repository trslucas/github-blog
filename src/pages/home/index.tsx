import { BannerWithInformations } from '@/components/BannerWithInformations'
import { HomeContainer } from './styles'
import { Publications } from './components/publications'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface DataType {
  login: string
  name: string
  avatar_url: string
  id: string
  bio: string
  company: string
  followers: number
  html_url: string
}

export default function Home() {
  const { data } = useQuery<DataType>(['userDatas'], async () => {
    const response = await axios.get('https://api.github.com/users/trslucas')

    return response.data
  })

  const avatar_url = `${data?.avatar_url}`

  return (
    <HomeContainer className="container">
      {data && (
        <BannerWithInformations
          size="lg"
          name={data.name}
          login={data.login}
          avatar_url={avatar_url}
          bio={data.bio}
          company={data.company}
          followers={data.followers}
          html_url={data.html_url}
        />
      )}
      <Publications />
    </HomeContainer>
  )
}
