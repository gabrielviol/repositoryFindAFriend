import { Routes, Route } from 'react-router-dom'

import { PetProfile } from '@/pages/PetProfile'
import { Home } from '../pages/Home'
import { Map } from '../pages/Map'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/pet-profile/:id" element={<PetProfile/>} />
    </Routes>
  )
}
