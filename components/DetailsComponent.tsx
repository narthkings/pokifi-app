import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import DetailsBox from "./DetailsBox";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelectors";

type NameProp = {
  name: string;
};

const DetailsComponent = ({ name }: NameProp) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { getPokemonDetail, clearPokemonDetails } = useActions();
  const {
    pokemonDetail: {
      pokemonDetail: { moves, species, stats, types, weight, height },
      pokemonDetailsSuccess,
    },
  } = useTypedSelector((state) => state);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      getPokemonDetail(name);
      clearPokemonDetails();
    }, 300);
  }, [name]);

  useEffect(() => {
    if (pokemonDetailsSuccess.length > 0) {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [pokemonDetailsSuccess]);

  return (
    <Box
      height={"100%"}
      borderTopRightRadius={".5rem"}
      borderBottomRightRadius={".5rem"}
      background={"#3B3E46"}
      width={"60%"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        borderBottom={"1px"}
        background={"gray.100"}
        p={"2.5rem"}
      >
        <Text fontWeight={"semibold"} fontSize={"3xl"} color={"white"}>
          {name ? name : "Name"}
        </Text>
      </Flex>

      <DetailsBox
        height={height}
        loading={loading}
        moves={moves}
        species={species}
        stats={stats}
        types={types}
        weight={weight}
      />
    </Box>
  );
};

export default DetailsComponent;
