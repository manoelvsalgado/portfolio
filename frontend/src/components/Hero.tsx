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
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const curriculumVersions = [
  {
    label: 'Português',
    href: `${import.meta.env.BASE_URL}docs/curriculo-manoel-salgado-pt.pdf`,
    fileName: 'curriculo-manoel-salgado-pt.pdf',
  },
  {
    label: 'English',
    href: `${import.meta.env.BASE_URL}docs/curriculo-manoel-salgado-en.pdf`,
    fileName: 'curriculo-manoel-salgado-en.pdf',
  },
  {
    label: 'Español',
    href: `${import.meta.env.BASE_URL}docs/curriculo-manoel-salgado-es.pdf`,
    fileName: 'curriculo-manoel-salgado-es.pdf',
  },
];

const downloads = [
  {
    label: 'Baixar Dissertação',
    href: `${import.meta.env.BASE_URL}docs/dissertacao-mestrado-manoel-salgado.pdf`,
    fileName: 'dissertacao-mestrado-manoel-salgado.pdf',
    available: false,
  },
];

export const Hero = () => {
  const { t } = useTranslation();

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
                    colorScheme="whiteAlpha"
                    variant="outline"
                    size="sm"
                  >
                    {t('hero.downloadCv')}
                  </MenuButton>
                  <MenuList color="gray.800">
                    {curriculumVersions.map((item) => (
                      <MenuItem
                        key={item.fileName}
                        as="a"
                        href={item.href}
                        download={item.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>

                {downloads.map((item) => (
                  <Button
                    key={item.fileName}
                    as={item.available ? 'a' : undefined}
                    href={item.available ? item.href : undefined}
                    download={item.available ? item.fileName : undefined}
                    target={item.available ? '_blank' : undefined}
                    rel={item.available ? 'noopener noreferrer' : undefined}
                    colorScheme="whiteAlpha"
                    variant="outline"
                    size="sm"
                    isDisabled={!item.available}
                  >
                    {item.available ? t('hero.downloadThesis') : `${t('hero.downloadThesis')} (${t('hero.comingSoon')})`}
                  </Button>
                ))}
              </HStack>
            </VStack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
