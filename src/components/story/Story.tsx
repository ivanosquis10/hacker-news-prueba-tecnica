import { FC } from 'react'
import useSWR from 'swr'
import { Link } from 'wouter'
import { getItemInfo } from '../../services/hacker-news'
import { storyArticle, storyHeader, storyLink, storyLinkDomain, storyFooter, smallLinks } from './Story.css'
import { SkeletonLoader } from '../skeleton/SkeletonLoader'
import { getTimeRelative } from '../../helpers/getTimeRelative'

interface Props {
  id: number
  index: number
}

export const Story: FC<Props> = ({ id, index }) => {
  const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(id))

  if (isLoading) {
    return <SkeletonLoader />
  }

  const { by, kids, score, url, title, time } = data

  let domain = ''
  try {
    domain = new URL(url).hostname.replace('www.', '')
  } catch {}

  const relativeTime = getTimeRelative(time)

  return (
    <article className={storyArticle}>
      <header className={storyHeader}>
        <small>{index + 1}. </small>
        <Link className={storyLink} href={`/article/${id}`}>
          {title}
        </Link>
        <a className={storyLinkDomain} href={url} target='_blank' rel='noopener noreferrer'>
          ({domain})
        </a>
      </header>
      <footer className={storyFooter}>
        <span>{score} points</span>
        <Link className={smallLinks} href={`/article/${id}`}>
          by {by} |
        </Link>

        <p className={smallLinks}>
          {relativeTime} |
        </p>

        <Link className={smallLinks} href={`/article/${id}`}>
          {kids?.length ?? 0} comments
        </Link>
      </footer>
    </article>
  )
}
