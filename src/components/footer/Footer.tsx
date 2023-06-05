import {
    Box,
    Container,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { ThemeAppDay } from '@/app/ColorsTheme';
import GithubIcon from './GithubIcon';
import Link from 'next/link';

export default function Footer() {
    const FooterBackgroundColor = useColorModeValue(ThemeAppDay.lgreen1, "yellow.100");
    const TextDescriptionColor = useColorModeValue("black", "white");

    return (
        <Box
        bg={FooterBackgroundColor}
        color={TextDescriptionColor}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'row', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}>
            <Link href={"https://github.com/PiotrO9"}>
                <GithubIcon/>
            </Link>
            <Link href={"https://github.com/kczmrz"}>
                <GithubIcon/>
            </Link>
        </Container>
      </Box>
    )
}