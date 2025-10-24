import {
  Box,
  Flex,
  Heading,
  Link,
  HStack,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  VStack,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FiMenu } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { useMemo, useState, useEffect } from 'react';
import { keyframes } from '@emotion/react';
import { smoothScrollTo } from '../utils/smoothScroll';

// Animações para o drawer mobile
const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// Animação escalonada para os links mobile
const slideUpStaggered = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === 'light';
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para deixar o header mais sólido ao rolar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Função para navegação suave entre seções
  const handleSmoothScroll = (href: string) => {
    if (href.startsWith('#')) {
      // Ajuste de offset para sticky header (~64px)
      const offset = 72;
      smoothScrollTo(href, { duration: 650, offset, updateHash: true });
    }
    onClose(); // Fecha o drawer se estiver aberto
  };

  const whatsappHref = useMemo(() => {
    const mensagem =
      'Olá, Adriano! Vim pelo portfólio e gostaria de conversar.';
    return `https://wa.me/5581987352002?text=${encodeURIComponent(mensagem)}`;
  }, []);

  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  // Palette mapping
  const accent = useColorModeValue('#A6776A', '#CE9C90');
  const textMuted = useColorModeValue('rgba(0,0,0,0.72)', 'rgba(255,255,255,0.82)');
  const navBg = useColorModeValue('rgba(238, 228, 219, 0.7)', 'rgba(28, 20, 18, 0.8)');
  const borderColor = useColorModeValue('rgba(0,0,0,0.08)', 'rgba(255,255,255,0.08)');
  const hoverBg = useColorModeValue('rgba(166, 119, 106, 0.08)', 'rgba(206, 156, 144, 0.16)');
  const drawerBg = useColorModeValue('rgba(243, 233, 222, 0.96)', 'rgba(16, 12, 11, 0.95)');
  const drawerBgGradient = useColorModeValue(
    'linear-gradient(180deg, rgba(230, 208, 202, 0.9) 0%, rgba(238, 228, 219, 0.95) 40%, rgba(238, 228, 219, 0.92) 100%)',
    'linear-gradient(180deg, rgba(21, 16, 14, 0.95) 0%, rgba(16, 12, 11, 0.95) 50%, rgba(26, 20, 18, 0.92) 100%)'
  );
  const drawerBorderColor = useColorModeValue('rgba(166,119,106,0.35)', 'rgba(206,156,144,0.18)');
  const headerTextColor = useColorModeValue('#2D2422', 'white');
  const iconColor = useColorModeValue('#2D2422', 'white');
  const btnTextColor = useColorModeValue('#2D2422', '#021015');
  const btnShadow = useColorModeValue('0 18px 40px rgba(166,119,106,0.25)', '0 18px 40px rgba(206,156,144,0.25)');
  const btnShadowHover = useColorModeValue('0 22px 52px rgba(166,119,106,0.32)', '0 22px 52px rgba(206,156,144,0.32)');
  const boxShadowHover = useColorModeValue('0 28px 65px rgba(166,119,106,0.35)', '0 28px 65px rgba(206,156,144,0.35)');
  const btnShadowStrong = useColorModeValue('0 24px 55px rgba(166,119,106,0.30)', '0 24px 55px rgba(206,156,144,0.30)');
  const drawerLinkColor = useColorModeValue('#2D2422', 'whiteAlpha.900');
  const drawerLinkBg = useColorModeValue('rgba(230, 208, 202, 0.6)', 'rgba(40, 24, 22, 0.82)');
  const drawerLinkHoverBorder = useColorModeValue('rgba(166,119,106,0.35)', 'rgba(206,156,144,0.35)');
  const linkHoverShadow = useColorModeValue('0 6px 18px rgba(166,119,106,0.18)', '0 6px 20px rgba(206,156,144,0.22)');
  const linkActiveBg = useColorModeValue('rgba(166,119,106,0.18)', 'rgba(206,156,144,0.24)');
  const linkActiveShadow = useColorModeValue('0 4px 16px rgba(166,119,106,0.18)', '0 4px 16px rgba(206,156,144,0.26)');
  const linkFocusBorder = useColorModeValue('rgba(166,119,106,0.45)', 'rgba(206,156,144,0.45)');

  const linkStyles = {
    position: 'relative',
    fontWeight: 'medium',
    fontSize: 'sm',
    letterSpacing: '0.04em',
    color: textMuted,
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    px: '4',
    py: '2.5',
    borderRadius: 'full',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2',
    _hover: {
      color: accent,
      textDecoration: 'none',
      bg: hoverBg,
      boxShadow: linkHoverShadow,
    },
    _active: {
      bg: linkActiveBg,
      color: accent,
      boxShadow: linkActiveShadow,
    },
    _focusVisible: {
      outline: 'none',
      boxShadow: `0 0 0 2px ${linkFocusBorder}`,
    },
  } as const;

  const navBgWithScroll = scrolled ? navBg : navBg;
  const shadow = scrolled
    ? '0 10px 28px -8px rgba(0,0,0,0.25)'
    : '0 4px 18px -6px rgba(0,0,0,0.15)';

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="banner"
      backdropFilter="blur(18px) saturate(160%)"
      bg={navBgWithScroll}
      borderBottom={`1px solid ${borderColor}`}
      boxShadow={shadow}
      transition="background-color .35s ease, box-shadow .35s ease, border-color .35s ease"
      _before={{
        content: '""',
        position: 'absolute',
        inset: '0',
        pointerEvents: 'none',
        background: scrolled
          ? 'linear-gradient(180deg, rgba(166,119,106,0.10) 0%, rgba(166,119,106,0) 60%)'
          : 'linear-gradient(180deg, rgba(206,156,144,0.12) 0%, rgba(206,156,144,0) 70%)',
        opacity: scrolled ? 0.25 : 0.3,
        mixBlendMode: 'overlay',
        borderRadius: '0 0 0 0',
      }}
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        w="full"
        py={{ base: '3', md: '4' }}
        px={{ base: '4', md: '8' }}
        maxW="7xl"
        mx="auto"
      >
        <Heading size="md" color={headerTextColor} letterSpacing="tight">
          Midia Kit
        </Heading>

        <HStack spacing="6" display={{ base: 'none', md: 'flex' }}>
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              {...linkStyles}
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(item.href);
              }}
            >
              {item.label}
            </Link>
          ))}
        </HStack>

        <HStack spacing={3}>
          <IconButton
            aria-label={isLight ? 'Ativar modo escuro' : 'Desativar modo escuro'}
            onClick={toggleColorMode}
            display={{ base: 'none', md: 'inline-flex' }}
            variant="ghost"
            color={iconColor}
            borderRadius="full"
            size="md"
            icon={isLight ? <MoonIcon /> : <SunIcon />}
          />

          <Button
          as="a"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          display={{ base: 'none', md: 'inline-flex' }}
          color={btnTextColor}
          bg={accent}
          borderRadius="full"
          fontWeight="semibold"
          px="7"
          py="2.5"
          transition="all 0.2s ease"
          boxShadow={btnShadow}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: btnShadowHover,
            filter: 'brightness(1.1)',
          }}
        >
          <FaWhatsapp /> Fale no WhatsApp
          </Button>
        </HStack>

        {/* Mobile menu trigger */}
        <IconButton
          aria-label="Abrir menu"
          display={{ base: 'inline-flex', md: 'none' }}
          variant="ghost"
          color={iconColor}
          borderRadius="full"
          size="lg"
          transition="all 0.2s ease"
          _hover={{
            bg: hoverBg,
            transform: 'scale(1.05)',
          }}
          _active={{
            transform: 'scale(0.95)',
          }}
          onClick={onOpen}
        >
          <FiMenu />
        </IconButton>

        {/* Drawer (mobile) */}
        <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay
            bg="blackAlpha.600"
            backdropFilter="blur(10px)"
            css={{
              animation: isOpen
                ? `${fadeIn} 0.3s ease-out`
                : `${fadeOut} 0.2s ease-in`,
            }}
          />
          <DrawerContent
            bg={drawerBg}
            bgGradient={drawerBgGradient}
            color={useColorModeValue('#2D2422', 'whiteAlpha.900')}
            borderRadius={{ base: '2xl', sm: '3xl' }}
            mx={{ base: '4', sm: '8' }}
            my={{ base: '5', sm: '8' }}
            borderWidth="1px"
            borderColor={drawerBorderColor}
            boxShadow={useColorModeValue(
              '0 28px 45px rgba(166,119,106,0.25)',
              '0 28px 55px rgba(10, 6, 5, 0.75)'
            )}
            css={{
              animation: isOpen
                ? `${slideInRight} 0.4s cubic-bezier(0.16, 1, 0.3, 1)`
                : `${slideOutRight} 0.3s cubic-bezier(0.7, 0, 0.84, 0)`,
            }}
          >
            <DrawerCloseButton _hover={{ bg: hoverBg }} />
            <DrawerHeader
              borderBottomWidth="1px"
              borderColor={drawerBorderColor}
              px={{ base: 5, sm: 6 }}
              py={{ base: 4, sm: 5 }}
            >
              Navegação
            </DrawerHeader>
            <DrawerBody
              display="flex"
              flexDirection="column"
              gap={{ base: 6, sm: 8 }}
              px={{ base: 5, sm: 6 }}
              py={{ base: 6, sm: 7 }}
            >
              <HStack
                justify="space-between"
                align="center"
                mb={2}
                px={3}
                py={2}
                borderRadius="lg"
                bg={useColorModeValue('rgba(230, 208, 202, 0.55)', 'rgba(40, 30, 28, 0.75)')}
                borderWidth="1px"
                borderColor={drawerBorderColor}
              >
                <Text fontWeight="medium" color={drawerLinkColor}>
                  Tema
                </Text>
                <IconButton
                  aria-label={isLight ? 'Ativar modo escuro' : 'Desativar modo escuro'}
                  onClick={toggleColorMode}
                  variant="ghost"
                  size="sm"
                  borderRadius="full"
                  icon={isLight ? <MoonIcon /> : <SunIcon />}
                />
              </HStack>

              <VStack as="nav" spacing={3} align="stretch">
                {links.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    fontSize="md"
                    color={drawerLinkColor}
                    fontWeight="medium"
                    letterSpacing="0.05em"
                    px="5"
                    py="3"
                    borderRadius="full"
                    transition="all 0.2s ease"
                    borderWidth="1px"
                    borderColor={drawerBorderColor}
                    bg={drawerLinkBg}
                    css={{
                      animation: isOpen
                        ? `${slideUpStaggered} 0.5s ease-out ${index * 0.1 + 0.2}s both`
                        : 'none',
                    }}
                    _hover={{
                      color: accent,
                      bg: hoverBg,
                      borderColor: drawerLinkHoverBorder,
                      transform: 'translateY(-2px)',
                    }}
                    _active={{
                      transform: 'translateY(0)',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll(item.href);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </VStack>

              <Box
                h="1px"
                w="full"
                bg={useColorModeValue('rgba(166,119,106,0.25)', 'rgba(206,156,144,0.15)')}
                borderRadius="full"
                css={{
                  animation: isOpen
                    ? `${slideUpStaggered} 0.5s ease-out 0.5s both`
                    : 'none',
                }}
              />

              <Button
                as="a"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                borderRadius="full"
                bg={accent}
                color={btnTextColor}
                fontWeight="semibold"
                py="3"
                px="6"
                boxShadow={btnShadowStrong}
                css={{
                  animation: isOpen
                    ? `${slideUpStaggered} 0.6s ease-out 0.6s both`
                    : 'none',
                }}
                _active={{ transform: 'translateY(1px)' }}
                _hover={{
                  transform: 'translateY(-2px)',
                  filter: 'brightness(1.08)',
                  boxShadow: boxShadowHover,
                }}
                width="full"
                onClick={onClose}
              >
                <FaWhatsapp /> Falar no WhatsApp
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Nav;