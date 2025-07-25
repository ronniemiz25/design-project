import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './components/Homepage'
import AboutPage from './components/Aboutpage'
import PostsPage from './components/Postspage.jsx'
import Contactpage from './components/Contactpage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/', element: <Homepage /> },
      { path: '/about', element: <AboutPage /> },
      {
        path: '/posts', element: (
          <ProtectedRoute>
            <PostsPage />
          </ProtectedRoute>
        )
      },
      { path: '/contact', element: <Contactpage /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-1e2gox0hjc1snimg.us.auth0.com"
      clientId="X1fyZR3ZMoG5OQjoKrh0LoelPjpGVMDB"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>,
)
