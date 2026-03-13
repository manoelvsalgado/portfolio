import { Box, Container, Flex, Heading, Button, HStack, IconButton, useDisclosure, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Menu, MenuButton, MenuList, MenuItem, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';
import { FiChevronDown, FiCheck, FiMoon, FiSun } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const headerBg = useColorModeValue('white', 'gray.900');
  const menuListBg = useColorModeValue('white', 'gray.800');

  const navItems = [
    { label: t('header.nav.about'), href: '#sobre' },
    { label: t('header.nav.skills'), href: '#skills' },
    { label: t('header.nav.projects'), href: '#projetos' },
    { label: t('header.nav.contact'), href: '#contato' }
  ];

  const languages = [
    { code: 'pt', label: 'PT', flag: '🇧🇷', fullName: t('languageNames.pt') },
    { code: 'en', label: 'EN', flag: '🇺🇸', fullName: t('languageNames.en') },
    { code: 'es', label: 'ES', flag: '🇪🇸', fullName: t('languageNames.es') },
  ];

  const currentLang = languages.find(l => i18n.language.startsWith(l.code)) ?? languages[0];

  const LanguageMenu = () => (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        variant="ghost"
        colorScheme="blue"
        leftIcon={<MdLanguage />}
        rightIcon={<FiChevronDown />}
        aria-label={t('header.language')}
      >
        <Text as="span" fontWeight="semibold">{currentLang.label}</Text>
      </MenuButton>
      <MenuList minW="140px" shadow="md" bg={menuListBg}>
        {languages.map((language) => {
          const isActive = i18n.language.startsWith(language.code);
          return (
            <MenuItem
              key={language.code}
              onClick={() => i18n.changeLanguage(language.code)}
              fontWeight={isActive ? 'bold' : 'normal'}
              color={isActive ? 'blue.600' : 'inherit'}
              icon={<Text as="span">{language.flag}</Text>}
            >
              <Flex justifyContent="space-between" alignItems="center" w="full">
                <Text>{language.fullName}</Text>
                {isActive && <FiCheck />}
              </Flex>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <Box 
      as="header" 
      position="fixed" 
      top={0} 
      left={0} 
      right={0} 
      zIndex={1000}
      bg={headerBg}
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Heading as="h1" size="md" color="blue.600" cursor="pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Manoel Salgado         
            </Heading>
          
          {/* Desktop Navigation */}
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </Button>
            ))}
            <Box pl={2}>
              <LanguageMenu />
            </Box>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
              onClick={toggleColorMode}
              variant="ghost"
              colorScheme="blue"
              size="sm"
            />
          </HStack>

          {/* Mobile Menu Button */}
          <HStack display={{ base: 'flex', md: 'none' }} spacing={1}>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
              onClick={toggleColorMode}
              variant="ghost"
              colorScheme="blue"
              size="sm"
            />
            <IconButton
              onClick={onOpen}
              icon={<HiMenu />}
              variant="ghost"
              aria-label={t('header.openMenu')}
            />
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{t('header.menu')}</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <LanguageMenu />
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  w="full"
                  justifyContent="flex-start"
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
