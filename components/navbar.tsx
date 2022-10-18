import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { Router } from "next/router";
import { useRouter } from "next/router";
import NextLink from "next/link";

const LinkItem = ({
  href,
  path,
  children,
  ...props
}: {
  href: string;
  path: string;
  children: string;
}) => {
  const isCurrentPath = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        display="block"
        px={4}
        py={2}
        rounded="md"
        fontWeight="semibold"
        bg={isCurrentPath ? "gray.700" : "transparent"}
        color={isCurrentPath ? "white" : inactiveColor}
        _hover={{
          textDecoration: "none",
          bg: "teal.500",
        }}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const NavBar = ({ path }: { path: string }) => {
  // const router = useRouter() as Router;
  // const path = router.pathname;
  return (
    <Box as="nav" bg="gray.800" color="white" py={4}>
      <Container maxW="container.md">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Heading as="h1" size="lg" letterSpacing="tighter" py={2} px={4}>
              <NextLink href="/">
                Rami Maalouf
              </NextLink>
            </Heading>
          </Box>
          <Box>
            <Flex>
              {/* <Box mr={4}>
                <LinkItem
                  href="/"
                  path={path}
                  // as={motion.span}
                  // whileHover={{ scale: 1.1 }}
                  // whileTap={{ scale: 0.9 }}
                  // fontWeight={path === "/" ? "bold" : "normal"}\
                >
                  Home
                </LinkItem>
              </Box> */}
              <Box mr={4}>
                <LinkItem href="/about" path={path}>
                  About
                </LinkItem>
              </Box>
              <Box mr={4}>
                <LinkItem href="/projects" path={path}>
                  Projects
                </LinkItem>
              </Box>
              <Box mr={4}>
                <LinkItem href="/blog" path={path}>
                  Blog
                </LinkItem>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
