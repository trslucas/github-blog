import { BannerWithInformations } from '@/components/BannerWithInformations'
import { IssueContainer, IssueDescription } from './styles'

interface IssueProps {
  issueTitle: string
  passedTime: string
  html_url: string
  description: string
  comments: number | string
  login: string
}

export default function Issue({
  comments,
  description,
  html_url,
  issueTitle,
  login,
  passedTime,
}: IssueProps) {
  comments = '5 comentários'
  return (
    <IssueContainer className="container">
      <BannerWithInformations
        size="md"
        avatar_url=""
        html_url={'VER NO GITHUB'}
        login={'trslucas'}
        comments={comments}
        issueTitle="JavaScript data types and data structures"
        timePassed={'Há 1 dia'}
      />
      <IssueDescription>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
        <br />
        <p>
          <span>Dynamic typing </span> <br /> JavaScript is a loosely typed and
          dynamic language. Variables in JavaScript are not directly associated
          with any particular value type, and any variable can be assigned (and
          re-assigned) values of all types
        </p>
      </IssueDescription>
    </IssueContainer>
  )
}
