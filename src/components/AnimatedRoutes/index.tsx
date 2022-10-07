
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { NavHeader } from '../NavHeader';
import { Projects } from './../../pages/Projects/index';


export const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <NavHeader />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </AnimatePresence>
  )
}