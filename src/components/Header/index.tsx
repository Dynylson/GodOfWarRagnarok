import {
  Flex,
  Box,
  Text,
  UnorderedList,
  ListItem,
  HStack,
} from "@chakra-ui/react";

import Image from "next/image";

export function Header() {
  return (
    <Box as="header" w="100%" bg="black.900" py={"15px"}>
      <Flex
        maxWidth={1400}
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          src="/images/playstation_logo.svg"
          alt="Playstation Logo"
          height="24"
          width="31"
        />
        <Image
          src="/images/image 13.jpg"
          alt="God of War - Logo"
          width={193}
          height={50}
        />
        <Box display="flex">
          <Text mr="20px" fontWeight="bold">
            Disponível para{" "}
          </Text>
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
