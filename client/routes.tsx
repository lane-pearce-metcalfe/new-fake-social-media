import { createRoutesFromElements, Route } from 'react-router-dom'
import PostPage from './components/PostPage.tsx'
import Layout from './components/Layout.tsx'
import UserPage from './components/UserPage.tsx'
export default createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route path="post/:id" element={<PostPage />} />
      <Route path="user/:id" element={<UserPage />} />
    </Route>
  </>,
)
