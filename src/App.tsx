import { VStack } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { NavHeader } from "./components/NavHeader"
import { Profile } from "./components/Profile"
import { Social } from "./components/Social"

export const App = () => {

  return (
    <>
      <NavHeader />
      <VStack >
        <Header />
        <Social />
        <Profile />
      </VStack >
    </>
  )
}
