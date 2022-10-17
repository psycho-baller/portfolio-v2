import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
// import styles from "../styles/Home.module.css";
import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Layout from "../components/layouts/main";

const Home: NextPage = () => {
  // const router = useRouter() as Router;
  return (
    <Layout>
      <Container>
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            Hello, I&apos;m Rami Maalouf
          </Heading>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
