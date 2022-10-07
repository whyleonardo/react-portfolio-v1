import { Flex, LinkBox, LinkOverlay, Text, Image, Link, useMediaQuery, Icon, Heading, IconButton } from '@chakra-ui/react';
import { GiCargoCrane } from 'react-icons/gi';
import { FaCodeBranch } from 'react-icons/fa';

interface ProjectProps {
  project: {
    url: string
    repo: string
    img: string
    title: string
    isCompleted: boolean
  }
}

export const ProjectCard = ({ project }: ProjectProps) => {

  const [isNotSmallerScreen] = useMediaQuery('(min-width: 700px)');

  return (
    <LinkBox
      as='article'
      height='full'
      rounded='lg'
      overflow='hidden'
      transition='box-shadow 0.1s ease-out'
      role='group'
      borderWidth='1px'
      _dark={{ bg: 'whiteAlpha.50' }}
      _hover={{ shadow: 'md' }}
    >
      <Flex
        position='relative'
        overflow='hidden'
        justifyContent='center'
        alignItems='center'
        bg='gray.100'
        width='full'
        height={isNotSmallerScreen ? 300 : 200}
      >
        <Flex
          position='absolute'
          top='0'
          left='0'
          w='full'
          justifyContent={project.isCompleted ? 'end' : 'space-between'}
          p='0.30rem'
        >
          <Flex
            display={project.isCompleted ? 'none' : 'flex'}
            m='0.5rem'
            px='1rem'
            alignItems='center'
            sx={{
              bgColor: 'rgba(11, 197, 234, 0.3)',
              opacity: 0.9
            }}
            rounded='full'
          >
            <Heading
              color='gray.900'
              size='xs'
              fontWeight='500'
            >Em Desenvolvimento</Heading>
          </Flex>

          <IconButton
            as='a'
            href={project.repo}
            target='_blank'
            color='gray.800'
            _hover={{ color: 'github' }}
            aria-label={""}
            icon={<FaCodeBranch size='30' />}
          />
        </Flex>



        {project.isCompleted
          ? <Image
            src={project.img}
            // width={isNotSmallerScreen ? 400 : 300}
            // height={isNotSmallerScreen ? 300 : 200}
            objectFit='cover'
            filter='auto'
            transform='auto'
            _groupHover={{ scale: 1.05 }}
            transition='0.5s ease-out'
            dropShadow='5px 5px 3px rgba(0, 0, 0, 0.5)'
          />

          : <Icon
            as={GiCargoCrane}
            width={isNotSmallerScreen ? 200 : 100}
            height={isNotSmallerScreen ? 200 : 100}
            color='gray.900'
            filter='auto'
            transform='auto'
            _groupHover={{ scale: 1.05 }}
            transition='0.5s ease-out'
            dropShadow='5px 5px 10px rgba(0, 0, 0, 0.5)'
          />
        }


      </Flex>

      <Link target='_blank' href={project.url}>
        <LinkOverlay>
          <Text fontSize='sm' fontWeight='semibold' px='4' py='3'>
            {project.title}
          </Text>
        </LinkOverlay>
      </Link>
    </LinkBox >
  )
}

