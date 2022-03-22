import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { UserStateContext, DispatchContext } from "../App";
import { Navbar, Container } from "react-bootstrap";

import ThemeToggle from "./ThemeToggle";

import { useRecoilValue } from "recoil";
import { modeState } from "../atom/themeState";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;

  // 로그아웃 클릭 시 실행되는 함수
  const logout = () => {
    // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
    sessionStorage.removeItem("userToken");
    // dispatch 함수를 이용해 로그아웃함.
    dispatch({ type: "LOGOUT" });
    // 기본 페이지로 돌아감.
    navigate("/");
  };

  const ModeState = useRecoilValue(modeState);

  return (
    <Navbar
      className="mb-2 mt-2"
      variant={ModeState.mode === "dark" ? "dark" : "white"}
    >
      <Container>
        <Navbar.Brand>Logo</Navbar.Brand>
        <Nav activeKey={location.pathname}>
          <Nav.Item className="m-1">
            <Nav.Link onClick={() => navigate("/")}>My Page</Nav.Link>
          </Nav.Item>
          <Nav.Item className="m-1">
            <Nav.Link onClick={() => navigate("/network")}>Network</Nav.Link>
          </Nav.Item>
          {isLogin && (
            <Nav.Item className="m-1">
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav.Item>
          )}
          <ThemeToggle />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
