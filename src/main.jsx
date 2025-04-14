/*Purpose: The main.jsx file serves as the application's entry point that bootstraps the React application. It imports necessary dependencies 
including React's StrictMode, createRoot from React DOM, global styles from index.css, and the root App component. The file's primary function 
is to initialize the React application by creating a root instance and rendering the App component within StrictMode, which helps identify potential 
problems in the application during development.*/

/*Contributor: Arpit Makkar (23BCE7565)*/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
