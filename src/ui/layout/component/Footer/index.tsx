import {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./style.css";

type Props = {}

type State = {}

export default class Footer extends Component<Props, State> {
  render() {
    return (
      <Container>
        <Row className="footer-container">
          <Col className="d-flex justify-content-center align-items-center flex-column">
            <img src="/src/assets/img/ug.png" id="footer-img"/>
            <p>你的免費租屋網。100%終身免佣。自助配對。</p>
          </Col>
          <Col className="d-flex justify-content-center align-items-center flex-column">
            <h4 style={{
              marginTop: 20
            }} className="footer-text">連結</h4>
            <div className="footer-text">
            <a href="#link" >主頁</a> &nbsp;
            <a href="#link">搜尋租盤</a>
            </div>
            <div className="footer-text">
            <a href="#link">網誌</a>&nbsp;
            <a href="#link">常見問題</a>
            </div>
            <div className="footer-text">
            <a href="#link">聯絡我們</a>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center flex-column">
            <h4 style={{
              marginTop: 20
            }} className="footer-text">聯絡我們</h4>
            <div>
              銅鑼灣謝斐道535號Tower 535 20樓<br/>
              Phone: (852) 6761-3714<br/>
              E-Mail: xxx@gmail.com
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}