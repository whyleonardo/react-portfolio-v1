import { VStack } from "@chakra-ui/react"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { NavHeader } from "./components/NavHeader"
import { Profile } from "./components/Profile"
import { Social } from "./components/Social"

export const App = () => {

  return (
    <>
      <NavHeader />
      <VStack overflow='hidden' >
        <Header />
        <Social />
        <Profile />
        <Footer />
      </VStack >
    </>
  )
}
