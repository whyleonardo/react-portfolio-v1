import { Flex, useColorMode, Circle, IconButton, Button, chakra, shouldForwardProp } from "@chakra-ui/react";
import { FaSun, FaMoon, FaLinkedin, FaGithub } from 'react-icons/fa';
import { isValidMotionProp, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi'

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

export const NavHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const location = useLocation();

  const actualLocation = location.pathname === '/projects';

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      //@ts-ignore
      bg={isDark ? 'gray.800' : 'white'}
      position='sticky'
      top='0px'
      zIndex='3'
      justifyContent='space-between'
      alignItems='center'
      px='8'
      py='2'
      w='100%'
      boxShadow={scrollPosition > 1 ? 'sm' : 'none'}
    >

      {!actualLocation
        ? (
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

        : (
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

      <Flex>
        <IconButton
          bg='none'
          _active={{ bg: 'none' }}
          as='a'
          ml='2'
          boxSize='50'
          href="https://github.com/whyleonardo"
          target='_blank'
          _hover={{ color: 'github' }}
          aria-label={""}
          isRound={true}
          icon={<FaGithub size='30' />}
        />

        <IconButton
          bg='none'
          _active={{ bg: 'none' }}
          as='a'
          ml='2'
          boxSize='50'
          href="https://www.linkedin.com/in/christianlsb/"
          _hover={{ color: 'linkedin' }}
          target='_blank'
          aria-label={""}
          isRound={true}
          icon={<FaLinkedin size='30' />}
        />

        <IconButton
          bg='none'
          _active={{ bg: 'none' }}
          aria-label={""}
          ml='5'
          boxSize='50'
          _hover={{ color: 'yellow.400' }}
          onClick={toggleColorMode}
          isRound={true}
          icon={isDark ? <FaSun size='25' /> : <FaMoon size='25' />}
        />
      </Flex>
    </Flex >
  )
}
