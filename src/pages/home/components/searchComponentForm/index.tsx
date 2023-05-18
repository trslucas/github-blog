import { PublicationCard } from '../publicationCard'
import {
  PublicationsCardsContainer,
  SearchPublicationFormContainer,
  SearchPublicationInput,
} from './styles'

import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import axios from 'axios'

import { useCallback, useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

const searchFormSchema = z.object({
  query: z.string(),
})

interface Issue {
  body?: string
  comments?: number
  comments_url?: string
  html_url?: string
  title?: string
  updated_at: Date
  number: number
  user: {
    login: string
  }
}

export type SearchData = z.infer<typeof searchFormSchema>
type SearchFormData = SearchData

export default function SearchComponentForm() {
  const router = useRouter()
  const [issues, setIssues] = useState<Issue[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const searchForm = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  const { handleSubmit, register } = searchForm

  const getIssues = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await axios.get(
        `https://api.github.com/search/issues?q=${query}%20repo:trslucas/fundamentos-next`,
      )

      const issuesData = response?.data.items

      setIssues(issuesData)
    } finally {
      setIsLoading(false)
    }
  }, [])
  useEffect(() => {
    getIssues()
  }, [getIssues])

  async function handleConfirmData(data: SearchData) {
    getIssues(data?.query)
  }

  async function goToIssue(id: number) {
    router.push(`/issues/${id}`)
  }
  const noIssues = issues?.length <= 0

  return (
    <FormProvider {...searchForm}>
      <SearchPublicationFormContainer
        onSubmit={handleSubmit(handleConfirmData)}
      >
        <SearchPublicationInput
          type="text"
          placeholder="Buscar Conteúdo"
          {...register('query')}
          disabled={noIssues || isLoading}
        />
        <PublicationsCardsContainer>
          {issues?.map((issue) => {
            return (
              <Link
                onClick={() => goToIssue(issue.number)}
                key={issue?.number}
                href={`/issues/${issue.number}`}
              >
                <PublicationCard
                  body={issue?.body}
                  title={issue?.title}
                  updated_at={issue?.updated_at}
                />
              </Link>
            )
          })}
        </PublicationsCardsContainer>
      </SearchPublicationFormContainer>
    </FormProvider>
  )
}
