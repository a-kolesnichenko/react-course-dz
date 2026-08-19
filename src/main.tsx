import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './layout/Layout/Layout.tsx';
import Login from './pages/Login/Login.tsx';
import MoviesSearch from './pages/MoviesSearch/MoviesSearch.tsx';
import Movie from './pages/Movie/Movie.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';
import Error from './pages/Error/Error.tsx';
import { UserContextProvider } from './contexts/User/user.context.tsx';
import axios from 'axios';
import { API_URL, API_KEY } from './helpers/API.ts';
import { RequireAuth } from './helpers/RequireAuth.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth><Layout /></RequireAuth>,
    children: [
      {
        path: '/',
        element: <MoviesSearch />
      },
      {
        path: '/movie/:id',
        element: <Movie />,
        errorElement: <Error />,
        loader: async ({ params }) => {
          const { data } = await axios.get(`${API_URL}/?i=${params.id}&apikey=${API_KEY}`);
          return data;
        }
      },
      {
        path: '/favorites',
        element: <Favorites />
      }
    ]
  },
  {
    path: '/auth',
    element: <Layout />,
    children: [
      {
        path: 'login',
        element: <Login />
      }
    ]
  },
  {
    path: '*',
    element: <Error /> 
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
	    <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);