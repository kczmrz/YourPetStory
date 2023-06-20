import { AboutUS } from "@/components"
import { Box, useColorModeValue, useColorMode } from "@chakra-ui/react"
import Head from "next/head";
import { BgImage } from "@/images";

export default function About()
{
     /* Dzien / Noc - motyw */
  const BoxBG = useColorModeValue(BgImage.day, BgImage.night);
  const { colorMode, toggleColorMode } = useColorMode();
  
 return(
  <>
    <Head>
        <title>O nas!</title>
    </Head>
    <main className="">
       <Box bgImage={BoxBG}  height={{lg: '100vh', sm: '150vh'}}> 
          <AboutUS/>
       </Box>
    </main>
  </>
    )
}