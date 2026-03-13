import { Box, Container, Heading, SimpleGrid, Stack, Tag, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

type SkillGroup = {
  category: string;
  description: string;
  items: string[];
};

export const Skills = () => {
  const { t } = useTranslation();
  const skills = t('skills.groups', { returnObjects: true }) as SkillGroup[];
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box as="section" py={{ base: 14, md: 16 }} id="skills">
      <Container maxW="container.xl">
        <Stack spacing={10}>
          <Stack spacing={4} textAlign="center" maxW="3xl" mx="auto">
            <Heading as="h2" size="xl">
              {t('skills.title')}
            </Heading>
            <Text fontSize="lg" color={textColor}>
              {t('skills.intro')}
            </Text>
          </Stack>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {skills.map((skillGroup) => (
              <Stack 
                key={skillGroup.category}
                spacing={4}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                boxShadow="md"
                transition="transform 0.2s"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }}
              >
                <Heading as="h3" size="md" color="blue.600">
                  {skillGroup.category}
                </Heading>
                <Text color={textColor} fontSize="sm" lineHeight="1.6">
                  {skillGroup.description}
                </Text>
                <Stack spacing={2}>
                  {skillGroup.items.map((skill) => (
                    <Tag 
                      key={skill} 
                      size="md" 
                      colorScheme="blue"
                      justifyContent="center"
                    >
                      {skill}
                    </Tag>
                  ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
