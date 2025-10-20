import {
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  VStack,
  Button,
  Image,
  useColorModeValue,
  Wrap,
  Grid,
  Flex,
  Icon,
} from '@chakra-ui/react'
import { FaInstagram } from 'react-icons/fa'

export default function Home() {
  const accent = useColorModeValue('#A6776A', '#CE9C90')
  const primaryText = useColorModeValue('#2D2422', 'whiteAlpha.900')
  const secondaryText = useColorModeValue('rgba(45, 36, 34, 0.72)', 'rgba(255,255,255,0.72)')
  const brandChipBg = useColorModeValue('rgba(206, 156, 144, 0.22)', 'rgba(166,119,106,0.12)')
  const brandChipBorder = useColorModeValue('rgba(166,119,106,0.35)', 'rgba(206,156,144,0.24)')
  const primaryButtonText = useColorModeValue('#2D2422', '#021015')
  const imageBorder = useColorModeValue('rgba(206,156,144,0.4)', 'rgba(206,156,144,0.3)')
  const imageShadow = useColorModeValue('0 25px 55px rgba(166,119,106,0.28)', '0 22px 45px rgba(0,0,0,0.55)')

  const brands = ['Instagram', 'TikTok', 'YouTube', 'Monos', 'Samsung', 'Voluspa']
  const heroImages = [
    {
      src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
      alt: 'Produção de conteúdo em estúdio',
    },
    {
      src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
      alt: 'Registro de campanha para redes sociais',
    },
    {
      src: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=800&q=80',
      alt: 'Making of de sessão fotográfica',
    },
  ]

  return (
    <Stack spacing={16}>
      <SimpleGrid
        as="section"
        id="destaque"
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 12, lg: 16 }}
        alignItems="center"
        py={{ base: 8, md: 12 }}
      >
        <VStack align="flex-start" spacing={6} maxW={{ base: 'full', md: 'xl' }}>
          <Heading
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
            color={primaryText}
            lineHeight={{ base: 1.05, md: 1.1 }}
            fontWeight="extrabold"
            whiteSpace="nowrap"
          >
            Raíssa Albuquerque
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color={accent} fontStyle="italic">
            A blogueira de milhões 👑
          </Text>
          <VStack align="flex-start" spacing={2} color={secondaryText} fontSize="lg" maxW="2xl">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula vitae
              felis interdum feugiat a eget metus.
            </Text>
            <Text>
              Integer malesuada, neque sed fringilla ultricies, felis massa volutpat nibh, ut
              imperdiet justo mi at dolor.
            </Text>
          </VStack>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} w="full">
            <Button
              as="a"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              bg={accent}
              color={primaryButtonText}
              _hover={{ filter: 'brightness(1.05)', transform: 'translateY(-1px)' }}
              borderRadius="full"
              px={8}
              w={{ base: 'full', sm: 'auto' }}
              leftIcon={<Icon as={FaInstagram} boxSize={5} />}
            >
              Ver perfil no Instagram
            </Button>
          </Stack>
        </VStack>

        <Flex direction="column" w="full" gap={{ base: 8, md: 10 }}>
          <Grid
            templateColumns={{ base: 'repeat(1, minmax(0, 1fr))', sm: 'repeat(2, minmax(0, 1fr))' }}
            templateRows={{ base: 'repeat(3, minmax(0, 150px))', sm: 'repeat(2, minmax(0, 180px))' }}
            gap={{ base: 4, md: 3 }}
            w="full"
          >
            {heroImages.map((image, index) => (
              <Box
                key={image.src}
                borderRadius="2xl"
                overflow="hidden"
                borderWidth="1px"
                borderColor={imageBorder}
                boxShadow={imageShadow}
                gridColumn={{ base: 'auto', sm: index === 0 ? '1 / 2' : '2 / 3' }}
                gridRow={{ base: 'auto', sm: index === 0 ? '1 / span 2' : index === 1 ? '1 / 2' : '2 / 3' }}
              >
                <Image src={image.src} alt={image.alt} objectFit="cover" h="full" w="full" />
              </Box>
            ))}
          </Grid>

          <VStack align="flex-start" spacing={3}>
            <Text fontWeight="semibold" color={secondaryText} textTransform="uppercase" fontSize="sm">
              Marcas parceiras
            </Text>
            <Wrap spacing={3} shouldWrapChildren>
              {brands.map((brand) => (
                <Box
                  key={brand}
                  px={4}
                  py={2}
                  borderRadius="full"
                  bg={brandChipBg}
                  borderWidth="1px"
                  borderColor={brandChipBorder}
                  color={primaryText}
                  fontWeight="medium"
                  fontSize="sm"
                >
                  {brand}
                </Box>
              ))}
            </Wrap>
          </VStack>
        </Flex>
      </SimpleGrid>

      <Box as="section" id="sobre" pt={4}>
        <Heading mb={2}>Sobre</Heading>
        <Text>
          Esta é a seção "Sobre". Substitua por seu conteúdo real sobre você ou o projeto.
        </Text>
      </Box>

      <Box as="section" id="projetos">
        <Heading mb={2}>Projetos</Heading>
        <Text>
          Aqui você pode listar seus projetos, estudos de caso ou trabalhos recentes.
        </Text>
      </Box>

      <Box as="section" id="contato" pb={8}>
        <Heading mb={2}>Contato</Heading>
        <Text>
          Deixe informações de contato ou um formulário. O botão do WhatsApp na navegação também está disponível.
        </Text>
      </Box>
    </Stack>
  )
}
