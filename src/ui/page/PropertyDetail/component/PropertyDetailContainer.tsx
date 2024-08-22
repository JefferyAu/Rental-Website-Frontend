import {Badge, Col, Container, Row} from "react-bootstrap";
import {PropertyDetailsDto} from "../../../../data/PropertyDetails.type.ts";

type Props={
  getPropertyDetailsDto:PropertyDetailsDto
}

export default function PropertyDetailContainer({getPropertyDetailsDto}:Props){
  return(
    <>
      <Row className="property-banner-img">
      </Row>
      <Container style={{
        marginTop: "80px"
      }}>
        <Row>
          <Col sm={8}>
            <div className="property-detail-name">
              <h1>{getPropertyDetailsDto.floor}</h1>
              {getPropertyDetailsDto.isRent
                ? <Badge bg="success">放租中</Badge>
                : <Badge bg="secondary">已放租</Badge>}
            </div>
            <br/>
            <br/>
            <h5>{getPropertyDetailsDto.rental}/月</h5>
            <p>
              地址： {getPropertyDetailsDto.address} <br/>
              實用面積： {getPropertyDetailsDto.saleableSize} <br/>
              房間： {getPropertyDetailsDto.Room} <br/>
              廳 ： {getPropertyDetailsDto.livingRoom} <br/>
              刊登日期： {getPropertyDetailsDto.date} <br/>
            </p>
            <br/>
            <h4>簡介</h4>
            <p>
              {getPropertyDetailsDto.inIntroduction}
            </p>
            <br/>
            <br/>
          </Col>
          <Col sm={4}>
            <div className="owner-info">
              <h5>業主聯絡方法</h5>
              <hr/>
              <p>你必須登入才能看見資料</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}