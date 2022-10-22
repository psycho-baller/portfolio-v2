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
import { motion, useScroll } from "framer-motion";
import type { Router } from "next/router";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useEffect } from "react";

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
  const { scrollY } = useScroll();
  useEffect(() => {
    scrollY.onChange((y) => {
      if (document) {
        if (y > 450) {
          // move navbar back down
          const nav = document.getElementById("navbar");
          if (nav) {
            nav.style.top = "0";
            
          }
        } else {
          // move navbar up
          const nav = document.getElementById("navbar");
          if (nav) {
            nav.style.top = "-80px";
          }
        }
      }
    });
  }, []);

  return (
    <Box
      position={"sticky"}
      top={-20}
      overflow={"hidden"}
      as={motion.nav}
      bg="gray.800"
      color="white"
      py={4}
      width="100vw"
      id="navbar"
    >
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Heading
              position={"absolute"}
              left={0}
              top={0}
              overflow="hidden"
              whiteSpace={"nowrap"}
              as="h1"
              size="lg"
              letterSpacing="tighter"
              py={2}
              px={4}
            >
              <NextLink href="/">Rami Maalouf</NextLink>
            </Heading>
          </Box>
          <Box
            // minWidth={"100vw"}
            display={{ base: "none", md: "block" }}
            // width={{ base: "full", md: "auto" }}
            // alignItems="center"
            // flexGrow={1}
            // mt={{ base: 4, md: 0 }}
          >
            <Flex justifyContent={"center"} alignItems={"center"}>
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
                <LinkItem href="/#" path={path}>
                  Home
                </LinkItem>
              </Box>
              <Box mr={4}>
                <LinkItem href="/#expertise" path={path}>
                  Expertise
                </LinkItem>
              </Box>
              <Box mr={4}>
                <LinkItem href="/#work" path={path}>
                  Work
                </LinkItem>
              </Box>
              <Box mr={4}>
                <LinkItem href="/#experience" path={path}>
                  Experience
                </LinkItem>
              </Box>
              <Box mr={4}>
                <LinkItem href="/#contact" path={path}>
                  Contact
                </LinkItem>
              </Box>
            </Flex>
          </Box>

          <Box>
            {/* <ThemeToggleButton /> */}

            <Box display={{ base: "inline-block", md: "none" }}>
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
