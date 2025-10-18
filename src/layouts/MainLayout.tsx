import { Container, Box } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'
import { Nav } from '../components'
import { Footer } from '../components/Footer'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <Box minH="100%" display="flex" flexDirection="column">
      {/* New sticky navigation */}
      <Nav />
      {/* Keep the previous header utilities if needed below nav (e.g., theme toggle) */}
      {/* <Header /> */}
      <Container maxW="6xl" flex="1 1 auto" py={8}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}
