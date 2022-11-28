import { Box, Flex, Text, VStack, Heading } from "@chakra-ui/react";
import Image from "next/image";

export function Characters() {
  return (
    <Box bg='url("/images/characters_background.png")'>
      <Flex maxWidth={1400} mx="auto" justifyContent="space-between">
        <Flex flexDirection="column">
          <VStack spacing={5} alignItems="start">
            <Flex alignItems="center">
              <Image
                src="/images/Rectangle 14.svg"
                alt="Retângulo"
                width={12}
                height={12}
              />
              <Text ml="10px" fontSize="18px">
                Conheça os personsagens
              </Text>
            </Flex>
            <Heading fontSize="3rem" fontWeight="bold" lineHeight="62.4px">
              Toda grande aventura é <br /> uma história esperando <br /> para
              ser contada
            </Heading>
            <Text
              color="#bdc2cb"
              fontSize="20px"
              lineHeight="32px"
              maxWidth="50ch"
            >
              Reviva o começo da jornada nórdica épica de Kratos e Atreus em
              Mitos de Midgard. Um alerta para quem não está familiarizado com
              God of War: spoilers à frente.
            </Text>
          </VStack>
        </Flex>
        <Flex alignItems="center">
          <Image
            src="/images/Group 6.png"
            alt="Machado"
            width={428}
            height={505}
          />
          <Flex flexDirection="column" gap={5}>
            <Image
              src="/images/godofwar_background_characters.png"
              alt="God of War - Logo"
              width={193}
              height={50}
            />
            <Text>
              Lançamento dia <br /> 09/11/2022{" "}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
