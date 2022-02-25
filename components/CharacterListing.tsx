import { Box, HStack, Text, Image } from "@chakra-ui/react";
import { PokemonList } from "../types/";

type Prop = {
  getName: (name: string) => void;
  onOpen?: () => void;
};

const CharacterListing = ({
  name,
  url,
  onOpen,
  getName,
}: PokemonList & Prop) => {
  const handleClicks = (el: string) => {
    getName(el);
    onOpen && onOpen();
  };

  return (
    <Box
      _hover={{ background: "#484D57" }}
      cursor={"pointer"}
      onClick={() => handleClicks(name)}
      mb={"1rem"}
      borderRadius={".5rem"}
      py={"1rem"}
      px={{ sm: "1rem", md: "3rem" }}
      bg={"#3F414B"}
    >
      <HStack>
        <Image
          borderRadius="full"
          boxSize={"60px"}
          src={`https://img.pokemondb.net/artwork/${name}.jpg`}
          alt={name}
        />
        <Text
          fontWeight={"semibold"}
          fontSize={{ sm: "sm", md: "lg" }}
          color={"white"}
        >
          {name}
        </Text>
      </HStack>
    </Box>
  );
};

export default CharacterListing;
