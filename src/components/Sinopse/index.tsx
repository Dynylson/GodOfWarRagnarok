import { Box, Flex, VStack, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";

export function Sinopse() {
  return (
    <Box
      bg='url("/images/background_sinopse.png") no-repeat center / cover'
      height="900px"
    >
      <Flex maxWidth={1400} mx="auto" pt="13.8rem" pb="10.3rem">
        <Flex flexDirection="column">
          <VStack spacing={5} alignItems="start">
            <Flex alignItems="center">
              <Image
                src="/images/Rectangle 14.svg"
                alt="Retângulo"
                width={12}
                height={12}
              />
              <Text fontSize="18px" ml="10px">
                Sony Interactive Entertainment
              </Text>
            </Flex>
            <Heading fontSize="5xl" fontWeight="bold">
              Embarque com <br /> Kratos e Atreus em <br /> uma jornada épica{" "}
            </Heading>
            <Text
              color="#bdc2cb"
              maxWidth="55ch"
              lineHeight="32px"
              fontSize="20px"
            >
              O Fimbulwinter já começou. Kratos e Atreus devem viajar pelos Nove
              Reinos em busca de respostas enquanto as forças asgardianas se
              preparam para uma batalha profetizada que causará o fim do mundo.
              Nessa jornada, eles explorarão paisagens míticas impressionantes e
              enfrentarão inimigos aterradores: deuses nórdicos e monstros. A
              ameaça do Ragnarök se aproxima. Kratos e Atreus terão de escolher
              entre a segurança deles próprios e a dos reinos.
            </Text>
            <Flex alignItems="center" gap={10}>
              <Flex gap={5}>
                <Image
                  src="/images/Santa_Monica_Studio 1.png"
                  alt="Retângulo"
                  width={53}
                  height={60}
                />
                <Image
                  src="/images/playstation_studio.png"
                  alt="Retângulo"
                  width={53}
                  height={60}
                />
              </Flex>
              <Text color="white.900">
                Do Santa Monica Studio, esta é a sequência <br /> da aclamada
                versão de 2018 de God of War.{" "}
              </Text>
            </Flex>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}
