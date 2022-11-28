import { Flex, Box, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";

export function GameInfo() {
  return (
    <Box bg="#090a0a">
      <Flex maxWidth={1400} width="100%" mx="auto">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          py="60px"
        >
          <Flex flexDirection="column" alignItems="center" gap="10px">
            <Image src="/icons/image1.svg" width={28} height={28} alt="Icone" />
            <Text>Jogo offline habilitado</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" gap="10px">
            <Image src="/icons/image2.svg" width={28} height={28} alt="Icone" />
            <Text>Jogo offline habilitado</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" gap="10px">
            <Image src="/icons/image3.svg" width={28} height={28} alt="Icone" />
            <Text>Jogo offline habilitado</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" gap="10px">
            <Image src="/icons/image4.svg" width={28} height={28} alt="Icone" />
            <Text>Jogo offline habilitado</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" gap="10px">
            <Image src="/icons/image5.svg" width={28} height={28} alt="Icone" />
            <Text>Jogo offline habilitado</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" gap="10px">
            <Image src="/icons/image6.svg" width={28} height={28} alt="Icone" />
            <Text>Jogo offline habilitado</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
