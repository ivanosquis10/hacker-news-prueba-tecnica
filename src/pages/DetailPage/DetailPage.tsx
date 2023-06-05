import { useEffect } from 'react'
import useSWR from 'swr'
import { Link } from 'wouter'

import { ListOfComments } from '../../components/ListOfComments/ListOfComments'
import { getItemInfo } from '../../services/hacker-news'
import { container, buttonLoad } from './DetailPage.css'

export default function DetailsPage (props: {
  params: {
    id: string
  }
}) {
  const { params: { id } } = props
  const { data, isLoading, error } = useSWR(`/story/${id}`, () => getItemInfo(+id))
  const { kids, title }: { kids: number[], title: string } = data

  const commentsIds = kids?.slice(0, 10) ?? []

  useEffect(() => {
    document.title = `Hacker News - ${title}`
  }, [title])

  return (
    <section className={container}>
      <h2>Details</h2>
      {error !== undefined && (
        <>
          <p>No comments here</p>
          <Link className={buttonLoad} href='/'>Home!</Link>
        </>
      )}
      {!isLoading && commentsIds.length === 0 && <p>No comments here</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && commentsIds.length > 0 && <ListOfComments ids={commentsIds} />}

    </section>
  )
}
