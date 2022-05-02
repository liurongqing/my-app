import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

export const RoutersComponent = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((r) => (
        <Route path={r.path} key={r.key} element={r.element}>
          {r.children?.map((rc) => (
            <Route path={rc.path} key={rc.key} element={rc.element} />
          ))}
        </Route>
      ))}
    </Routes>
  </BrowserRouter>
)
