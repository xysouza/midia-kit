import { Box, Heading, Text, Stack, SimpleGrid, VStack, Icon, useColorModeValue, Flex } from '@chakra-ui/react'
import { FiMapPin, FiUsers, FiBarChart2 } from 'react-icons/fi'

const PUBLICO_DATA = [
  {
    icon: FiUsers,
    title: 'Gênero',
    stats: [
      { label: 'Feminino', value: '75%' },
      { label: 'Masculino', value: '25%' },
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: FiBarChart2,
    title: 'Faixa Etária Principal',
    stats: [
      { label: '18-24 anos', value: '40%' },
      { label: '25-34 anos', value: '35%' },
    ],
    description: 'Vestibulum id ligula porta felis euismod semper.',
  },
  {
    icon: FiMapPin,
    title: 'Principais Localizações',
    stats: [
      { label: 'São Paulo, SP', value: '' },
      { label: 'Rio de Janeiro, RJ', value: '' },
    ],
    description: 'Aenean lacinia bibendum nulla sed consectetur.',
  },
]

interface PublicoProps {
  accent: string
  primaryText: string
  secondaryText: string
  mutedSurface: string
  mutedBorder: string
  mutedShadow: string
}

export default function Publico({
  accent,
  primaryText,
  secondaryText,
  mutedSurface,
  mutedBorder,
  mutedShadow,
}: PublicoProps) {
  const iconBg = useColorModeValue('rgba(214,173,160,0.25)', 'rgba(166,119,106,0.35)')

  return (
    <Box as="section" id="publico" w="full" py={{ base: 10, md: 14 }}>
      <Stack
        spacing={{ base: 8, md: 10 }}
        align="center"
        maxW={{ base: 'full', xl: '7xl' }}
        mx="auto"
        px={{ base: 6, md: 10 }}
      >
        <Box maxW="3xl" textAlign="center">
          <Heading
            fontSize={{ base: '2xl', md: '3xl' }}
            color={primaryText}
            lineHeight={{ base: 1.2, md: 1.25 }}
            fontWeight="extrabold"
          >
            Perfil do Público
          </Heading>
          <Text mt={3} color={secondaryText}>
            Conheça a demografia do público que acompanha o perfil, garantindo que sua mensagem chegue às pessoas certas.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} w="full">
          {PUBLICO_DATA.map((item) => (
            <VStack
              key={item.title}
              spacing={5}
              bg={mutedSurface}
              borderRadius="2xl"
              borderWidth="1px"
              borderColor={mutedBorder}
              p={{ base: 6, md: 8 }}
              boxShadow={mutedShadow}
              align="stretch"
            >
              <Flex align="center" gap={4}>
                <Box
                  bg={iconBg}
                  borderRadius="xl"
                  p={3}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={item.icon} boxSize={6} color={accent} />
                </Box>
                <Heading fontSize="xl" color={primaryText} fontWeight="bold">
                  {item.title}
                </Heading>
              </Flex>
              <VStack align="stretch" spacing={2}>
                {item.stats.map((stat) => (
                  <Flex key={stat.label} justify="space-between" align="baseline">
                    <Text color={secondaryText}>{stat.label}</Text>
                    <Text color={primaryText} fontWeight="bold" fontSize="lg">
                      {stat.value}
                    </Text>
                  </Flex>
                ))}
              </VStack>
              <Text color={secondaryText} fontSize="sm">
                {item.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  )
}
