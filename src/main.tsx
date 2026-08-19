import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './layout/Layout/Layout.tsx';
import Login from './pages/Login/Login.tsx';
import MoviesSearch from './pages/MoviesSearch/MoviesSearch.tsx';
import Movie from './pages/Movie/Movie.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';
import { UserContextProvider } from './contexts/User/user.context.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MoviesSearch />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/movie/:id',
        element: <Movie />
      },
      {
        path: '/favorites',
        element: <Favorites />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
	    <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);