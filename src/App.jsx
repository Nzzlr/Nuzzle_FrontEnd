import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";

// import Header and Footer
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// import Home page that is Naming Character page
import Home from "./pages/Home/Home";

// import basic pages
import FirstPage from "./pages/RegisterAndConnect/FirstPage";
import Peek from "./pages/Peek";
import Calendar from "./pages/Calendar";
import Setting from "./pages/Setting";

// import Register and connect page
import Login from "./pages/RegisterAndConnect/Login";
import FindId from "./pages/RegisterAndConnect/FindId";
import FindAccount from "./pages/RegisterAndConnect/FindAccount";
import NoAccount from "./pages/RegisterAndConnect/NoAccount";
import SignUp from "./pages/RegisterAndConnect/SignUp";
import FindPw from "./pages/RegisterAndConnect/FindPw";
import ChangePw from "./pages/RegisterAndConnect/ChangePw";
import Policy from "./pages/RegisterAndConnect/Policy";
import KakaoLogin from "./pages/RegisterAndConnect/KakaoLogin";
import Connect from "./pages/RegisterAndConnect/Connect";
import EmailSignUp from "./pages/RegisterAndConnect/EmailSignUp";
import ConnectComplete from "./pages/RegisterAndConnect/ConnectComplete";
import SharedLink from "./pages/RegisterAndConnect/SharedLink";

// import Character pages
import ChaName from "./pages/MakingCharacter/ChaName";
import Keyword from "./pages/MakingCharacter/Keyword";
import ChaMake1 from "./pages/MakingCharacter/ChaMake1";
import ChaColor from "./pages/MakingCharacter/ChaColor";
import ChaComplete from "./pages/MakingCharacter/ChaComplete";
import ChaNameComplete from "./pages/MakingCharacter/ChaNameComplete";
import ChaNoName from "./pages/MakingCharacter/ChaNoName";

// import Question and Photo pages
import PastQuestionPage from "./pages/Question/PastQuestionPage";
import TodayQuestionPage from "./pages/Question/TodayQuestionPage";
import PhotoCapturePage from "./pages/UploadPhoto/PhotoCapturePage";
import WakeUpLetterPage from "./pages/Question/WakeUpLetterPage";

// import Insider pages
import Insider from "./pages/Insider/Insider";
import SingleInsiderMemo from "./pages/Insider/SingleInsiderMemo";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppContent = () => {
  const location = useLocation();

  // No header usage page
  const noHeaderPaths = ["/", "/ChaMake1", "/chacomplete", "/chaComplete"]; // 뒤로가기 버튼 사용하지 않는 페이지들

  // No Footer usage page
  const noFooterPaths = [
    "/Peek",
    "/login",
    "/login/kakao",
    "/help/findid",
    "/help/findpw",
    "/help/changepw",
    "/signup",
    "/signup/email",
    "/policy",
    "/connect",
    "/connect/complete",
    "/sharedlink",
    "/Keyword",
    "/ChaMake1",
    "/chacomplete",
    "/chaComplete",
    "/firstpage",
  ];

  const showHeader = !noHeaderPaths.includes(location.pathname);
  const showFooter = !noFooterPaths.includes(location.pathname);

  // 특정 경로에 따라 extraClass를 설정
  const headerExtraClass =
    location.pathname === "/today-question" ? "custom-header-bg" : "";

  return (
    <>
      {showHeader && <Header extraClass={headerExtraClass} />}
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ChaName" element={<ChaName />} />
          <Route path="/ChaNoName" element={<ChaNoName />} />
          <Route path="/ChaNameComplete" element={<ChaNameComplete />} />
          <Route path="/ChaColor" element={<ChaColor />} />
          <Route path="/ChaMake1" element={<ChaMake1 />} />
          <Route path="/ChaComplete" element={<ChaComplete />} />
          <Route path="/Keyword" element={<Keyword />} />
          <Route path="/past-question" element={<PastQuestionPage />} />
          <Route path="/today-question" element={<TodayQuestionPage />} />
          <Route path="/wake-up-letter" element={<WakeUpLetterPage />} />
          <Route path="/photo-capture" element={<PhotoCapturePage />} />
          <Route path="/peek" element={<Peek />} />
          <Route path="/insider" element={<Insider />} />
          <Route path="/singInsiderMemo" element={<SingleInsiderMemo />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/setting" element={<Setting />} />

          <Route path="/firstpage" element={<FirstPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/help/findid" element={<FindId />}></Route>
          <Route path="/help/findpw" element={<FindPw />}></Route>
          <Route path="/help/changepw" element={<ChangePw />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signup/email" element={<EmailSignUp />}></Route>
          <Route path="/policy" element={<Policy />}></Route>
          <Route path="/sharedlink" element={<SharedLink />}></Route>
          <Route path="/connect" element={<Connect />}></Route>
          <Route path="/connect/complete" element={<ConnectComplete />}></Route>
          <Route path="/login/kakao" element={<KakaoLogin />}></Route>
          <Route path="/help/findaccount" element={<FindAccount />}></Route>
          <Route path="/help/noaccount" element={<NoAccount />}></Route>
        </Routes>
      </Main>
      {showFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <AppContainer>
      <Router>
        <AppContent />
      </Router>
    </AppContainer>
  );
};

export default App;
