import { PublicationCard } from '../publicationCard'
import {
  PublicationsCardsContainer,
  SearchPublicationFormContainer,
  SearchPublicationInput,
} from './styles'

import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { useRouter } from 'next/router'
import Link from 'next/link'
import UseIssue from '@/hooks/useIssues'

const searchFormSchema = z.object({
  query: z.string(),
})

export interface Issue {
  body?: string
  comments?: number
  comments_url?: string
  html_url?: string
  title?: string
  updated_at: Date | number | string
  number: number
  user: {
    login: string
  }
}

export type SearchData = z.infer<typeof searchFormSchema>
type SearchFormData = SearchData

export default function SearchComponentForm() {
  const { issues, handleConfirmData } = UseIssue()

  const router = useRouter()

  const searchForm = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  const { handleSubmit, register } = searchForm

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
          disabled={noIssues}
        />
        <PublicationsCardsContainer>
          {issues?.map((issue) => {
            const date = issue?.updated_at
            const timePassed = Date.now() - new Date(date).getTime()
            const dayInMiliSeconds = 86400000 // 24 horas
            const timePassedInMili = Math.floor(timePassed / dayInMiliSeconds)

            return (
              <Link
                onClick={() => goToIssue(issue.number)}
                key={issue?.number}
                href={`/issues/${issue.number}`}
              >
                <PublicationCard
                  body={issue?.body}
                  title={issue?.title}
                  updated_at={
                    timePassedInMili <= 1
                      ? `Há ${timePassedInMili} dia`
                      : `Há ${timePassedInMili} dias`
                  }
                />
              </Link>
            )
          })}
        </PublicationsCardsContainer>
      </SearchPublicationFormContainer>
    </FormProvider>
  )
}
