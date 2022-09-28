import { HStack, Icon, IconButton, Tooltip, useMediaQuery } from "@chakra-ui/react"
import { FaSpotify, FaTwitter, FaInstagram } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'


export const Social = () => {

  const [isNotSmallerScreen] = useMediaQuery('(min-width: 700px)');

  return (
    <HStack spacing={isNotSmallerScreen ? '24' : '12'}>
      <Tooltip hasArrow mt='3' label="Twitter" aria-label='A tooltip'>
        <IconButton
          as='a'
          target='_blank'
          href='https://twitter.com/christianlsb0'
          _hover={{ color: 'twitter' }}
          aria-label='Twitter'
          variant='unstyled'
          icon={<FaTwitter size={50} />}
        />
      </Tooltip>

      <Tooltip hasArrow mt='3' label="Instagram" aria-label='A tooltip'>
        <IconButton
          as='a'
          target='_blank'
          href='https://www.instagram.com/whyleonardo_/'
          _hover={{ color: 'instagram' }}
          aria-label='Instagram'
          variant='unstyled'
          icon={<FaInstagram size={50} />}
        />
      </Tooltip>

      <Tooltip hasArrow mt='3' label="Spotify" aria-label='A tooltip'>
        <IconButton
          as='a'
          target='_blank'
          href='https://open.spotify.com/user/christian.lsb16'
          _hover={{ color: 'spotify' }}
          aria-label='Spotify'
          variant='unstyled'
          icon={<FaSpotify size={50} />}
        />
      </Tooltip>

      <Tooltip hasArrow mt='3' label="Gmail" aria-label='A tooltip'>
        <IconButton
          as='a'
          target='_blank'
          href='mailto:christian.lsb16@gmail.com'
          _hover={{ color: 'gmail' }}
          aria-label='Email'
          variant='unstyled'
          icon={<SiGmail size={50} />}
        />
      </Tooltip>
    </HStack>
  )
}
