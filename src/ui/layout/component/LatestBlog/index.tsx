import SingleBlog from "./SingleBlog.tsx";
import {Col, Container, Row} from "react-bootstrap";

export default function LatestBlog(){
  return(
    <Container>
      <Row>
      {
        Array.from({length:3}).map(()=>(
          <Col xs={12} sm={6} md={4}>
          <SingleBlog/>
          </Col>
        ))
      }
      </Row>
    </Container>
  )
}