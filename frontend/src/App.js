import "./App.css";
import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import Toppage from "./pages/Toppage";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <Toppage />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
