import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Image,
  Stack,
  VStack,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const encodePath = (...parts: string[]) =>
  `${import.meta.env.BASE_URL}docs/${parts.map((p) => encodeURIComponent(p)).join('/')}`;

const curriculumVersions = [
  {
    label: 'Português',
    href: encodePath('cvs', 'CV - Manoel Salgado (PT) - 030626.pdf'),
    fileName: 'CV - Manoel Salgado (PT) - 030626.pdf',
  },
  {
    label: 'English',
    href: encodePath('cvs', 'CV - Manoel Salgado (EN) - 030626.pdf'),
    fileName: 'CV - Manoel Salgado (EN) - 030626.pdf',
  },
];

type Downloadable = {
  href: string;
  fileName: string;
};

type DownloadItem = Downloadable & {
  labelKey: string;
  title: string;
};

const downloads: DownloadItem[] = [
  {
    labelKey: 'hero.downloadDissertation',
    title: 'Dissertação de Mestrado (Manoel Salgado)',
    href: encodePath('dissertation', 'Dissertação de Mestrado (Manoel Salgado).pdf'),
    fileName: 'Dissertação de Mestrado (Manoel Salgado).pdf',
  },
  {
    labelKey: 'hero.downloadDefense',
    title: 'Defesa de Dissertação - Apresentação (pptx)',
    href: encodePath('dissertation defense', 'Defesa de Dissertação - Manoel Salgado (2026).pptx'),
    fileName: 'Defesa de Dissertação - Manoel Salgado (2026).pptx',
  },
  {
    labelKey: 'hero.downloadArticle',
    title: 'Collaborative and AI-Supported Requirements Elicitation: An Empirical Study',
    href: encodePath('articles', 'Collaborative and AI-Supported Requirements Elicitation: An Empirical Study.pdf'),
    fileName: 'Collaborative and AI-Supported Requirements Elicitation: An Empirical Study.pdf',
  },
  {
    labelKey: 'hero.downloadConference',
    title: "HCARE 26 - Human–AI Collaboration in RE (conference paper)",
    href: encodePath("2026 ieee re conference", "HCARE 26' - #21 Human–AI Collaboration in RE.pdf"),
    fileName: "HCARE 26' - #21 Human–AI Collaboration in RE.pdf",
  },
];

export const Hero = () => {
  const { t } = useTranslation();
  const menuBg = useColorModeValue('white', 'gray.800');
  const menuColor = useColorModeValue('gray.700', 'gray.100');
  const menuBorderColor = useColorModeValue('gray.200', 'gray.700');
  const menuItemHoverBg = useColorModeValue('blue.50', 'whiteAlpha.200');
  const buttonBg = useColorModeValue('white', 'whiteAlpha.100');
  const buttonColor = useColorModeValue('blue.700', 'white');
  const buttonHoverBg = useColorModeValue('blue.50', 'whiteAlpha.200');
  const buttonBorderColor = useColorModeValue('gray.200', 'gray.700');

  const handleDownload = (item: Downloadable) => {
    const confirmed = window.confirm(t('hero.confirmDownload', { name: item.fileName }));
    if (!confirmed) return;

    const link = document.createElement('a');
    link.href = item.href;
    link.download = item.fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      as="section"
      id="inicio"
      minH="50vh"
      display="flex"
      alignItems="center"
      bgGradient="linear(to-br, blue.500, purple.600)"
      color="white"
      py={{ base: 12, md: 14 }}
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 10, md: 12 }}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 6, md: 8 }}
            align={{ base: 'center', md: 'flex-start' }}
            textAlign={{ base: 'center', md: 'left' }}
            flex={1}
          >
            <Image
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Manoel Salgado"
              boxSize={{ base: '130px', md: '170px' }}
              rounded="full"
              objectFit="cover"
              border="4px solid"
              borderColor="whiteAlpha.500"
              boxShadow="2xl"
              flexShrink={0}
            />

            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4}>
              <Heading
                as="h1"
                size={{ base: 'xl', md: '2xl' }}
                fontWeight="bold"
                lineHeight="1.1"
              >
                {t('hero.greeting')}
              </Heading>

              <Heading
                as="h2"
                size={{ base: 'md', md: 'lg' }}
                fontWeight="semibold"
                color="blue.100"
              >
                {t('hero.role')}
              </Heading>

              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="blue.50"
                maxW="2xl"
              >
                 {t('hero.summary')}
              </Text>

              <HStack spacing={3} pt={2} flexWrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<FaChevronDown />}
                    bg={buttonBg}
                    color={buttonColor}
                    _hover={{ bg: buttonHoverBg }}
                    _active={{ bg: 'blue.100' }}
                    variant="solid"
                    size="sm"
                    fontWeight="semibold"
                    border="1px solid"
                    borderColor={buttonBorderColor}
                    px={4}
                  >
                    {t('hero.downloadCv')}
                  </MenuButton>
                  <MenuList bg={menuBg} color={menuColor} borderColor={menuBorderColor}>
                    {curriculumVersions.map((item) => (
                      <MenuItem
                        key={item.fileName}
                        as="button"
                        onClick={() => handleDownload(item)}
                        color={menuColor}
                        _hover={{ bg: menuItemHoverBg }}
                        _focus={{ bg: menuItemHoverBg }}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>

                {downloads.map((item) => (
                  <Menu key={item.fileName}>
                    <MenuButton
                      as={Button}
                      rightIcon={<FaChevronDown />}
                      bg={buttonBg}
                      color={buttonColor}
                      border="1px solid"
                      borderColor={buttonBorderColor}
                      _hover={{ bg: buttonHoverBg }}
                      variant="solid"
                      size="sm"
                      px={4}
                      fontWeight="semibold"
                    >
                      {t(item.labelKey)}
                    </MenuButton>
                    <MenuList bg={menuBg} color={menuColor} borderColor={menuBorderColor}>
                      <MenuItem
                        as="button"
                        onClick={() => handleDownload(item)}
                        color={menuColor}
                        _hover={{ bg: menuItemHoverBg }}
                        _focus={{ bg: menuItemHoverBg }}
                      >
                        {item.title}
                      </MenuItem>
                    </MenuList>
                  </Menu>
                ))}
              </HStack>
            </VStack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
