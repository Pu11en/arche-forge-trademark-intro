import { Routes, Route } from 'react-router-dom'
import NightRaidIntro from './components/NightRaidIntro'
import Forge from './components/Forge'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NightRaidIntro />} />
        <Route path="/forge" element={<Forge />} />
      </Routes>
    </div>
  )
}

export default App