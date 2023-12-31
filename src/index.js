import React from 'react';
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from './components/Dashboard';
import LandingPage, { action } from './components/LandingPage';


const router = createBrowserRouter([
  {path: '/', element: <LandingPage />, action:action},
  {path: '/dashboard', element: <Dashboard />}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)