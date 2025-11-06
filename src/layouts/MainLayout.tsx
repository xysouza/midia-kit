import { Box } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'
import { Nav } from '../components'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {/* New sticky navigation */}
      <Nav />
      {/* Keep the previous header utilities if needed below nav (e.g., theme toggle) */}
      {/* <Header /> */}
      <Box flex="1 1 auto" w="full" pt={0} pb={8}>
        {children}
      </Box>
    </Box>
  )
}
