import { Heading, Text, Stack, Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Stack spacing={12}>
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
