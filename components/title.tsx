import { Heading } from "@chakra-ui/react"

export default function Title({ children, type }: { children: string; type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" }) {
    return (
        <Heading
            textAlign={"center"}
            as={type}
            size={{ base: "md", sm: "xl", md: "4xl" }}
            mb={4}
            // overflow="hidden"
            whiteSpace={"nowrap"}
          >
            {children}
          </Heading>
    );
}