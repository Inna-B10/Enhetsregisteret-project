import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LayoutRoot } from './pages/LayoutRoot'
import { NotFoundPage } from './pages/NotFoundPage'
import { AboutPage } from './pages/about/AboutPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<LayoutRoot />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
