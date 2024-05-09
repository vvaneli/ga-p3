import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './Root.jsx'

// Styles
import './styles/main.scss'

// Pages
import Index from './components/pages/Index.jsx'
import Register from './components/pages/Register.jsx'
import Login from './components/pages/Login.jsx'
import Dashboard from './components/pages/Dashboard.jsx'
import Bot from './components/pages/Bot.jsx'
import JournalsList from './components/pages/JournalsList.jsx'
import JournalPage from './components/pages/JournalPage.jsx'
import ArticlesList from './components/pages/ArticlesList.jsx'
import ArticlePage from './components/pages/ArticlePage.jsx'
import Account from './components/pages/Account.jsx'
import Help from './components/pages/Help.jsx'

// Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Index />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'bot',
        element: <Bot />
      },
      {
        path: 'journals',
        element: <JournalsList />
      },
      {
        path: 'journal',
        element: <JournalPage />
      },
      {
        path: 'articles',
        element: <ArticlesList />
      },
      {
        path: 'article',
        element: <ArticlePage />
      },
      {
        path: 'account',
        element: <Account />
      },
      {
        path: 'help',
        element: <Help />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
