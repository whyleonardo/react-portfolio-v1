import { Circle, Stack, useColorMode, useMediaQuery, Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const [isNotSmallerScreen] = useMediaQuery('(min-width: 700px)');

  return (
    <Stack mt='2rem' mb={isNotSmallerScreen ? '1rem' : '4rem'}>
      <Circle
        position='absolute'
        zIndex='-1'
        bg={isDark ? 'blue.100' : 'blue.500'}
        opacity='0.1'
        size='250px'
        alignSelf='flex-end'
        boxShadow='lg'
        m='5'
      />

      <Flex
        direction={isNotSmallerScreen ? 'row' : 'column-reverse'}
        py={isNotSmallerScreen ? '24' : '0'}
        px={isNotSmallerScreen ? '12' : '0'}
        alignSelf='flex-start'
      >
        <Box
          alignSelf='flex-center'
          px='25px'
          mt={isNotSmallerScreen ? '0' : '4'}>
          <Text
            fontSize='5xl'
            fontWeight='semibold'>
            Olá, eu sou</Text>

          <Text
            fontSize='7xl'
            lineHeight='1'
            bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
            bgClip='text'
            fontWeight='bold'
          >
            Christian Leonardo</Text>

          <Text
            mt='4'
            fontWeight='semibold'
            fontSize='3xl'
            color={isDark ? 'gray.200' : 'gray.500'}
          >
            Desenvolvedor Front-End </Text>

          <Button
            as='a'
            target='_blank'
            href='https://github.com/whyleonardo?tab=repositories'
            mt='8'
            transition='0.2s linear'
            colorScheme='blue'>
            Meus Projetos</Button>
        </Box>

        <Image
          alignSelf='center'
          my={isNotSmallerScreen ? '0' : '12'}
          mx='50px'
          boxShadow='lg'
          rounded='full'
          bgColor='transparent'
          boxSize='250px'
          src='https://avatars.githubusercontent.com/whyleonardo'
        />
      </Flex>
    </Stack >
  )
}
