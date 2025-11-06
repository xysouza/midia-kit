import { Box, Heading, Text, VStack, Icon, useColorModeValue, Wrap, IconButton, Link } from '@chakra-ui/react'
import { FiMail, FiInstagram, FiLinkedin } from 'react-icons/fi'

const SOCIAL_LINKS = [
  {
    icon: FiInstagram,
    href: 'https://www.instagram.com',
    label: 'Instagram',
  },
  {
    icon: FiLinkedin,
    href: 'https://www.linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: FiMail,
    href: 'mailto:contato@exemplo.com',
    label: 'Email',
  },
]

interface FooterProps {
  accent: string
  primaryText: string
  secondaryText: string
  reachBgGradient: string
}

export default function Footer({
  accent,
  primaryText,
  secondaryText,
  reachBgGradient,
}: FooterProps) {
  const iconBg = useColorModeValue('rgba(255,255,255,0.1)', 'rgba(0,0,0,0.2)')

  return (
    <Box as="footer" w="full" bg={reachBgGradient} py={{ base: 12, md: 16 }}>
      <VStack
        spacing={8}
        align="center"
        maxW={{ base: 'full', xl: '7xl' }}
        mx="auto"
        px={{ base: 6, md: 10 }}
        textAlign="center"
      >
        <VStack spacing={3}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl' }}
            color={primaryText}
            fontWeight="extrabold"
          >
            Vamos trabalhar juntos?
          </Heading>
          <Text color={secondaryText} maxW="lg">
            Se você acredita que sua marca se alinha aos meus valores e público, entre em contato para explorarmos uma parceria de sucesso.
          </Text>
        </VStack>

        <Wrap justify="center" spacing={4}>
          {SOCIAL_LINKS.map((link) => (
            <IconButton
              key={link.label}
              as={Link}
              href={link.href}
              isExternal
              aria-label={link.label}
              icon={<Icon as={link.icon} boxSize={6} />}
              size="lg"
              bg={iconBg}
              color={primaryText}
              borderRadius="full"
              transition="all 0.2s ease"
              _hover={{ bg: accent, color: 'white', transform: 'translateY(-2px)' }}
            />
          ))}
        </Wrap>

        <Text color={secondaryText} fontSize="sm">
          &copy; {new Date().getFullYear()} Adriano Oliveira. Todos os direitos reservados.
        </Text>
      </VStack>
    </Box>
  )
}
