import Head from "next/head";
// import dynamic from "next/dynamic";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import type { Router } from "next/router";
import {useRouter} from "next/router";
// import VoxelDogLoader from "../voxel-dog-loader";

// const LazyVoxelDog = dynamic(() => import("../voxel-dog"), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />,
// });

interface MainI{
    children: any;
    router?: Router | undefined;
}

const Main = ({ children, router }: MainI) => {
    // let tRouter: Router = router || useRouter() as Router;

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rami's homepage" />
        <meta name="author" content="Rami Maalouf" />
        <meta name="author" content="PsychoCoder" />
        <title>Rami Maalouf - Homepage</title>
      </Head>
      <NavBar path={(router === undefined) ? "/" : router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelDog /> */}

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;