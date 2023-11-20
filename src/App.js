import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import WOW from "wow.js";
import HomeTwo from "./pages/Home/HomeTwo";
import Blog from "./pages/Blog/Blog";
import BlogDetailsPage from "./pages/BlogDetails/BlogDetailsPage";
import LoadingOverlay from "react-loading-overlay";
import { IcoContext } from "./contexts/context";
import { useContext } from "react";

import { ProjectId } from "./utils/constants";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import Terms from "./pages/t&c/t&c";
// import "../styles.css";
const chains = [bsc];
const projectId = ProjectId;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

// 2. Configure wagmi client

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  publicClient,
});

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  const { isLoading } = useContext(IcoContext);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [pathname]);

  // useEffect(() => {
  //   if (window.location.pathname !== "/") {
  //     window.location.replace("/");
  //   }
  // });

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Routes>
          {/* <Route path="/home-two" element={<Home />} /> */}
          <Route path="/" element={<HomeTwo />} />
          <Route path="terms-and-conditions" element={<Terms />} />
          {/* <Route path="blog-details" element={<BlogDetailsPage />} /> */}
        </Routes>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;
