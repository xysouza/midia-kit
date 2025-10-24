import { Box, Heading, Text, Stack, SimpleGrid, VStack, Icon } from '@chakra-ui/react'
import { FiUsers, FiTrendingUp, FiEye } from 'react-icons/fi'

const REACH_STATS = [
  {
    icon: FiUsers,
    value: '4.9k',
    title: 'Seguidores no Instagram',
    description: 'Comunidade engajada e crescente.',
  },
  {
    icon: FiTrendingUp,
    value: '1M',
    title: 'Impressões em 30 dias',
    description: 'Alcance massivo e visibilidade.',
  },
  {
    icon: FiEye,
    value: '182.5k',
    title: 'Contas alcançadas em 30 dias',
    description: 'Público diversificado e impactante.',
  },
]

interface AlcanceProps {
  accent: string
  secondaryText: string
  reachBgGradient: string
  reachAccentText: string
  reachCardBg: string
  reachCardBorder: string
  reachIconBg: string
  reachCardShadow: string
}

export default function Alcance({
  accent,
  secondaryText,
  reachBgGradient,
  reachAccentText,
  reachCardBg,
  reachCardBorder,
  reachIconBg,
  reachCardShadow,
}: AlcanceProps) {
  return (
    <Box as="section" id="alcance" w="full" bg={reachBgGradient} py={{ base: 10, md: 14 }}>
      <Stack
        spacing={{ base: 8, md: 10 }}
        align="center"
        textAlign="center"
        maxW={{ base: 'full', xl: '7xl' }}
        mx="auto"
        px={{ base: 6, md: 10 }}
      >
        <Box maxW="3xl">
          <Heading
            fontSize={{ base: '2xl', md: '3xl' }}
            color={reachAccentText}
            lineHeight={{ base: 1.2, md: 1.25 }}
            fontWeight="extrabold"
          >
            Alcance e Engajamento no Instagram
          </Heading>
          <Text mt={3} color={secondaryText} textStyle="body">
            Métricas reais que demonstram o impacto e a presença digital sólida, construindo conexões autênticas com o público.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} w="full">
          {REACH_STATS.map((stat) => (
            <VStack
              key={stat.title}
              spacing={4}
              bg={reachCardBg}
              borderRadius="2xl"
              borderWidth="1px"
              borderColor={reachCardBorder}
              p={{ base: 6, md: 8 }}
              boxShadow={reachCardShadow}
            >
              <Box
                bg={reachIconBg}
                borderRadius="xl"
                p={3}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={stat.icon} boxSize={7} color={accent} />
              </Box>
              <Heading fontSize={{ base: '3xl', md: '4xl' }} color={reachAccentText}>
                {stat.value}
              </Heading>
              <Text textStyle="eyebrow" color={accent}>
                {stat.title}
              </Text>
              <Text color={secondaryText} fontSize="sm" maxW="sm">
                {stat.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  )
}