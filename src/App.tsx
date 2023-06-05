import { Suspense, lazy } from 'react'
import { Route } from 'wouter'
import { Header } from './components/header/Header'

// se hace la importacion de las rutas en lazy para que se descarguen las rutas bajo demanda, y no todas de un solo golpe.
const TopStoriesPage = lazy(() => import('./pages/TopStoriesPage/TopStoriesPage'))
const DetailsPage = lazy(() => import('./pages/DetailPage/DetailPage'))

export default function App () {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Route path='/' component={TopStoriesPage} />
          <Route path='/article/:id' component={DetailsPage} />
        </Suspense>
      </main>
    </>
  )
}
