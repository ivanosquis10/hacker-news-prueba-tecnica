import { useEffect } from 'react'
import useSWRInfinite from 'swr/infinite'

import { Story } from '../../components/story/Story'
import { getTopStories } from '../../services/hacker-news'
import { container, heading, containerStories, buttonLoad } from './TopStoriesPage.css'

export default function TopStoriesPage () {
  // const { data } = useSWR('stories', () => getTopStories(1, 10)) // forma sin infinite scroll

  // Implementacion del infinity scroll
  const { data, setSize, size } = useSWRInfinite(
    (index) => `stories/${index + 1}`, // la key que se usa para cachear los resultados
    (key) => {
      // console.log(key) // "stories/1"
      const [, page] = key.split('/') // aqui el resultado seria "stories/1" (por ejemplo)
      // console.log(page) // 1 o 2 o 3 -> seria el numero de la pagina en cuestion
      return getTopStories(Number(page), 10)
    }
  )

  // necesitamos aplanar el los arrays con la informacion
  const stories = data?.flat()

  // // aplicando intersection observer
  // const chivatoEl = useRef(null)
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting && !isLoading) {
  //       setSize(prevSize => prevSize + 1)
  //     }
  //   })
  //   if (chivatoEl.current == null) return
  //   observer.observe(chivatoEl.current)
  //   return () => {
  //     observer.disconnect()
  //   }
  // }, [isLoading, setSize])

  useEffect(() => {
    document.title = 'HackerNews - Prueba TypeScript Frontend'
  }, [])

  return (
    <div className={container}>
      <h2 className={heading}>Top Stories</h2>

      <ul className={containerStories}>
        {stories?.map((id: number, index: number) => (
          <li key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>

      <button className={buttonLoad} onClick={() => { setSize(size + 1) }}>
        load more
      </button>
    </div>
  )
}
