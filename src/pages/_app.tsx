import { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { NavLink } from "@/components";
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

export const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     
     <ChakraProvider theme={theme}>
     <NavLink/>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }:any) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;