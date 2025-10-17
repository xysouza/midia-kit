import { Box, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box as="footer" px={6} py={4} borderTopWidth="1px">
      <Text fontSize="sm" color="gray.500">© {new Date().getFullYear()} Media Kit</Text>
    </Box>
  )
}
