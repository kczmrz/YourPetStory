import { Box, useColorModeValue, useColorMode, Button, Container } from "@chakra-ui/react";
import { IndexPage } from "@/components";
import Head from "next/head";
import { BgImage } from "@/images";

export default function Home() {
 
  /* Dzien / Noc - motyw */
  const BoxBG = useColorModeValue(BgImage.day, BgImage.night);
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <> 
    <Head>
      <title>Join to us!</title>
    </Head>
    
    <main>
    <Box bgImage={BoxBG}  height={{base: '100vh', sm: '150vh'}}>
      <IndexPage/>
      <Container>

      </Container>
        
      </Box>
    </main>
    </>
  )
}
