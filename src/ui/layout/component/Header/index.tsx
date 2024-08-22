import {Component} from "react";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./style.css"

type Props = {}

type State = {}

export default class Header extends Component<Props, State>{
  render() {
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
              <NavDropdown title="我的賬號" id="basic-nav-dropdown" className="header-right">
                <NavDropdown.Item href="#action/3.1">個人資料</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  登出
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className="header-right" id="login-text"><div className="login-logo"></div>&nbsp;
                登入</Nav.Link>
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
}