import {Col, Row} from "react-bootstrap";

export default function Banner(){
  return(
    <>
      <Row className="faq-banner-img">
        <Col className="d-flex justify-content-center align-items-center flex-column">
          <div className="align-items-lg-end">
            <h3>常見問題</h3>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </>
  )
}