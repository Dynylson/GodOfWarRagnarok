import {
    Flex,
    Box,
    Text,
    UnorderedList,
    ListItem,
    HStack,
} from "@chakra-ui/react";

import Image from "next/image";

import godofwarLogo from "../../assets/image 13.jpg";
import playstationLogo from "../../assets/playstation_logo.svg";

export function Header() {
    return (
        <Box as="header" w="100%" bg="black.900" py={"15px"}>
            <Flex
                maxWidth={1500}
                mx="auto"
                justifyContent="space-between"
                alignItems="center"
            >
                <Image
                    src={playstationLogo}
                    alt="Playstation Logo"
                    height="24"
                    width="31"
                />
                <Image src={godofwarLogo} alt="God of War - Logo" />
                <Box display="flex">
                    <Text mr="20px">Disponível para </Text>
                    <UnorderedList display="flex" listStyleType="none" m="0">
                        <HStack spacing="10px">
                            <ListItem border="2px" px="10px">
                                PS4
                            </ListItem>
                            <ListItem border="2px" px="10px">
                                PS5
                            </ListItem>
                        </HStack>
                    </UnorderedList>
                </Box>
            </Flex>
        </Box>
    );
}
