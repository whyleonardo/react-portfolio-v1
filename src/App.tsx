import { BrowserRouter } from "react-router-dom"
import { AnimatedRoutes } from "./components/AnimatedRoutes"
import { NavHeader } from "./components/NavHeader"

export const App = () => {

  return (
    <BrowserRouter>
      <NavHeader />
      <AnimatedRoutes />
    </BrowserRouter>

  )
}
