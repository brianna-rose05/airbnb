import HomePage from './pages/HomePage.tsx'
import {SearchResults} from './pages/SearchResults.tsx'
import { Routes, Route } from 'react-router'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  ) 
}

export default App