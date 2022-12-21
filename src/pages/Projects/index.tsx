import { chakra, shouldForwardProp, Grid, GridItem, useMediaQuery, Box, Image, AspectRatio, Flex } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { ProjectCard } from './../../components/ProjectCard/index';

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

const projects = [

  {
    title: 'Movie Shop',
    url: 'https://movie-shop-two.vercel.app/',
    img: '',
    repo: 'https://github.com/whyleonardo/movie-shop',
    isCompleted: false
  },

  {
    title: 'Todo App',
    url: 'https://my-todo-app-jade.vercel.app/',
    img: '/assets/todoapp.png',
    repo: 'https://github.com/whyleonardo/my-todo-app',
    isCompleted: true
  },

  {
    title: 'Dot Money',
    url: 'https://dot-money.vercel.app/',
    img: '/assets/dotmoney.png',
    repo: 'https://github.com/whyleonardo/dot-money',
    isCompleted: true
  },

  {
    title: 'Spotify Searcher',
    url: 'https://spotify-album-searcher.vercel.app/',
    img: '/assets/spotifysearcher.png',
    repo: 'https://github.com/whyleonardo/Spotify-Album-Searcher',
    isCompleted: true
  }
]

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
        templateColumns={isNotSmallerScreen ? 'repeat(3, 420px)' : 'repeat(1, 350px)'}
        gap={6}
        alignItems='center'
      >
        {projects && projects.map((project: any) => (
          <ProjectCard project={project} />
        )
        )}
      </Grid>
    </StackChakra >

  )
}