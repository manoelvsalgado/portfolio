import { IconButton } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <IconButton
          aria-label="Scroll to top"
          icon={<FaArrowUp />}
          onClick={scrollToTop}
          position="fixed"
          bottom={8}
          right={8}
          size="lg"
          colorScheme="blue"
          borderRadius="full"
          boxShadow="lg"
          zIndex={999}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'xl',
          }}
          transition="all 0.2s"
        />
      )}
    </>
  );
};
