import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup/SignUp.js";
import SignIn from "./pages/signin/SignIn.js";
import Home from "./pages/home/Home.js";
import Ranking from "./pages/ranking/Ranking.js"
import RankingNotSignedIn from "./pages/rankingNotSignedIn/RankingNotSignedIn.js";
import Auth from "./pages/Auth.js";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user/open/:shortUrl" render={() => <RedirectComponent to={`${process.env.REACT_APP_API_URL}/user/open/:shortUrl`} />} />
          <Route path="/u/:shortUrl" render={() => <RedirectComponent to={`${process.env.REACT_APP_API_URL}/u/:shortUrl`} />} />
          <Route path="/user/open/:shortUrl" to={`${process.env.REACT_APP_API_URL}/user/open/:shortUrl`}/>
          <Route path="/u/:shortUrl" to={`${process.env.REACT_APP_API_URL}/u/:shortUrl`}/>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/ranking-not-signed-in" element={<RankingNotSignedIn />} />
          <Route path="/ranking" element={<Auth><Ranking /></Auth>} />
          <Route path="/" element={<Auth><Home /></Auth>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}