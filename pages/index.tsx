import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Layout from "../components/layouts/article";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Expertise from "../components/expertise";
import Work from "../components/work";
import Title from "../components/title";


const Home: NextPage = () => {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Box minHeight={"100vh"}>
          <Title
            type="h1"
          >
            Hello, I&apos;m Rami Maalouf
          </Title>
        </Box>
        <Expertise />
        <Work />
        <Experience />
        <Contact />
      </Container>
    </Layout>
  );
};

export default Home;
