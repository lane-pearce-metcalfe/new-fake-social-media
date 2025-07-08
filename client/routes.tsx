import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import PostPage from './components/PostPage.tsx'
export default createRoutesFromElements(
  <>
    <Route index element={<App />} />
    <Route path="/post/:id" element={<PostPage />} />
  </>,
)
