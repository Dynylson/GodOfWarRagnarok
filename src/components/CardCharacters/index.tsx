import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

interface CardCharactersProps {
  src: string;
  alt: string;
  name: string;
  info: string;
}

export function CardCharacters({ src, alt, name, info }: CardCharactersProps) {
  return (
    <Box>
      <Box mb={5}>
        <Image src={src} alt={alt} width="500" height="300" />
      </Box>
      <Heading fontSize="18px" fontWeight="bold">
        {name}
      </Heading>
      <Text fontSize="14px">{info}</Text>
    </Box>
  );
}
