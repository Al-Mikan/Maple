import logo from "./logo.svg";
import "./App.css";
import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import Toppage from "./pages/Toppage";
import Header from "./components/header";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <Header/>
        <Toppage />
      </div>
    </ChakraProvider>
  );
}

export default App;
