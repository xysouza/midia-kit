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
import { FiUsers, FiDollarSign, FiTrendingUp } from 'react-icons/fi'
import bubbleLaundryLogo from '../assets/img/bubble_laundry.jpg'
import landimFolheadosLogo from '../assets/img/landim_folheados.jpg'
import narcisoEnxovaisLogo from '../assets/img/narciso_enxovais.jpg'
import oticasDinizLogo from '../assets/img/oticas_diniz.png'

export default function Home() {
  const accent = useColorModeValue('#A6776A', '#CE9C90')
  const primaryText = useColorModeValue('#2D2422', 'whiteAlpha.900')
  const secondaryText = useColorModeValue('rgba(45, 36, 34, 0.72)', 'rgba(255,255,255,0.72)')
  const primaryButtonText = useColorModeValue('#2D2422', '#021015')
  const imageBorder = useColorModeValue('rgba(206,156,144,0.4)', 'rgba(206,156,144,0.3)')
  const imageShadow = useColorModeValue('0 25px 55px rgba(166,119,106,0.28)', '0 22px 45px rgba(0,0,0,0.55)')
  const reachSurface = useColorModeValue('rgba(238,228,219,0.6)', 'rgba(35,24,22,0.85)')
  const reachCardBg = useColorModeValue('rgba(255, 250, 246, 0.78)', 'rgba(27, 18, 16, 0.9)')
  const reachCardBorder = useColorModeValue('rgba(206,156,144,0.3)', 'rgba(166,119,106,0.35)')
  const reachIconBg = useColorModeValue('rgba(214,173,160,0.25)', 'rgba(166,119,106,0.35)')
  const reachAccentText = useColorModeValue('#2D2422', '#F9F5F2')
  const reachCardShadow = useColorModeValue('0 18px 45px rgba(166,119,106,0.16)', '0 18px 30px rgba(0,0,0,0.55)')

  const partners = [
    { src: bubbleLaundryLogo, alt: 'Bubble Laundry' },
    { src: landimFolheadosLogo, alt: 'Landim Folheados' },
    { src: narcisoEnxovaisLogo, alt: 'Narciso Enxovais' },
    { src: oticasDinizLogo, alt: 'Óticas Diniz' },
  ]
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
  const reachStats = [
    {
      icon: FiUsers,
      value: '88%',
      title: 'Confiança orgânica',
      description: 'das pessoas confiam em indicações de quem conhecem.',
    },
    {
      icon: FiDollarSign,
      value: '5,7x',
      title: 'Retorno por investimento',
      description: 'cada R$1 investido em influência gera até R$5,78 em retorno.',
    },
    {
      icon: FiTrendingUp,
      value: '73%',
      title: 'Decisão de compra',
      description: 'relatam se sentir mais confiantes após ver conteúdo autoral.',
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
          <Text textStyle="subtitle" color={accent}>
            A blogueira de milhões 👑
          </Text>
          <VStack align="flex-start" spacing={2} color={secondaryText} maxW="2xl">
            <Text textStyle="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula vitae
              felis interdum feugiat a eget metus.
            </Text>
            <Text textStyle="body">
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
            <Text textStyle="eyebrow" color={secondaryText}>
              Marcas parceiras
            </Text>
            <Wrap spacing={{ base: 6, md: 10 }} align="center">
              {partners.map(({ src, alt }) => (
                <Box key={alt} display="flex" alignItems="center" justifyContent="center">
                  <Image
                    src={src}
                    alt={alt}
                    maxH={{ base: '28px', md: '68px' }}
                    objectFit="contain"
                    filter="grayscale(100%) opacity(0.65)"
                    transition="all 0.2s ease"
                    _hover={{ filter: 'grayscale(0%) opacity(1)', transform: 'translateY(-2px)' }}
                    borderRadius="full"
                  />
                </Box>
              ))}
            </Wrap>
          </VStack>
        </Flex>
      </SimpleGrid>

      <Box
        as="section"
        id="alcance"
        w="100vw"
        position="relative"
        left="50%"
        right="50%"
        ml="-50vw"
        mr="-50vw"
        bg={reachSurface}
        py={{ base: 10, md: 14 }}
        boxShadow={useColorModeValue('0 24px 70px rgba(166,119,106,0.18)', '0 20px 55px rgba(0,0,0,0.6)')}
      >
        <Stack
          spacing={{ base: 8, md: 10 }}
          align="center"
          textAlign="center"
          maxW="6xl"
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
              O futuro da confiança entre marcas e audiência é construído com autenticidade
            </Heading>
            <Text mt={3} color={secondaryText} textStyle="body">
              Métricas reais de campanhas recentes comprovam como presença digital humanizada
              acelera decisões de compra e fortalece a lembrança de marca.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} w="full">
            {reachStats.map((stat) => (
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
