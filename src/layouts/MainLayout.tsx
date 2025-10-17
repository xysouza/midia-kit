import { Container, Box } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <Box minH="100%" display="flex" flexDirection="column">
      <Header />
      <Container maxW="6xl" flex="1 1 auto" py={8}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}
