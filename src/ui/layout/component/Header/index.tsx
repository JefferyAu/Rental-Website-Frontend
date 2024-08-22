import {Button, Container, Nav, Navbar, NavDropdown, Spinner} from "react-bootstrap";
import "./style.css"
import {useContext} from "react";
import {LoginUserContext} from "../../../../context/LoginUserContext.ts";
import * as FirebaseAuthService from "../../../../authService/FirebaseAuthService.ts"

export default function Header() {
    const loginUser = useContext(LoginUserContext);


    const renderLoginContainer = () =>{
      if(loginUser){
        return(
          <>
            <NavDropdown title="我的賬號" id="basic-nav-dropdown" className="header-right">
              <NavDropdown.Item >我的電郵: {loginUser.email}</NavDropdown.Item>
              <NavDropdown.Item
              onClick={()=>{
                FirebaseAuthService.handleSignOut()
              }}
              >
                登出
              </NavDropdown.Item>
            </NavDropdown>
          </>
        )
      }else if(loginUser === null){
        return (
          <>
            <Nav.Link href="/login" className="header-right" id="login-text"><div className="login-logo"></div>&nbsp;
              登入</Nav.Link>
          </>
        )
      }else {
        return (
          <Spinner animation="border" variant="dark" />
        )
      }
    }

    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/"><img src="/src/assets/img/ug.png" className="header-img"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">主頁</Nav.Link>
                <Nav.Link href="/property">搜尋租盤</Nav.Link>
                <Nav.Link href="/blog">網誌</Nav.Link>
                <Nav.Link href="/faq">常見問題</Nav.Link>
                <Nav.Link href="/contactUs">聯絡我們</Nav.Link>
              </Nav>
              {
                renderLoginContainer()
              }
              <Button style={{
                backgroundColor:"rgba(255, 219, 21, 1)",
                color: "black"
              }} className="header-right">免費放租</Button>{' '}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}