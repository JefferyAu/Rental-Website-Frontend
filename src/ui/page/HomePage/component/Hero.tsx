import {Button, Col, Row} from "react-bootstrap";
import { useTypewriter , Cursor} from "react-simple-typewriter";

export default function Hero(){

  const [text] = useTypewriter({
    words: ['住宅,工商','店鋪,車位'],
    typeSpeed: 300,
    loop: 0
  })

  return (
    <>
      <Row className="hero-img">
        <Col className="d-flex justify-content-center  flex-column">
          <div className="align-items-lg-end" id="heroText">
            <h2 style={{
              color: "white"
            }}>你的免費租屋網，可放租<span className="typeWriter">{text}<Cursor/></span></h2>

            <p style={{
              color: "white"
            }}>100%終身免佣。自助配對。</p>
            <Button style={{
              backgroundColor:"rgba(255, 219, 21, 1)",
              color: "black"
            }} href="/property">搜尋租盤</Button>{''}
          </div>
        </Col>
        <Col></Col>
      </Row>
    </>
  )
}