import { Flex, useColorMode, IconButton, useMediaQuery } from "@chakra-ui/react";
import { FaSun, FaMoon, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CirclesIcon } from "../CirclesIcon";
import { MenuNavHeader } from "../MenuNavHeader";
import { BackArrowButton } from "../BackArrowButton";



export const NavHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const location = useLocation();
  const actualLocation = location.pathname === '/projects';

  const [isNotSmallerScreen] = useMediaQuery('(min-width: 700px)');

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
      px='6'
      py='2'
      w='100%'
      boxShadow={scrollPosition > 1 ? 'sm' : 'none'}
    >

      {!actualLocation ? <CirclesIcon /> : <BackArrowButton />}

      {isNotSmallerScreen
        ? (
          <Flex>
            <IconButton
              bg='none'
              _active={{ bg: 'none' }}
              as='a'
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
        )

        : (
          <Flex gap='2.5rem'>
            <IconButton
              bg='none'
              _active={{ bg: 'none' }}
              aria-label={""}
              _hover={{ color: 'yellow.400' }}
              onClick={toggleColorMode}
              icon={isDark ? <FaSun size='25' /> : <FaMoon size='25' />}
            />
            <MenuNavHeader />
          </Flex>
        )
      }

    </Flex>
  )
}
