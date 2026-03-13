import { useState } from 'react';
import { Box, Container, Heading, Stack, Text, Button, Tag, HStack, IconButton, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const MotionBox = motion(Box);

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

  const itemsPerPage = useBreakpointValue({ base: 1, md: 2 }) ?? 1;
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionBg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const dotInactive = useColorModeValue('gray.300', 'gray.600');
  const dotInactiveHover = useColorModeValue('gray.400', 'gray.500');

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setPage((prev) => (prev + newDirection + totalPages) % totalPages);
  };

  const visibleProjects = projects.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <Box as="section" py={{ base: 14, md: 16 }} bg={sectionBg} id="projetos">
      <Container maxW="container.xl">
        <Stack spacing={10}>
          <Stack spacing={4} textAlign="center" maxW="2xl" mx="auto">
            <Heading as="h2" size="xl">
              {t('projects.title')}
            </Heading>
            <Text fontSize="lg" color={textColor}>
              {t('projects.intro')}
            </Text>
          </Stack>

          {/* Carousel */}
          <Box position="relative">
            <HStack spacing={4} align="stretch">
              {/* Prev button */}
              <IconButton
                aria-label="Anterior"
                icon={<FiChevronLeft size={22} />}
                onClick={() => paginate(-1)}
                isDisabled={totalPages <= 1}
                variant="ghost"
                colorScheme="blue"
                size="lg"
                alignSelf="center"
                flexShrink={0}
              />

              {/* Cards */}
              <Box flex={1} overflow="hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <MotionBox
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    display="grid"
                    gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
                    gap={8}
                  >
                    {visibleProjects.map((project) => (
                      <Stack
                        key={project.title}
                        spacing={4}
                        p={6}
                        bg={cardBg}
                        borderRadius="lg"
                        boxShadow="md"
                        transition="all 0.3s"
                        _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
                      >
                        <Heading as="h3" size="md" color="blue.600">
                          {project.title}
                        </Heading>
                        <Text color={textColor}>
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
                  </MotionBox>
                </AnimatePresence>
              </Box>

              {/* Next button */}
              <IconButton
                aria-label="Próximo"
                icon={<FiChevronRight size={22} />}
                onClick={() => paginate(1)}
                isDisabled={totalPages <= 1}
                variant="ghost"
                colorScheme="blue"
                size="lg"
                alignSelf="center"
                flexShrink={0}
              />
            </HStack>

            {/* Dots */}
            {totalPages > 1 && (
              <HStack justify="center" spacing={2} mt={6}>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <Box
                    key={i}
                    as="button"
                    w={i === page ? 6 : 2.5}
                    h={2.5}
                    borderRadius="full"
                    bg={i === page ? 'blue.500' : dotInactive}
                    transition="all 0.3s"
                    onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
                    _hover={{ bg: i === page ? 'blue.500' : dotInactiveHover }}
                  />
                ))}
              </HStack>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
