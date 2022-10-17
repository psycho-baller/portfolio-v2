import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" mt={8}>
      <Text textAlign="center">
        © {new Date().getFullYear()} Rami Maalouf. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;