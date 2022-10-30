import { Heading, Text, Box } from "@chakra-ui/react";

export default function Expertise() {
    return (
        <Box
        as="section"
        id="expertise"
        mt={8}
        mb={8}
        >
            <Heading
            as="h2"
            size="xl"
            mb={4}
            minW="100vw"
            >
                Expertise
            </Heading>
            <Text>
                I&apos;m a software engineer and I write about things I&apos;m
                learning and working on.
            </Text>
        </Box>
    );
}
