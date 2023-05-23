import { IssuesContext } from '@/contexts/IssuesContex'
import { useContext } from 'react'

export default function UseIssue() {
  const context = useContext(IssuesContext)
  return context
}
