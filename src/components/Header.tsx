import { Flex, Heading, Spacer, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex as="header" px={6} py={4} align="center" borderBottomWidth="1px">
      <Heading as="h1" size="md">Media Kit</Heading>
      <Spacer />
      <IconButton
        aria-label="Alternar tema"
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        variant="ghost"
      />
    </Flex>
  )
}
