import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from "@chakra-ui/react";
import PokiListings from '../components/PokiListings';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokemon Displays</title>
      </Head>

      <Box
        minHeight={"100vh"}
        background={"#484D57"}
        py={"4rem"}
        px={{ base: "1rem", lg: "6rem" }}
      >
        <PokiListings />
      </Box>
    </>
  )
}

export default Home
