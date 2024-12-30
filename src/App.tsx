import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Metrics from "./pages/Metrics";
import { WalletProvider } from "./context/WalletContext";

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/metrics" element={<Metrics />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;
