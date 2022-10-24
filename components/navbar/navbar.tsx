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
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion, useScroll } from "framer-motion";
import NextLink from "next/link";
import { useEffect } from "react";
import PhoneNavbar from "./phoneNavbar";
import Logo from "./logo";

const GoTo = ({
  children,
  id_,
  ...props
}: {
  children: string;
  id_: string;
}) => {
  // const isCurrentPath = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <Text
    // make every other item translucent when one is hovered
    // animate={{ opacity: isCurrentPath ? 1 : 0.5 }}
      as={motion.div}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
      onClick={() => {
        if (document) {
          const _id = document.getElementById(id_);
          if (_id) {
            _id.scrollIntoView({ behavior: "smooth" });
          }
        }
      }}
      // variant="ghost"
      color={inactiveColor}
      cursor="pointer"
      
      {...props}
    >
      {children}
    </Text>
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
            nav.style.top = "0px";
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
  }, [scrollY]);

  return (
    <Box
      display={{ base: "none", md: "block" }}
      zIndex={1}
      position={"sticky"}
      top={"-80px"}
      overflow={"hidden"}
      as={motion.nav}
      bg="gray.800"
      color="white"
      py={4}
      width="100vw"
      id="navbar"
      // maxHeight={"100vh"}
    >
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
           <Logo shiftX={0} shiftY={0} />
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
                <GoTo
                  href="/"
                  path={path}
                  // as={motion.span}
                  // whileHover={{ scale: 1.1 }}
                  // whileTap={{ scale: 0.9 }}
                  // fontWeight={path === "/" ? "bold" : "normal"}\
                >
                  Home
                </GoTo>
              </Box> */}
              <Box mr={4}>
                <GoTo id_="home">Home</GoTo>
              </Box>
              <Box mr={4}>
                <GoTo id_="expertise">Expertise</GoTo>
              </Box>
              <Box mr={4}>
                <GoTo id_="work">Work</GoTo>
              </Box>
              <Box mr={4}>
                <GoTo id_="experience">Experience</GoTo>
              </Box>
              <Box mr={4}>
                <GoTo id_="contact">Contact</GoTo>
              </Box>
            </Flex>
          </Box>

          <Box>
            {/* <ThemeToggleButton /> */}

            {/* <Box display={{ base: "inline-block", md: "none" }}> */}
            {/* <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  {/* <MenuItem> */}
            {/* <Box mr={4}>
                    <GoTo id_="home">Home</GoTo>
                  </Box>
                  </MenuItem>
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
              </Menu> */}
            {/* </Box> */}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
/*
Scroll to an Element With the Element.scrollIntoView() Method in React:
This Method accept one argument.

The scrollIntoView() method scrolls an element into the visible area of the browser window.

Syntex:

element.scrollIntoView(align)
The element.scrollIntoView() accepts a boolean value or an object:
element.scrollIntoView(alignToTop);

The alignToTop is Boolean value.
element.scrollIntoView(options);

Options have main 3 properties
1. block
2. behavior
3. inline

1. Block: This Property define vertical alignment. It accept 4 value:

start
center
end
nearest
By default set value is started.

2. Behavior: behavior property defines the transition animation. It accepts 2 values:

auto
smooth
By default set value is auto.

3. Inline: property defines horizontal alignment. It accepts 4 values:

start
center
end
nearest
By default set value is nearest.

Example:

var element = document.getElementById("box");
element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"});
*/
