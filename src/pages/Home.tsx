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
  type BoxProps,
} from '@chakra-ui/react'
import { FaInstagram } from 'react-icons/fa'
import bubbleLaundryLogo from '../assets/img/bubble_laundry.jpg'
import landimFolheadosLogo from '../assets/img/landim_folheados.jpg'
import narcisoEnxovaisLogo from '../assets/img/narciso_enxovais.jpg'
import oticasDinizLogo from '../assets/img/oticas_diniz.png'

import Alcance from '../components/sections/Alcance'
import Publico from '../components/sections/Publico'
import Valores from '../components/sections/Valores'
import Pacotes from '../components/sections/Pacotes'
import Footer from '../components/sections/Footer'

type ContentSection = {
  id: string
  title: string
  description: string
  boxProps?: BoxProps
}

const PARTNERS = [
  { src: bubbleLaundryLogo, alt: 'Bubble Laundry' },
  { src: landimFolheadosLogo, alt: 'Landim Folheados' },
  { src: narcisoEnxovaisLogo, alt: 'Narciso Enxovais' },
  { src: oticasDinizLogo, alt: 'Óticas Diniz' },
]

const HERO_IMAGES = [
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

const CONTENT_SECTIONS: ContentSection[] = [
  {
    id: 'sobre',
    title: 'Sobre',
    description: 'Esta é a seção "Sobre". Substitua por seu conteúdo real sobre você ou o projeto.',
    boxProps: { pt: 4 },
  },
  {
    id: 'projetos',
    title: 'Projetos',
    description: 'Aqui você pode listar seus projetos, estudos de caso ou trabalhos recentes.',
  },
  {
    id: 'contato',
    title: 'Contato',
    description:
      'Deixe informações de contato ou um formulário. O botão do WhatsApp na navegação também está disponível.',
    boxProps: { pb: 8 },
  },
]

export default function Home() {
  const accent = useColorModeValue('#A6776A', '#CE9C90')
  const primaryText = useColorModeValue('#2D2422', 'whiteAlpha.900')
  const secondaryText = useColorModeValue('rgba(45, 36, 34, 0.72)', 'rgba(255,255,255,0.72)')
  const primaryButtonText = useColorModeValue('#2D2422', '#021015')
  const imageBorder = useColorModeValue('rgba(206,156,144,0.4)', 'rgba(206,156,144,0.3)')
  const imageShadow = useColorModeValue('0 25px 55px rgba(166,119,106,0.28)', '0 22px 45px rgba(0,0,0,0.55)')
  const reachCardBg = useColorModeValue('rgba(255, 250, 246, 0.78)', 'rgba(27, 18, 16, 0.9)')
  const reachCardBorder = useColorModeValue('rgba(206,156,144,0.3)', 'rgba(166,119,106,0.35)')
  const reachIconBg = useColorModeValue('rgba(214,173,160,0.25)', 'rgba(166,119,106,0.35)')
  const reachAccentText = useColorModeValue('#2D2422', '#F9F5F2')
  const reachCardShadow = useColorModeValue('0 18px 45px rgba(166,119,106,0.16)', '0 18px 30px rgba(0,0,0,0.55)')
  const pageBg = useColorModeValue('#F9F5F2', '#150F0D')
  const heroSurface = useColorModeValue('rgba(255, 255, 255, 0.88)', 'rgba(25, 16, 14, 0.92)')
  const mutedSurface = useColorModeValue('rgba(255, 255, 255, 0.95)', 'rgba(18, 12, 11, 0.9)')
  const mutedBorder = useColorModeValue('rgba(206,156,144,0.24)', 'rgba(166,119,106,0.38)')
  const mutedShadow = useColorModeValue('0 18px 45px rgba(166,119,106,0.14)', '0 16px 40px rgba(0,0,0,0.55)')
  const badgeBg = useColorModeValue('rgba(223,195,187,0.24)', 'rgba(206,156,144,0.18)')
  const partnersBandBg = useColorModeValue('rgba(255, 255, 255, 0.75)', 'rgba(26, 18, 16, 0.92)')
  const reachBgGradient = useColorModeValue(
    'linear-gradient(125deg, rgba(238,228,219,0.95) 0%, rgba(214,173,160,0.75) 100%)',
    'linear-gradient(125deg, rgba(26,18,16,0.92) 0%, rgba(54,34,30,0.88) 100%)'
  )
  const primaryButtonShadow = useColorModeValue('0 18px 30px rgba(166,119,106,0.28)', '0 18px 30px rgba(0,0,0,0.55)')
  const headingShadow = useColorModeValue('0 18px 35px rgba(166,119,106,0.25)', '0 12px 24px rgba(0,0,0,0.65)')

  return (
    <Box bg={pageBg} pt={0} pb={{ base: 12, md: 16 }}>
      <Stack spacing={0} w="full" px={0}>
        <Box as="section" id="destaque" w="full" bg={heroSurface} py={{ base: 8, md: 12 }}>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 12, lg: 16 }}
            alignItems="center"
            maxW={{ base: 'full', xl: '7xl' }}
            mx="auto"
            px={{ base: 6, sm: 8, md: 12 }}
          >
            <VStack align="flex-start" spacing={{ base: 6, md: 7 }} maxW={{ base: 'full', md: 'xl' }}>
              <Heading
                fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
                color={primaryText}
                lineHeight={{ base: 1.05, md: 1.1 }}
                fontWeight="extrabold"
                whiteSpace="nowrap"
                letterSpacing="-0.02em"
                textShadow={headingShadow}
              >
                Lorem ipsum
              </Heading>
              <Text
                textStyle="subtitle"
                color={accent}
                bg={badgeBg}
                px={4}
                py={1}
                borderRadius="full"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Lorem ipsum ✨
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
                  boxShadow={primaryButtonShadow}
                  transition="all 0.2s ease"
                  _hover={{ filter: 'brightness(1.05)', transform: 'translateY(-2px)', boxShadow: primaryButtonShadow }}
                  _active={{ transform: 'translateY(0)' }}
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
                {HERO_IMAGES.map((image, index) => (
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

              <VStack align="stretch" spacing={4}>
                <Text textStyle="eyebrow" color={secondaryText} letterSpacing="0.2em">
                  Marcas parceiras
                </Text>
                <Box
                  bg={partnersBandBg}
                  px={{ base: 4, md: 8 }}
                  py={{ base: 4, md: 5 }}
                >
                  <Wrap spacing={{ base: 6, md: 8 }} align="center" justify="space-between">
                    {PARTNERS.map(({ src, alt }) => (
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
                </Box>
              </VStack>
            </Flex>
          </SimpleGrid>
        </Box>

        <Alcance
          accent={accent}
          secondaryText={secondaryText}
          reachBgGradient={reachBgGradient}
          reachAccentText={reachAccentText}
          reachCardBg={reachCardBg}
          reachCardBorder={reachCardBorder}
          reachIconBg={reachIconBg}
          reachCardShadow={reachCardShadow}
        />

        {CONTENT_SECTIONS.map(({ id, title, description, boxProps }) => (
          <Box
            as="section"
            key={id}
            id={id}
            mt={{ base: 12, md: 16 }}
            maxW={{ base: 'full', xl: '7xl' }}
            mx="auto"
            px={{ base: 4, md: 8 }}
            {...boxProps}
          >
            <Stack
              spacing={3}
              bg={mutedSurface}
              borderRadius="2xl"
              borderWidth="1px"
              borderColor={mutedBorder}
              boxShadow={mutedShadow}
              px={{ base: 5, md: 8 }}
              py={{ base: 6, md: 8 }}
            >
              <Heading fontSize={{ base: '2xl', md: '3xl' }} color={primaryText}>
                {title}
              </Heading>
              <Text color={secondaryText} maxW="3xl">
                {description}
              </Text>
            </Stack>
          </Box>
        ))}
      </Stack>

      <Publico />
      <Valores />
      <Pacotes />
      <Footer />
    </Box>
  )
}
