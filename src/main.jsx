import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import LandingPage from './App.jsx'

import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics/>
    <LandingPage />
  </StrictMode>,
)
