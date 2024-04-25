import { Avatar , Flex, HStack, Icon, IconButton, Text, useBreakpointValue} from "@chakra-ui/react";
import React from "react";
import { useSidebarContext } from "@/contexts/SidebarContext";
import { FiMenu } from "react-icons/fi"

const Header = () => {
    //verificar se a tela é mobile ou n 
    const isMobile = useBreakpointValue({
        base: true,
        lg:false,
    });

    const {onOpen} = useSidebarContext();
    return (
        <Flex
        as="header"
        w="100%"
        h="20"
        mx="auto"
        px="2"
        py="2"
        align="center"
        boxShadow="0 1px 0 #ccc"
        color="gray.500"
        fontWeight="bold"
        >

            {isMobile && (
                <IconButton
                icon={<Icon as={FiMenu}/>}
                onClick={onOpen}
                variant="unstyled"
                fontSize="20"
                mr="2"
                ></IconButton>
            )}
            <Text>HOME</Text>
            <Flex ml="auto">
                <HStack>
                    <Text>Usuário</Text>
                    <Avatar size="md" name="user"></Avatar>
                </HStack>
            </Flex>
        </Flex>
    );
};


export default Header;