import React from "react";
import { Link as ChakraLink , Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarNav = () => {

    const { asPath } = useRouter();

    return (
    <Stack spacing="6">
        <Stack>
            <Text fontSize="xs" fontWeight="bold" color="gray.400">
                CADASTRO
            </Text>
            <Stack>
                <ChakraLink
                _hover={{ bg: "gray.100"}}
                px="4"
                py="2"
                borderRadius={5}
                bg={asPath === "/" ? "gray.200" : ""}
                >
                <Link href="/">
                <Text fontSize="md" fontWeight="medium" color="gray.500">
                    PRODUTOS
                </Text>
                </Link>
                </ChakraLink>
            </Stack>
        </Stack>
    </Stack>
    );
};

export default SidebarNav;