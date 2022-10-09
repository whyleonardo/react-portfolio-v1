import { Flex, Circle } from "@chakra-ui/react"
import { motion } from "framer-motion"

const variant = {
  firstInitial: {
    translateY: -6.2,
  },

  secondInitial: {
    translateY: -9.2
  },

  thirdInitial: {
    translateY: -12.2,
  },

  firstAnimate: {
    translateY: 0,
    transition: {
      duration: 0.3,
      // delay: 0.1,
      ease: 'easeIn'
    }
  },

  secondAnimate: {
    translateY: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
      ease: 'easeIn'
    }
  },

  thirdAnimate: {
    translateY: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
      ease: 'easeIn'
    }
  }
}

export const CirclesIcon = () => {
  return (
    <Flex gap='2'>
      <Circle
        as={motion.div}
        variants={variant}
        initial='firstInitial'
        animate='firstAnimate'
        size='0.8rem'
        bg='red.400'
        transform='auto'
        whileHover={{ translateY: -2.2 }}
      />

      <Circle
        as={motion.div}
        variants={variant}
        initial='secondInitial'
        animate='secondAnimate'
        size='0.8rem'
        bg='yellow.400'
        transform='auto'
        whileHover={{ translateY: -3.2 }}
      />

      <Circle
        as={motion.div}
        variants={variant}
        initial='thirdInitial'
        animate='thirdAnimate'
        size='0.8rem'
        bg='green.400'
        transform='auto'
        whileHover={{ translateY: -4.2 }}
      />
    </Flex>
  )
}
