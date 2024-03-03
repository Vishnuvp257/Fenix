import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Toaster } from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://successful-eel-pea-coat.cyclic.app";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            border: "2px solid white",
            padding: "20px",
            fontSize: "15px",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
