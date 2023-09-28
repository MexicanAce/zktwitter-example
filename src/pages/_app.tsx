import { ChakraProvider } from "@chakra-ui/react";
import theme from "../themes";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/global.css";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import {
  arbitrum,
  arbitrumGoerli,
  avalanche,
  avalancheFuji,
  base,
  baseGoerli,
  bsc,
  bscTestnet,
  celo,
  celoAlfajores,
  filecoin,
  foundry,
  gnosis,
  gnosisChiado,
  goerli,
  hardhat,
  localhost,
  mantle,
  mantleTestnet,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  polygonZkEvm,
  polygonZkEvmTestnet,
  scrollTestnet,
  sepolia,
  taikoTestnetSepolia,
  zkSync,
  zkSyncTestnet,
} from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";

const queryClient = new QueryClient();

const { chains, publicClient, webSocketPublicClient } = configureChains([mainnet, sepolia, goerli, arbitrum, arbitrumGoerli, bsc, bscTestnet, optimism, optimismGoerli, polygon, polygonMumbai, polygonZkEvm, polygonZkEvmTestnet, zkSync, zkSyncTestnet, scrollTestnet], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID", // add your Wallet Connect project id here
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme({
            accentColor: "#0c4cbc",
          })}
        >
          <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
            </ChakraProvider>
          </QueryClientProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
