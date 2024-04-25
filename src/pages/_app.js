
import { SidebarProvider } from "@/contexts/SidebarContext";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <SidebarProvider>
        <Component {...pageProps} />;
      </SidebarProvider>
    </ChakraProvider>
  ) 
  
}
