import { Box, Container, Heading, Text, Stack, Button, SimpleGrid, useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

type ContactCardProps = {
  icon: string;
  title: string;
  value: string;
  link?: string;
  onCardClick?: () => void;
};

const ContactCard = ({ icon, title, value, link, onCardClick }: ContactCardProps) => (
  <Stack
    spacing={3}
    p={6}
    bg="white"
    borderRadius="lg"
    boxShadow="md"
    textAlign="center"
    transition="transform 0.2s"
    _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }}
  >
    <Text fontSize="3xl">{icon}</Text>
    <Heading as="h3" size="sm" color="gray.700">
      {title}
    </Heading>
    {link ? (
      <Button
        as="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        colorScheme="blue"
        variant="link"
        size="sm"
        onClick={(event) => event.stopPropagation()}
      >
        {value}
      </Button>
    ) : (
      <Text
        fontSize="sm"
        color="blue.600"
        fontWeight="bold"
        cursor="pointer"
        textDecoration="none"
        _hover={{ textDecoration: 'underline' }}
        role="button"
        tabIndex={0}
        onClick={onCardClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onCardClick?.();
          }
        }}
      >
        {value}
      </Text>
    )}
  </Stack>
);

export const Contact = () => {
  const { t } = useTranslation();
  const toast = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('manoelsalgadoneto@gmail.com');
      toast({
        title: t('contact.copied'),
        status: 'success',
        duration: 2500,
        isClosable: true,
        position: 'top',
      });
    } catch {
      toast({
        title: t('contact.copyFailed'),
        status: 'error',
        duration: 2500,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <Box as="section" py={{ base: 14, md: 16 }} id="contato">
      <Container maxW="container.xl">
        <Stack spacing={10}>
          <Stack spacing={4} textAlign="center">
            <Heading as="h2" size="xl">
              {t('contact.title')}
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
              {t('contact.intro')}
            </Text>
          </Stack>
          
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} maxW="4xl" mx="auto">
            <ContactCard
              icon="📧"
              title={t('contact.email')}
              value="manoelsalgadoneto@gmail.com"
              onCardClick={copyEmail}
            />
            <ContactCard
              icon="💼"
              title={t('contact.linkedin')}
              value="/in/manoel-salgado"
              link="https://www.linkedin.com/in/manoel-salgado/"
            />
            <ContactCard
              icon="💻"
              title={t('contact.github')}
              value="@manoelvsalgado"
              link="https://github.com/manoelvsalgado"
            />
            <ContactCard
              icon="👨‍🏫"
              title={t('contact.allura')}
              value="manoelsalgadoneto"
              link="https://cursos.alura.com.br/user/manoelsalgadoneto"
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
