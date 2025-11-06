import { Box, Heading, Text, Stack, SimpleGrid, VStack, Icon } from '@chakra-ui/react'
import { FiCheckCircle } from 'react-icons/fi'

const VALORES_DATA = [
	{
		title: 'Autenticidade',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
	},
	{
		title: 'Qualidade',
		description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
	},
	{
		title: 'Criatividade',
		description:
			'Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.',
	},
	{
		title: 'Consistência',
		description:
			'Maecenas sed diam eget risus varius blandit sit amet non magna.',
	},
]

interface ValoresProps {
	accent: string
	primaryText: string
	secondaryText: string
	mutedSurface: string
	mutedBorder: string
	mutedShadow: string
}

export default function Valores({
	accent,
	primaryText,
	secondaryText,
	mutedSurface,
	mutedBorder,
	mutedShadow,
}: ValoresProps) {
	return (
		<Box as="section" id="valores" w="full" py={{ base: 10, md: 14 }}>
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
						Valores e Princípios
					</Heading>
					<Text mt={3} color={secondaryText}>
						Os pilares que sustentam a criação de conteúdo e a relação com a
						comunidade e parceiros.
					</Text>
				</Box>

				<SimpleGrid
					columns={{ base: 1, sm: 2, lg: 4 }}
					spacing={{ base: 5, lg: 8 }}
					w="full"
				>
					{VALORES_DATA.map((item) => (
						<VStack
							key={item.title}
							spacing={4}
							bg={mutedSurface}
							borderRadius="2xl"
							borderWidth="1px"
							borderColor={mutedBorder}
							p={{ base: 6, md: 8 }}
							boxShadow={mutedShadow}
							align="center"
							textAlign="center"
						>
							<Icon as={FiCheckCircle} boxSize={8} color={accent} />
							<Heading
								fontSize="xl"
								color={primaryText}
								fontWeight="bold"
							>
								{item.title}
							</Heading>
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
