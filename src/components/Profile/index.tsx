import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiFirebase } from 'react-icons/si'
import { useColorMode, VStack } from '@chakra-ui/react';

SiTypescript


export const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 700px)");
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === 'dark';
  return (
    <Flex py='5rem' mx='50' direction={isNotSmallerScreen ? "row" : "column"} w="100%">
      <Box alignSelf="center" px="32" py="16" textAlign='center'>
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          7+
        </Heading>
        <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
      </Box>

      <Box alignSelf="center" textAlign='center' px="16">
        <Text fontWeight="bold" fontSize="2xl">Product Designer and Developer, specialised in mobile app development.</Text>
        <Flex px="32" direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
          <VStack
            gap='2'
            rounded="xl"
            p='4'
            mt={4}
            bg={isDark ? "gray.700" : "black"}
            boxShadow='lg'
            h="30vh"
            w="30vh"
            transition='0.5s linear'
            _hover={{ bg: isDark ? "gray.600" : "gray.700" }}
            alignItems='center'
            justifyContent='center'
          >
            <Icon as={FaReact} w="24" color='react' h="24" />
            <Text fontSize="xl" color='gray.100' fontWeight="semibold">
              ReactJS
            </Text>
          </VStack>

          <VStack
            gap='2'
            rounded="xl"
            p='4'
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg={isDark ? "gray.700" : "black"}
            boxShadow='lg'
            h="30vh"
            w="30vh"
            transition='0.5s linear'
            _hover={{ bg: isDark ? "gray.600" : "gray.700" }}
            alignItems='center'
            justifyContent='center'
          >
            <Icon as={SiTypescript} w="24" h="24" color='typescript' />
            <Text fontSize="xl" color='gray.100' _groupHover={{ color: 'white' }} fontWeight="semibold">
              TypeScript
            </Text>
          </VStack>

          <VStack
            gap='2'
            rounded="xl"
            py='5'
            mt={4} ml={isNotSmallerScreen ? 4 : 0}
            bg={isDark ? "gray.700" : "black"}
            boxShadow='lg'
            h="30vh"
            w="30vh"
            transition='0.5s linear'
            _hover={{ bg: isDark ? "gray.600" : "gray.700" }}
            alignItems='center'
            justifyContent='center'
          >
            <Icon as={SiFirebase} w="24" h="24" color='firebase' _groupHover={{ color: 'firebase' }} />
            <Text fontSize="xl" color='gray.100' _groupHover={{ color: 'black' }} fontWeight="semibold">
              Web Apps
            </Text>
          </VStack >
        </Flex >
      </Box >
    </Flex >
  )
}
