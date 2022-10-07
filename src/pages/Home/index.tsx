import { chakra, shouldForwardProp } from "@chakra-ui/react"
import { isValidMotionProp, motion } from "framer-motion"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Profile } from "../../components/Profile"
import { Social } from "../../components/Social"

const StackChakra = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const variants = {
  hidden: {
    opacity: 0,
    translateY: -50,
    transition: {
      duration: 0.5
    }
  },

  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.2
    }
  },

  exit: {
    opacity: 0,
    translateX: 50,
    transition: {
      duration: 0.7
    }
  }
}

export const Home = () => {
  return (
    <StackChakra
      display='flex'
      flexDirection='column'
      alignItems='center'
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='exit'
      transition={'all 1s'}
    >
      <Header />
      <Social />
      <Profile />
      <Footer />
    </StackChakra >

  )
}

