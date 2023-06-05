import { FC } from 'react'
import { Comment } from '../Comment/Comment'

interface Props {
  ids: number[]
}

export const ListOfComments: FC<Props> = ({ ids }) => {
  return (
    <div style={{ backgroundColor: '#171717', borderRadius: '4px' }}>
      <ul style={{ listStyle: 'none' }}>
        {
        ids?.map(id => (
          <li key={id}>
            <Comment id={id} />
          </li>
        ))
        }
      </ul>
    </div>
  )
}
