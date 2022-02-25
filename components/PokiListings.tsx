import React, { useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import {
  Box,
  Flex,
  useDisclosure,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { useTypedSelector } from "../hooks/useTypeSelectors";
import CharacterListing from "./CharacterListing";
import { PokemonList } from "../types";
import DetailsComponent from "./DetailsComponent";
import MobileDrawer from "./MobileDrawer";

const PokiListings = () => {
  const { getPokemonList } = useActions();
  const {
    pokemonList: { pokemonLists, meta },
  } = useTypedSelector((state) => state);
  const [isName, setName] = useState<string>("");
  const [nextPageUrl, setNextPageUrl] = useState<string>("");
  const [prevPageUrl, setPrevPageUrl] = useState<string>("");
  const [lgAndUp] = useMediaQuery("(min-width: 1024px)");
  const [tabsAndDown] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getNameHandler = (name: string) => setName(name);

  useEffect(() => {
    getPokemonList();
  }, []);

  useEffect(() => {
    setNextPageUrl(meta?.next!);
    setPrevPageUrl(meta?.previous!);
  }, [meta?.next!, meta?.previous!]);

  const handleNext = () => {
    getPokemonList(nextPageUrl);
  };
  const handlePrev = () => {
    getPokemonList(prevPageUrl);
  };
  return (
    <>
      <Box>
        <Flex justifyContent={"center"}>
          <Box
            overflowY={"scroll"}
            height={"44.9rem"}
            position={"relative"}
            borderTopLeftRadius={".5rem"}
            borderBottomLeftRadius={".5rem"}
            p={{ base: "2rem", xl: "4rem" }}
            background={"gray.200"}
            width={{ base: "100%", lg: "40%" }}
          >
            {React.Children.toArray(
              pokemonLists &&
                pokemonLists.map(({ name, url }: PokemonList) => (
                  <>
                    {tabsAndDown ? (
                      <CharacterListing
                        onOpen={onOpen}
                        getName={getNameHandler}
                        name={name}
                        url={url}
                      />
                    ) : (
                      <CharacterListing
                        getName={getNameHandler}
                        name={name}
                        url={url}
                      />
                    )}
                  </>
                ))
            )}
          </Box>
          {lgAndUp && <DetailsComponent name={isName} />}
        </Flex>
        <Flex justifyContent={"center"} mt="2rem">
          <Button
            borderRadius={"full"}
            isDisabled={meta?.previous === null}
            bg={"#F2C94C"}
            _hover={{ background: "#F2C94C" }}
            onClick={handlePrev}
          >
            Prev
          </Button>
          <Button
            borderRadius={"full"}
            bg={"#F2C94C"}
            _hover={{ background: "#F2C94C" }}
            onClick={handleNext}
          >
            Next
          </Button>
        </Flex>
        <MobileDrawer name={isName} isOpen={isOpen} onClose={onClose} />
      </Box>
    </>
  );
};

export default PokiListings;
