import Layout from '@/layout/index'
import { createBrowserRouter } from 'react-router'
import Home from '../views/home'

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
])

export default router
