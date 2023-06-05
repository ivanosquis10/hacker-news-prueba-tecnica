
export const getTopStories = async (page: number, limit: number) => {
  const resp = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  const data = await resp.json()

  // Paginacion a mano, nuestra paginación va a empezar en 1
  /*
      -> esta logica dice, ejemplo:
      1 (page) - 1 = 0 * 5 (limit) => 0 -> seran nuestras cinco primeras respuestas
      2 (page) - 1 = 1 * 5 (limit) => 5 -> seran las siguiente 5
      3 (page) - 1 = 2 * 5 (limit) => 10 -> seran las siguiente 5
      4 (page) - 1 = 3 * 5 (limit) => 15 -> seran las siguiente 5
  */
  const startPagination = (page - 1) * limit
  const endPagination = startPagination + limit

  // extraemos las ids (ya que asi es la api)
  const ids = data.slice(startPagination, endPagination)
  return ids

  // como recuperaria la informacion de los id un JR, o sea, yop
  // esta forma esta bien pero no le dariamos retroalimentacion al usuario mientras se hace el fetching y queremos que muestre algo, en este caso un skeleton loader
  // return await Promise.all(ids.map((id: number) => getItemInfo(id)))
}

export const getItemInfo = async (id: number) => {
  const resp = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  const data = await resp.json()
  return data
}
