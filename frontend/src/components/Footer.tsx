import { Box, Container, Text, Stack, Link, useColorModeValue } from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const footerBg = useColorModeValue('gray.800', 'gray.950');

  return (
    <Box as="footer" bg={footerBg} color="white" py={8}>
      <Container maxW="container.xl">
        <Stack spacing={2} align="center">
          <Text fontSize="sm" color="gray.300" fontWeight="medium" textAlign="center">
            {t('footer.stack')}
          </Text>
          <Link
            href="https://github.com/manoelvsalgado/portfolio"
            isExternal
            fontSize="sm"
            color="gray.400"
            display="flex"
            alignItems="center"
            gap={1.5}
            _hover={{ color: 'white' }}
            transition="color 0.2s"
          >
            <FiGithub />
            manoelvsalgado/portfolio
          </Link>
          <Text fontSize="sm" color="gray.400" textAlign="center">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
