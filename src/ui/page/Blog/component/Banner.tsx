import {Col, Row} from "react-bootstrap";

export default function Banner(){
  return(
    <>
      <Row className="blog-banner-img">
        <Col className="d-flex justify-content-center align-items-center flex-column">
          <div className="align-items-lg-end">
            <h3>Blog</h3>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </>
  )
}