import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
// import styles from "../styles/Home.module.css";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Layout from "../components/layouts/article";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Expertise from "../components/Expertise";
import Work from "../components/work";


const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Box
        id="home"
        minHeight={'100vh'}>
          <Heading
            as="h1"
            size={{ base: "md", sm: "xl", md: "2xl" }}
            mb={4}
            // overflow="hidden"
            whiteSpace={"nowrap"}
          >
            Hello, I&apos;m Rami Maalouf
          </Heading>
        </Box>
        <Expertise />
        <Work/>
        <Experience/>
        <Contact/>
      </Container>
    </Layout>
  );
};

export default Home;
