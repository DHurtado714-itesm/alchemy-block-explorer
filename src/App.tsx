import Layout from "./components/Layout";
import Home from "./pages/Home";
import Metrics from "./pages/Metrics";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
