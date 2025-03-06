import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PreferencePage from './components/PreferencePage'
import ThankYouPage from './components/ThankYouPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PreferencePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  )
}

export default App