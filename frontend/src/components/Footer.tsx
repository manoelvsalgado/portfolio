import { Box, Container, Text, Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box as="footer" bg="gray.800" color="white" py={8}>
      <Container maxW="container.xl">
        <Stack spacing={2} align="center">
          <Text fontSize="sm" color="gray.300" fontWeight="medium" textAlign="center">
            {t('footer.stack')}
          </Text>
          <Text fontSize="sm" color="gray.400" textAlign="center">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
