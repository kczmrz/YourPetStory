import { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Navbar } from "@/components";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store/store";

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

export const theme = extendTheme({
  colors: {colors},
   breakpoints: {
    xsm: '15em', //
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  }
 
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <ReduxProvider store={store}> 
        <ChakraProvider theme={theme}>
          <Navbar/>
          <Component {...pageProps} />
          </ChakraProvider>
    </ReduxProvider>
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