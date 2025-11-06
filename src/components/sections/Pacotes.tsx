import { Box, Heading, Text, Stack, SimpleGrid, VStack, Icon, useColorModeValue, List, ListItem, ListIcon, Button } from '@chakra-ui/react'
import { FiCheck, FiStar } from 'react-icons/fi'

const PACOTES_DATA = [
  {
    isFeatured: false,
    title: 'Pacote Essencial',
    price: 'R$ 1.200',
    description: 'Para marcas que buscam uma introdução impactante.',
    features: [
      '1 Post no Feed',
      '3 Stories',
      'Link na Bio por 24h',
      'Divulgação em outras redes',
    ],
  },
  {
    isFeatured: true,
    title: 'Pacote Avançado',
    price: 'R$ 2.500',
    description: 'A solução completa para máxima visibilidade e engajamento.',
    features: [
      '2 Posts no Feed',
      '1 Reels',
      '8 Stories (sequência)',
      'Link na Bio por 72h',
      'Sorteio ou Ação Especial',
    ],
  },
  {
    isFeatured: false,
    title: 'Pacote Personalizado',
    price: 'Sob Consulta',
    description: 'Um plano de mídia desenhado para suas necessidades específicas.',
    features: [
      'Conteúdo sob demanda',
      'Cobertura de eventos',
      'Parceria de longo prazo',
      'Estratégia customizada',
    ],
  },
]

interface PacotesProps {
  accent: string
  primaryText: string
  secondaryText: string
  primaryButtonText: string
  primaryButtonShadow: string
  mutedSurface: string
  mutedBorder: string
  mutedShadow: string
}

export default function Pacotes({
  accent,
  primaryText,
  secondaryText,
  primaryButtonText,
  primaryButtonShadow,
  mutedSurface,
  mutedBorder,
  mutedShadow,
}: PacotesProps) {
  const featuredBg = useColorModeValue(
    'linear-gradient(125deg, rgba(238,228,219,0.95) 0%, rgba(214,173,160,0.75) 100%)',
    'linear-gradient(125deg, rgba(26,18,16,0.92) 0%, rgba(54,34,30,0.88) 100%)'
  )
  const featuredBorder = useColorModeValue('rgba(206,156,144,0.5)', 'rgba(166,119,106,0.6)')

  return (
    <Box as="section" id="pacotes" w="full" py={{ base: 10, md: 14 }}>
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
            Pacotes de Parceria
          </Heading>
          <Text mt={3} color={secondaryText}>
            Opções flexíveis para atender aos seus objetivos de marketing e orçamento.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 8, lg: 8 }} w="full" alignItems="stretch">
          {PACOTES_DATA.map((pacote) => (
            <VStack
              key={pacote.title}
              spacing={6}
              bg={pacote.isFeatured ? featuredBg : mutedSurface}
              borderRadius="2xl"
              borderWidth="1px"
              borderColor={pacote.isFeatured ? featuredBorder : mutedBorder}
              p={{ base: 6, md: 8 }}
              boxShadow={mutedShadow}
              align="stretch"
              textAlign="center"
              transform={pacote.isFeatured ? 'scale(1.05)' : 'none'}
              zIndex={pacote.isFeatured ? 1 : 0}
            >
              {pacote.isFeatured && (
                <Box display="flex" justifyContent="center">
                  <Text
                    textStyle="eyebrow"
                    bg={accent}
                    color={primaryButtonText}
                    px={4}
                    py={1}
                    borderRadius="full"
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                  >
                    <Icon as={FiStar} /> Mais Popular
                  </Text>
                </Box>
              )}
              <VStack spacing={1}>
                <Heading fontSize="2xl" color={primaryText} fontWeight="bold">
                  {pacote.title}
                </Heading>
                <Text color={secondaryText}>{pacote.description}</Text>
              </VStack>

              <Text fontSize="4xl" fontWeight="extrabold" color={accent}>
                {pacote.price}
              </Text>

              <List spacing={3} textAlign="left">
                {pacote.features.map((feature) => (
                  <ListItem key={feature} display="flex" alignItems="center">
                    <ListIcon as={FiCheck} color={accent} boxSize={5} />
                    <Text as="span" color={secondaryText}>{feature}</Text>
                  </ListItem>
                ))}
              </List>

              <Button
                as="a"
                href="#"
                bg={pacote.isFeatured ? accent : 'transparent'}
                color={pacote.isFeatured ? primaryButtonText : accent}
                borderWidth={pacote.isFeatured ? 0 : '2px'}
                borderColor={accent}
                boxShadow={pacote.isFeatured ? primaryButtonShadow : 'none'}
                transition="all 0.2s ease"
                _hover={{
                  filter: 'brightness(1.05)',
                  transform: 'translateY(-2px)',
                  boxShadow: primaryButtonShadow,
                }}
                _active={{ transform: 'translateY(0)' }}
                borderRadius="full"
                px={8}
                py={6}
                w="full"
              >
                Contratar
              </Button>
            </VStack>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  )
}
