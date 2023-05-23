import UseIssue from '@/hooks/useIssues'

export function formatDate(issueNumber: number) {
  const { issues } = UseIssue()

  const issue = issues.find((issue) => issue.number === issueNumber)

  if (issue) {
    const date = issue?.updated_at
    const timePassed = Date.now() - new Date(date).getTime()
    const dayInMiliSeconds = 86400000 // 24 horas
    const timePassedInMili = Math.floor(timePassed / dayInMiliSeconds)

    return timePassedInMili
  }
}
