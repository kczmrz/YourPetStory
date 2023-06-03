import { Stack, Flex, Box , AbsoluteCenter } from "@chakra-ui/react";
import Image from "next/image";
import { indexdog } from "@/images"
export default function IndexPage() {
   return(
    <>
    <Stack minH={'100vh'} direction={{base: 'column', md: 'row'}}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack>

        </Stack>
      </Flex>
      <Flex flex={1} placeContent={'center'} justifyContent={'center'}>
      <Box mt={10} w={'80%'}> 
        <Image
          src={indexdog}
          alt={"Index doge"}/>
       </Box>
      </Flex>
    </Stack>
    </>
    )
}

