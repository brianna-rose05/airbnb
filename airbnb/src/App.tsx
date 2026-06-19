import HomePage from './pages/HomePage.tsx';
import {SearchResults} from './pages/SearchResults.tsx';
import Layout from './pages/Layout.tsx';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
      </Route>
    </Routes>
  ) 
}

export default App