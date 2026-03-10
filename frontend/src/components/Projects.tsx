import { Box, Container, Heading, SimpleGrid, Stack, Text, Button, Tag, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

type Project = {
  title: string;
  description: string;
  tags: string[];
  projectLink: string;
  githubLink: string;
};

export const Projects = () => {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true }) as Project[];

  return (
    <Box as="section" py={20} bg="gray.50" id="projetos">
      <Container maxW="container.xl">
        <Stack spacing={12}>
          <Heading as="h2" size="xl" textAlign="center">
            {t('projects.title')}
          </Heading>
          <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl" mx="auto">
            {t('projects.intro')}
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {projects.map((project) => (
              <Stack 
                key={project.title}
                spacing={4}
                p={6}
                bg="white"
                borderRadius="lg"
                boxShadow="md"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
              >
                <Heading as="h3" size="md" color="blue.600">
                  {project.title}
                </Heading>
                <Text color="gray.600">
                  {project.description}
                </Text>
                <HStack spacing={2} flexWrap="wrap">
                  {project.tags.map((tag) => (
                    <Tag key={tag} size="sm" colorScheme="purple">
                      {tag}
                    </Tag>
                  ))}
                </HStack>
                <HStack spacing={4} pt={2}>
                  <Button 
                    as="a" 
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    colorScheme="blue" 
                    variant="solid"
                    size="sm"
                  >
                    {t('projects.viewProject')}
                  </Button>
                  {project.githubLink && (
                    <Button 
                      as="a"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      colorScheme="gray" 
                      variant="outline"
                      size="sm"
                    >
                      {t('projects.viewGithub')}
                    </Button>
                  )}
                </HStack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
