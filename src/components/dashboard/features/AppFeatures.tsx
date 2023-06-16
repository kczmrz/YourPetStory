import React from 'react';
import {
  Box,
  Flex
} from '@chakra-ui/react';
import PhotosStory from './PhotosStory';
import CreateEvents from './CreateEvents';

export default function AppFeatures() {
    return (
        <Box h={"40%"} w={"100%"}>
          <Flex flexDirection={"row"} justifyContent={"space-evenly"} alignItems={"center"} h={"100%"}>
            <PhotosStory />
            <CreateEvents />
          </Flex>
        </Box>
    )
}