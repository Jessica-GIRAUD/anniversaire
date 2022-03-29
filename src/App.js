import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import First from "./components/First";
import Second from "./components/Second";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
