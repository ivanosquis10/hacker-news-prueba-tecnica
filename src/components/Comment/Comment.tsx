import useSWR from 'swr'

import { ListOfComments } from '../ListOfComments/ListOfComments'
import { CommentLoader } from '../skeleton/CommentLoader'

import { getTimeRelative } from '../../helpers/getTimeRelative'
import { getItemInfo } from '../../services/hacker-news'

export const Comment = (props: {
  id: number
}) => {
  const { id } = props
  const { data, isLoading } = useSWR(`/comment/${id}`, () => getItemInfo(id))

  if (isLoading) {
    return <CommentLoader />
  }

  const { by, kids, text, time } = data

  const relativeTime = getTimeRelative(time)
  return (
    <>
      <details style={{ padding: '0 5px' }} open>
        <summary style={{ borderBottom: '1px solid #f4f4f5' }}>
          <small>{by}</small>
          <span> | </span>
          <span>{relativeTime}</span>
        </summary>
        <p>{text}</p>
      </details>

      {
        // aqui verifica si hay mas hijos dentro de los comentarios, es decir, subcomentarios de los comentarios, un poco confuso pero si, es un componente recursivo
      kids?.length > 0 && <ListOfComments ids={kids.slice(0, 10)} />
    }
    </>
  )
}
