import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Index } from "./pages/Index";

function App() {
  return (
    <div className="w-full min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
