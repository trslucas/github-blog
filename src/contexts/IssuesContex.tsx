import { Issue, SearchData } from '@/pages/home/components/searchComponentForm'
import axios from 'axios'
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface IssuesContextType {
  issues: Issue[]
  handleConfirmData: (data: SearchData) => Promise<void>
}

interface IssuesContextProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const getIssues = useCallback(async (query: string = '') => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=${query}%20repo:trslucas/fundamentos-next`,
      )

      const issuesData = response?.data.items

      setIssues(issuesData)
    } finally {
      console.log('fim')
    }
  }, [])

  useEffect(() => {
    getIssues()
  }, [getIssues])

  async function handleConfirmData(data: SearchData) {
    getIssues(data?.query)
  }
  return (
    <IssuesContext.Provider
      value={{
        issues,
        handleConfirmData,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
