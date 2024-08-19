import {Col, Row} from "react-bootstrap";

export default function Banner(){
  return(
    <>
      <Row className="blog-banner-img">
        <Col className="d-flex justify-content-center align-items-center flex-column">
          <div className="align-items-lg-end" style={{
            color:"white"
          }}>
            <h3>網誌</h3>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </>
  )
}