import { BrowserRouter } from "react-router-dom"
import { AnimatedRoutes } from "./components/AnimatedRoutes"

export const App = () => {

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>

  )
}
