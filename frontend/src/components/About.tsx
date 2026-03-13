import { Box, Container, Heading, Text, Stack, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

type Highlight = {
  title: string;
  description: string;
};

export const About = () => {
  const { t } = useTranslation();
  const highlights = t('about.highlights', { returnObjects: true }) as Highlight[];
  const sectionBg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box as="section" py={{ base: 14, md: 16 }} bg={sectionBg} id="sobre">
      <Container maxW="container.xl">
        <Stack spacing={10}>
          <Stack spacing={4} textAlign="center" maxW="3xl" mx="auto">
            <Heading as="h2" size="xl">
              {t('about.title')}
            </Heading>
            <Text fontSize="lg" color={textColor}>
              {t('about.intro')}
            </Text>
          </Stack>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} pt={8}>
            {highlights.map((item) => (
              <Stack
                key={item.title}
                spacing={3}
                textAlign="left"
                p={6}
                bg={cardBg}
                borderRadius="lg"
                boxShadow="sm"
              >
                <Heading as="h3" size="md" color="blue.600">
                  {item.title}
                </Heading>
                <Text color={textColor}>{item.description}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
