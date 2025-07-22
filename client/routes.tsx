import { createRoutesFromElements, Route } from 'react-router-dom'
import PostPage from './components/PostPage.tsx'
import Layout from './components/Layout.tsx'
import UserPage from './components/UserPage.tsx'
import HomeFeed from './components/HomeFeed.tsx'
import LoadingUser from './components/LoadingUser.tsx'
import ImageUploadComponent from './components/UploadPost.tsx'
import MessageBox from './components/MessageBox.tsx'
export default createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomeFeed />} />
      <Route path="post/:id" element={<PostPage />} />
      <Route path="user/:id" element={<UserPage />} />
      <Route path="/upload" element={<ImageUploadComponent />} />
      <Route path="conversation/:id" element={<MessageBox />} />
    </Route>
    <Route path="/loadUser" element={<LoadingUser />} />
  </>,
)
