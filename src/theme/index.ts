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

export const theme = extendTheme({
  config,
  colors,
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
