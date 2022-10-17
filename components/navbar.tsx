import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const NavBar = ({ path }: any) => {
    return (
        <Box as="nav" bg="gray.800" color="white" py={4}>
            <Container maxW="container.md">
                <Flex justifyContent="space-between" alignItems="center">
                    <Box>
                        <Link href="/">
                            <a>
                                <Heading as="h1" size="lg">
                                    Rami Maalouf
                                </Heading>
                            </a>
                        </Link>
                    </Box>
                    <Box>
                        <Flex>  
                            <Box mr={4}>
                                <Link href="/">
                                    <a>
                                        <Text
                                            as={motion.span}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            fontWeight={path === "/" ? "bold" : "normal"}
                                        >
                                            Home
                                        </Text>
                                    </a>
                                </Link>
                            </Box>
                            <Box mr={4}>
                                <Link href="/about">
                                    <a>
                                        <Text
                                            as={motion.span}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            fontWeight={path === "/about" ? "bold" : "normal"}
                                        >
                                            About
                                        </Text>
                                    </a>
                                </Link>
                            </Box>
                            <Box mr={4}>
                                <Link href="/projects">
                                    <a>
                                        <Text
                                            as={motion.span}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            fontWeight={path === "/projects" ? "bold" : "normal"}
                                        >
                                            Projects
                                        </Text>
                                    </a>
                                </Link>
                            </Box>
                            <Box mr={4}>
                                <Link href="/blog">
                                    <a>
                                        <Text
                                            as={motion.span}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            fontWeight={path === "/blog" ? "bold" : "normal"}
                                        >
                                            Blog
                                        </Text>
                                    </a>
                                </Link>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default NavBar;