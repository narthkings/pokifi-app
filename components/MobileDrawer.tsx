import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelectors";
import DetailsBox from "./DetailsBox";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
};

const MobileDrawer = ({ isOpen, onClose, name }: Props) => {
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
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
      <DrawerOverlay />
      <DrawerContent height={"100%"} bg={"#0B0B0B"}>
        <DrawerCloseButton height={"2rem"} color={"white"} />

        <DrawerBody mt={"1rem"}>
          <Flex
            width="100%"
            height={"100%"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            color={"white"}
            direction={"column"}
          >
            <DetailsBox
              height={height}
              loading={loading}
              moves={moves}
              species={species}
              stats={stats}
              types={types}
              weight={weight}
            />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
