import React from 'react';
import {
  Box,
  Flex
} from '@chakra-ui/react';
import PhotosStory from './PhotosStory';

export default function AppFeatures() {
    return (
        <Box h={"35%"} w={"100%"}>
          <Flex flexDirection={"row"} justifyContent={"space-evenly"} alignItems={"center"} h={"100%"}>
            <PhotosStory />
          </Flex>
        </Box>
    )
}