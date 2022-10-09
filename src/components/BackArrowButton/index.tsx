import { chakra, IconButton, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";

const arrowVariant = {
  hidden: {
    opacity: 0,
    translateX: -25,
    transition: {
      duration: 2
    }
  },

  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 2
    }
  },

  exit: {
    opacity: 0,
    translateX: -50,
    transition: {
      duration: 0.7
    }
  }
}

const ButtonChakra = chakra(motion.button, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export const BackArrowButton = () => {
  return (
    <ButtonChakra
      bg='none'
      transform='auto'
      variants={arrowVariant}
      whileHover={{ scale: 1.2 }}
      _focus={{ bg: 'none' }}
      transition='0.3s ease-out'
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <IconButton
        variant='unstyled'
        as={RouterLink}
        aria-label={""}
        icon={<BiArrowBack size={30} />}
        to='/'
      />
    </ButtonChakra>
  )
}
