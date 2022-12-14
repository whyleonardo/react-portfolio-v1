import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { FaReact, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiFirebase, SiChakraui, SiJest } from 'react-icons/si';

import { Grid, useColorMode, VStack } from '@chakra-ui/react';

SiTypescript


export const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 700px)");
  const { colorMode } = useColorMode();

  const isDark = colorMode === 'dark';
  return (
    <Flex
      py='5rem'
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      alignItems='center'
    >
      <Box alignSelf={isNotSmallerScreen ? "flex-end" : "center"} px="16" py="8" textAlign='center'>
        <Text fontSize="2xl" color="gray.400">Minhas</Text>
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          Skills
        </Heading>
      </Box>

      <Box alignSelf="center" justifyContent='center' >
        <Grid
          display={isNotSmallerScreen ? 'flex' : 'grid'}
          templateColumns='repeat(2, 150px)'
          p='2'
          gap='2'
          justifyContent='center'
          alignItems='center'
        >
          <VStack
            rounded="xl"
            p='6'
            w='150px'
            bg={isDark ? "gray.700" : "gray.700"}
            boxShadow='lg'
            transition='0.5s linear'
            _hover={{ bg: isDark ? "gray.600" : "gray.600" }}
            alignItems='center'
            justifyContent='center'
          >
            <Icon as={FaReact} w="16" color='react' h="16" />
            <Text fontSize="xl" color='gray.100' fontWeight="semibold">
              ReactJS
            </Text>
          </VStack>

          <VStack
            rounded="xl"
            p='6'
            w='150px'
            bg={isDark ? "gray.700" : "gray.700"}
            boxShadow='lg'
            transition='0.5s linear'
            _hover={{ bg: isDark ? "gray.600" : "gray.600" }}
            alignItems='center'
            justifyContent='center'
          >
            <Icon as={SiTypescript} w="16" h="16" color='typescript' />
            <Text fontSize="xl" color='gray.100' fontWeight="semibold">
              TypeScript
            </Text>
          </VStack>

          <VStack
            rounded="xl"
            p='6'
            w='150px'
            bg={isDark ? "gray.700" : "gray.700"}
            boxShadow='lg'
            transition='0.5s linear'
            _hover={{ bg: isDark ? "gray.600" : "gray.600" }}
            alignItems='center'
            justifyContent='center'
          >
            <Icon as={SiFirebase} w="16" h="16" color='firebase' />
            <Text fontSize="xl" color='gray.100' fontWeight="semibold">
              Firebase
            </Text>
          </VStack >

          <VStack
            rounded="xl"
            p='6'
            w='150px'
            bg={isDark ? "gray.700" : "gray.700"}
            boxShadow='lg'
            transition='0.5s linear'
            _hover={{ bg: isDark ? "gray.600" : "gray.600" }}
            alignItems='center'
            justifyContent='center'
          >
            <Icon as={SiChakraui} w="16" h="16" bg='white' rounded='full' color='chakra' />
            <Text fontSize="xl" color='gray.100' fontWeight="semibold">
              Chakra UI
            </Text>
          </VStack >

          <VStack
            rounded="xl"
            p='6'
            w='150px'
            bg={isDark ? "gray.700" : "gray.700"}
            boxShadow='lg'
            transition='0.5s linear'
            _hover={{ bg: isDark ? "gray.600" : "gray.600" }}
            alignItems='center'
            justifyContent='center'
          >
            <Icon as={SiJest} w="16" h="16" color='jest' />
            <Text fontSize="xl" color='gray.100' fontWeight="semibold">
              Jest
            </Text>
          </VStack >

          <VStack
            rounded="xl"
            p='6'
            w='150px'
            bg={isDark ? "gray.700" : "gray.700"}
            boxShadow='lg'
            transition='0.5s linear'
            _hover={{ bg: isDark ? "gray.600" : "gray.600" }}
            alignItems='center'
            justifyContent='center'
          >
            <Icon as={FaGitAlt} w="16" h="16" color='github' />
            <Text fontSize="xl" color='gray.100' fontWeight="semibold">
              GIT
            </Text>
          </VStack >
        </Grid >
      </Box >
    </Flex >
  )
}
