import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Stack,
  MenuList,
  MenuItem,
  Menu,
  IconButton,
  MenuButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Heading as="h1" size="lg" letterSpacing="tighter" py={2} px={4}>
              <NextLink href="/">Rami Maalouf</NextLink>
            </Heading>
          </Box>
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            // move the links to the right
            justifyContent={"flex-end"}
          >
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
            <LinkItem href="/about" path={path}>
              About
            </LinkItem>
            <LinkItem href="/projects" path={path}>
              Projects
            </LinkItem>
            <LinkItem href="/blog" path={path}>
              Blog
            </LinkItem>
          </Stack>
          <Box>
            {/* <ThemeToggleButton /> */}

            <Box ml={2} display={{ base: "inline-block", md: "none" }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <NextLink href="/" passHref>
                    <MenuItem as={Link}>About</MenuItem>
                  </NextLink>
                  <NextLink href="/works" passHref>
                    <MenuItem as={Link}>Works</MenuItem>
                  </NextLink>
                  <NextLink href="/posts" passHref>
                    <MenuItem as={Link}>Posts</MenuItem>
                  </NextLink>
                  <NextLink href="https://uses.craftz.dog/" passHref>
                    <MenuItem as={Link}>Uses</MenuItem>
                  </NextLink>
                  <MenuItem
                    as={Link}
                    href="https://github.com/craftzdog/craftzdog-homepage"
                  >
                    View Source
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
