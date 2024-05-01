import React from "react";
import { Link as ChakraLink , Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarNav = () => {

    const { asPath } = useRouter();

    return (
    <Stack spacing="6">
        <Stack>
            <Text fontSize="xs" fontWeight="bold" color="teal.500">
                CADASTRO
            </Text>
            <Stack>
                <ChakraLink
                _hover={{ bg: "teal.100"}}
                px="4"
                py="2"
                borderRadius={5}
                bg={asPath === "/" ? "teal.200" : ""}
                >
                <Link href="/">
                <Text fontSize="md" fontWeight="medium" color="gray.600">
                    PRODUTOS
                </Text>
                </Link>
                </ChakraLink>
            </Stack>
        </Stack>
        <Stack>
        <Text fontSize="xs" fontWeight="bold" color="teal.500">
                ESTOQUE
            </Text>
            <Stack>
            <ChakraLink
                _hover={{ bg: "teal.100"}}
                px="4"
                py="2"
                borderRadius={5}
                bg={asPath === "/balance" ? "teal.200" : ""}
                >
                <Link href="/balance">
                <Text fontSize="md" fontWeight="medium" color="gray.600">
                    SALDO
                </Text>
                </Link>
                </ChakraLink>
                <ChakraLink
                _hover={{ bg: "teal.100"}}
                px="4"
                py="2"
                borderRadius={5}
                bg={asPath === "/stockEntries" ? "teal.200" : ""}
                >
                <Link href="/stockEntries">
                <Text fontSize="md" fontWeight="medium" color="gray.600">
                    ENTRADAS
                </Text>
                </Link>
                </ChakraLink>
                <ChakraLink
                _hover={{ bg: "teal.300"}}
                px="4"
                py="2"
                borderRadius={5}
                bg={asPath === "/stockOutputs" ? "teal.200" : ""}
                >
                <Link href="/stockOutputs">
                <Text fontSize="md" fontWeight="medium" color="gray.600">
                    SAÍDAS
                </Text>
                </Link>
                </ChakraLink>
            </Stack>
        </Stack>
    </Stack>

    );
}

export default SidebarNav;