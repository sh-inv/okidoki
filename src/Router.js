import { BrowserRouter, Route, Routes } from "react-router-dom";

// 메인페이지
import Main from "./pages/Main";

// 글 목록
import { QnA } from './pages/List';
// 상세페이지
import Detail from './pages/DetailPage/Detail';

// 내 프로필
import Settings from "./pages/Settings";
// 비밀번호 변경
import ChangePasswordConfirm from "./pages/Settings/ProfileSetting/ChangePassWord/ChangePasswordConfirm";
// 회원 탈퇴
import SecessionTab from "./pages/Settings/ProfileSetting/Secession/SecessionTab";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />
        {/* 상세페이지 */}
        <Route path="/articles/1" element={<Detail />} />

        {/* 카테고리 */}
        <Route path="/questions" element={<QnA />} />

        {/* 내 프로필 */}
        <Route path="/settings" element={<Settings />} />
        {/* 비밀번호 변경 */}
        <Route path="/settings/password-changes" element={<ChangePasswordConfirm />} />
        {/* 회원 탈퇴 */}
        <Route path="/user/withdrawConfirm" element={<SecessionTab />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
