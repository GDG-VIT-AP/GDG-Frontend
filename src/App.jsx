/*Purpose: The App.jsx file serves as the root component of the GDG Frontend application. It functions as the main entry point 
for the application, importing necessary styles from App.css and rendering the FeedbackPage component. This file maintains a minimalist structure, 
focusing solely on initializing the application and managing the top-level component hierarchy by rendering the feedback system interface through the FeedbackPage component.*/

/*Contributor: Arpit Makkar (23BCE7565)*/
import './styles/App.css'
import FeedbackPage from "./pages/feedback-page/FeedbackPage.jsx"

function App() {
  return <FeedbackPage />;
}

export default App;

