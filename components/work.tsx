import { Heading, Text, Box } from "@chakra-ui/react";

export default function Work() {
  return (
    <Box as="section" id="work" mt={8} mb={8}>
      <Heading as="h2" size="xl" mb={4}>
        Work
      </Heading>
      <Text>
        I&apos;m a software engineer and I write about things I&apos;m learning
        and working on.
      </Text>
    </Box>
  );
}
