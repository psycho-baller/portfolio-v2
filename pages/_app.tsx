import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layouts/main";
// import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";

// if (typeof window !== "undefined") {
//   window.history.scrollRestoration = "manual";
// }

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <Layout 
      router={router}
      >
        {/* <Fonts /> */}

        <AnimatePresence
          exitBeforeEnter
          initial={true}
          // onExitComplete={() => {
          //   if (typeof window !== "undefined") {
          //     window.scrollTo({ top: 0 });
          //   }
          // }}
        >
          <Component {...pageProps}
           key={router.route} 
          />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default Website;