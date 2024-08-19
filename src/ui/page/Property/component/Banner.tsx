import {Col, Row} from "react-bootstrap";

export default function Banner(){
  return(
    <>
      <Row className="banner-img">
        <Col className="d-flex justify-content-center align-items-center flex-column">
          <div className="align-items-lg-end">
            <h3>搜尋租盤</h3>
            <p>100%終身免佣。自助配對。</p>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </>
  )
}