import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup/SignUp.js";
import SignIn from "./pages/signin/SignIn.js";
import Home from "./pages/home/Home.js";
import Ranking from "./pages/ranking/Ranking.js"
import RankingNotSignedIn from "./pages/rankingNotSignedIn/RankingNotSignedIn.js";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/ranking-not-signed-in" element={<RankingNotSignedIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}