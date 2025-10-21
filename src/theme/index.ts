import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

// Custom palette from art direction
const colors = {
  palette: {
    lightBg: '#EEE4DB', // Fundo principal/claro
    darkBg: '#1C1412', // Fundo escuro (escolhido para combinar com a paleta)
    card1: '#E6D0CA', // Tons de transição/cards
    card2: '#D8AE9C',
    accent: '#CE9C90', // Destaques/texto principal
    accent2: '#A6776A',
  },
}

const fonts = {
  heading: `'Poppins', 'Inter Variable', sans-serif`,
  body: `'Inter Variable', 'Inter', sans-serif`,
}

const textStyles = {
  eyebrow: {
    fontSize: 'sm',
    letterSpacing: '0.28em',
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  subtitle: {
    fontSize: { base: 'md', md: 'lg' },
    fontStyle: 'italic',
    fontWeight: 500,
  },
  body: {
    fontSize: 'md',
    lineHeight: 'tall',
    fontWeight: 400,
  },
}

const components = {
  Heading: {
    baseStyle: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
  },
  Text: {
    baseStyle: {
      letterSpacing: '-0.005em',
    },
  },
  Button: {
    baseStyle: {
      borderRadius: 'full',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  Link: {
    baseStyle: {
      fontWeight: 500,
      _hover: {
        textDecoration: 'none',
      },
    },
  },
}

export const theme = extendTheme({
  config,
  colors,
  fonts,
  textStyles,
  components,
  styles: {
    global: (props: { colorMode: 'light' | 'dark' }) => ({
      'html, body, #root': {
        height: '100%'
      },
      body: {
        bg: props.colorMode === 'light' ? 'palette.lightBg' : 'palette.darkBg',
        color: props.colorMode === 'light' ? '#2D2422' : 'whiteAlpha.900',
      },
    }),
  },
})

export default theme
