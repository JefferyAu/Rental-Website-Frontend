import {Col, Row} from "react-bootstrap";

export default function Banner(){
  return(
    <>
      <Row className="contact-banner-img">
        <Col sm={8}></Col>
        <Col sm={4} className="ContactUs-details">
          <h1>聯絡我們</h1>
          <hr className="contactHr"/>
          <p>銅鑼灣謝斐道535號Tower 535 20樓</p>
          <p>電話: (852) 6761-3714</p>
        </Col>
      </Row>
    </>
  )
}