import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/article";

interface Props {
        title: string;
        slug: string;
        content: string;
};



const Blog = () => {
    const posts = [
      {
        title: "First Post",
        slug: "first-post",
        content: "This is the first post",
      },
    ];
    // const router = useRouter();
    // const path = router.pathname;
    return (
        <Layout>
        <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // transition={{ duration: 0.4, type: "easeInOut" }}
        >
            <Container>
            <Box>
                <Heading as="h1" size="2xl" mb={4}>
                Blog
                </Heading>
                <Text>
                I&apos;m a software engineer and I write about things I&apos;m
                learning and working on.
                </Text>
            </Box>
            <Box mt={8}>
                {posts.map((post: Props) => (
                <Box key={post.slug} mb={8}>
                    <Link href={`/blog/${post.slug}`}>
                    <a>
                        {/* <Heading as="h2" size="lg" mb={2}> */}
                        {post.title}
                        {/* </Heading> */}
                    </a>
                    </Link>
                    <Text>{post.content}</Text>
                </Box>
                ))}
            </Box>
            </Container>
        </Box>
        </Layout>
    );
};

export default Blog;
