import TrustCenter from './components/TrustCenter'
import OwnerPortalPreview from './components/OwnerPortalPreview'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<TrustCenter />} />
      <Route path="/portal" element={<OwnerPortalPreview />} />
    </Routes>
  )
}

export default App
