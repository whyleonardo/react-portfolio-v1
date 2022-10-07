import { chakra, shouldForwardProp, Grid, GridItem, useMediaQuery, Box, Image, AspectRatio, Flex } from "@chakra-ui/react"
import { isValidMotionProp, motion } from "framer-motion"

const variants = {
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


const projects = {
  todoApp: {
    url: 'https://github.com/whyleonardo/my-todo-app'
  },
  dotMoney: {
    url: 'https://dot-money.vercel.app/'
  },
  movieShop: {
    url: 'null'
  }
}

const StackChakra = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export const Projects = () => {

  const [isNotSmallerScreen] = useMediaQuery('(min-width: 700px)');

  return (
    <StackChakra
      display='flex'
      flexDirection='column'
      alignItems='center'
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='exit'
      mt='5'
    >
      <Grid
        p='1rem'
        templateColumns={isNotSmallerScreen ? 'repeat(3, 420px)' : 'repeat(1, 420px)'}
        gap={6}
        alignItems='center'
      >
        <Box
          border='1px'
          borderColor='gray.200'
          rounded='10px'
          as='a'
          position='relative'
          target='_blank'
          href="https://chakra-ui.com/docs/components"
        >
          <AspectRatio maxW='420px' maxH='300px' ratio={1}>
            <Image rounded='10px' src='/assets/dotmoney-desktop.png' transition='0.2s linear' _hover={{ boxShadow: 'md' }} />
          </AspectRatio>


          <Flex
            bg='gray.300'
            w='full'
            rounded='0 0 10px 10px'
            position='absolute'
            bottom='0'
          >Oi</Flex>
        </Box>
        <GridItem border='1px' rounded='10px' h='300' />
        <GridItem border='1px' rounded='10px' h='300' />
        <GridItem border='1px' rounded='10px' h='300' />
        <GridItem border='1px' rounded='10px' h='300' />
        <GridItem border='1px' rounded='10px' h='300' />
      </Grid>
    </StackChakra >

  )
}