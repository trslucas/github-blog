import Link from 'next/link'
import { PublicationCard } from '../publicationCard'
import {
  PublicationsCardsContainer,
  SearchPublicationFormContainer,
  SearchPublicationInput,
} from './styles'

import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

const searchFormSchema = z.object({
  query: z.string(),
})

export type SearchData = z.infer<typeof searchFormSchema>
type SearchFormData = SearchData

export default function SearchComponentForm() {
  const searchForm = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  const { handleSubmit, register, reset } = searchForm

  function handleConfirmData(data: SearchData) {
    console.log(data)
    reset()
  }
  return (
    <FormProvider {...searchForm}>
      <SearchPublicationFormContainer
        onSubmit={handleSubmit(handleConfirmData)}
      >
        <SearchPublicationInput
          type="text"
          placeholder="Buscar Conteúdo"
          {...register('query')}
        />
        <PublicationsCardsContainer>
          <Link href={'/issue'}>
            <PublicationCard />
          </Link>
          <Link href={'/issue'}>
            <PublicationCard />
          </Link>
          <Link href={'/issue'}>
            <PublicationCard />
          </Link>
          <Link href={'/issue'}>
            <PublicationCard />
          </Link>
          <Link href={'/issue'}>
            <PublicationCard />
          </Link>
          <Link href={'/issue'}>
            <PublicationCard />
          </Link>
        </PublicationsCardsContainer>
      </SearchPublicationFormContainer>
    </FormProvider>
  )
}
