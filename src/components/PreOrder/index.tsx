import { Flex, Box, Text, Heading, VStack, Link } from "@chakra-ui/react";
import Image from "next/image";

export function PreOrder() {
  return (
    <Box
      bg="url('/images/background_start.png') no-repeat center / cover"
      height="800px"
      maxWidth="100%"
    >
      <Flex
        maxWidth={1400}
        mx="auto"
        height="650px"
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack pt="16.4rem" pb="10.3rem" alignItems="start" spacing={5}>
          <Flex>
            <Image
              src="/images/Rectangle 14.svg"
              alt="Retângulo"
              width={12}
              height={12}
            />
            <Text ml="10px" textAlign="left" fontSize="xl">
              Lançamento dia 09/11/2022
            </Text>
          </Flex>
          <Heading as="h1" fontSize="7.5rem" lineHeight={0.9}>
            God of War <br /> Ragnarök
          </Heading>
          <Text fontSize="xl" fontWeight="bold">
            Os maiores heróis dos nove reinos, lutando por um futuro em que
            acreditam.
          </Text>
          <Flex>
            <Text
              bg="white.900"
              color="black.900"
              fontWeight="bold"
              fontSize="20px"
              py="18px"
              px="36px"
            >
              R$ 349,00
            </Text>
            <Link
              background="#3265ea"
              colorScheme="messenger"
              py="18px"
              px="36px"
              borderRadius={0}
              fontSize="20px"
              fontWeight="bold"
              _hover={{
                textDecoration: "none",
                background: "#5380f5",
              }}
            >
              Comprar na pré-venda
            </Link>
          </Flex>
        </VStack>
        <VStack alignItems="start" alignSelf="end" spacing={5}>
          <Text fontWeight="bold" fontSize="lg">
            Assista ao trailer
          </Text>
          <Link border="4px" borderColor="#3265ea">
            <Box position="relative">
              <Image
                src="/images/godofwar_gif.gif"
                width={420}
                height={250}
                alt="Thor Gif"
              />
              <Box position="absolute" bottom="5" left="7">
                <Image
                  src="/images/play.svg"
                  width={42}
                  height={42}
                  alt="Play"
                />
              </Box>
            </Box>
          </Link>
          <Flex alignItems="center">
            <Image
              src="/images/faixa_etaria.svg"
              width={40}
              height={40}
              alt="18 anos - Faixa Etaria"
            />
            <Text ml="20px" lineHeight={1.1}>
              Drogas Lícitas, Linguagem Imprópria, <br /> Violência Extrema
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}
