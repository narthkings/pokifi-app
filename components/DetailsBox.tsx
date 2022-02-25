import {
  Box,
  Flex,
  Spinner,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { PokemonDetails } from "../types/";

type Props = {
  loading: boolean;
};

const DetailsBox = ({
  moves,
  species,
  stats,
  types,
  weight,
  height,
  loading,
}: PokemonDetails & Props) => {
  return (
    <Box py={"1rem"} px={"3rem"} width={"100%"} height="100%">
      <Flex height={"35rem"} justifyContent={"center"} alignItems={"center"}>
        {!!loading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="yellow.100"
            color="blue.500"
            size="xl"
          />
        ) : (
          <Flex width={"100%"} flexDirection={"column"}>
            <Box mt={"1rem"}>
              <Flex direction={"column"} alignItems={"flex-start"} mb={"1rem"}>
                <Box>
                  <Text
                    fontWeight={"semibold"}
                    fontSize={{ base: "sm", md: "xl" }}
                    color={"yellow.100"}
                    wordBreak={"break-word"}
                  >
                    Moves:
                  </Text>
                </Box>
                <Box>
                  {moves
                    ?.map((move: any, i: any) => (
                      <UnorderedList key={i}>
                        <ListItem>
                          <Text
                            fontWeight={"semibold"}
                            fontSize={{ base: "sm", md: "xl" }}
                            color={"yellow.100"}
                            wordBreak={"break-word"}
                          >
                            {" "}
                            {move.move.name}
                          </Text>
                        </ListItem>
                      </UnorderedList>
                    ))
                    .slice(0, 5)}
                </Box>
              </Flex>

              <Box mb={"1rem"}>
                <Text
                  fontWeight={"semibold"}
                  fontSize={{ base: "sm", md: "xl" }}
                  color={"yellow.100"}
                >
                  Species: {species?.name}
                </Text>
              </Box>

              <Box mb={"1rem"}>
                <Text
                  fontWeight={"semibold"}
                  fontSize={{ base: "sm", md: "xl" }}
                  color={"yellow.100"}
                >
                  Types: [{types?.map((type) => type.type.name).join(", ")}];
                </Text>
              </Box>

              <Box mb={"1rem"}>
                <Text
                  fontWeight={"semibold"}
                  fontSize={{ base: "sm", md: "xl" }}
                  color={"yellow.100"}
                >
                  Stats: [{stats?.map((stat) => stat.base_stat).join(", ")}];
                </Text>
              </Box>

              <Box mb={"1rem"}>
                <Box
                  fontWeight={"semibold"}
                  fontSize={{ base: "sm", md: "xl" }}
                  color={"yellow.100"}
                >
                  Weight: {weight}
                </Box>
                <Box
                  fontWeight={"semibold"}
                  fontSize={{ base: "sm", md: "xl" }}
                  color={"yellow.100"}
                >
                  Height: {height}
                </Box>
              </Box>
            </Box>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default DetailsBox;
