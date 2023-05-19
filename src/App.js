import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}