import { IconButton, Drawer, DrawerOverlay, DrawerHeader, DrawerContent, DrawerBody, useDisclosure, Flex, useColorMode, Divider, Text, LinkBox, LinkOverlay, Icon, Heading } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiX, FiMenu } from 'react-icons/fi';

export const MenuNavHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';


  return (
    <>
      <IconButton
        aria-label="Open Menu Button"
        icon={<FiMenu size={36} />}
        variant='unstyled'
        onClick={onOpen}
      />
      <Drawer
        size='full'
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          bg={isDark ? 'gray.800' : 'white'}
        >
          <Flex
            alignItems='center'
            justifyContent='space-between'
            px='4'
          >
            <DrawerHeader display='flex' gap='1rem' p='0.5rem' alignItems='center'>
              <Heading>Links</Heading>
            </DrawerHeader>
            <IconButton
              aria-label="Close Menu Button"
              icon={<FiX size={32} />}
              variant='unstyled'
              onClick={onClose}
            />
          </Flex>

          <Divider w='90%' alignSelf='center' />

          <DrawerBody
            display='flex'
            gap='2'
            pt='1rem'
          >

            <LinkBox
              as='article'
              display='flex'
              h='12.5rem'
              w='12.5rem'
              alignItems='center'
              justifyContent='center'
              border='1px'
              borderColor={isDark ? 'gray.700' : 'black'}
              color={isDark ? 'gray.400' : 'black'}
              _hover={{ bg: 'blue.400', color: 'white', border: 'none' }}
              rounded='md'
              transition='0.3s linear'
            >
              <LinkOverlay
                display='flex'
                flexDirection='column'
                alignItems='center'
                gap='2'
                href="https://github.com/whyleonardo"
              >
                <Icon as={FaGithub} w='4.5rem' h='4.5rem' />
                <Text fontWeight='semibold'>GitHub</Text>
              </LinkOverlay>
            </LinkBox>

            <LinkBox
              as='article'
              display='flex'
              h='12.5rem'
              w='12.5rem'
              alignItems='center'
              justifyContent='center'
              border='1px'
              borderColor={isDark ? 'gray.700' : 'black'}
              color={isDark ? 'gray.400' : 'black'}
              _hover={{ bg: 'blue.400', color: 'white', border: 'none' }}
              rounded='md'
              transition='0.3s linear'
            >
              <LinkOverlay
                display='flex'
                flexDirection='column'
                alignItems='center'
                gap='2'
                href="https://www.linkedin.com/in/christianlsb/"
              >
                <Icon as={FaLinkedin} w='4.5rem' h='4.5rem' />
                <Text fontWeight='semibold'>LinkedIn</Text>
              </LinkOverlay>
            </LinkBox>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}