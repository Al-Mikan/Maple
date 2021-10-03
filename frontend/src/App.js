import "./App.css";
import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import Toppage from "./pages/Toppage";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Toppage />
      </div>
    </ChakraProvider>
  );
}

export default App;
