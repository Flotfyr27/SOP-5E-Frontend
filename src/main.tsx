import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CharacterSheet from './CharacterSheet'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CharacterSheet />
  </React.StrictMode>,
)
