import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Main from './components/Main.jsx';
import Phones from './components/Phones.jsx';
import Phone from './components/Phone';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/phones',
        element: <Phones />,
        loader: () => fetch('http://localhost:5001/phones/'),
      },
      {
        path: '/phone/:id',
        element: <Phone></Phone>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/phones/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);