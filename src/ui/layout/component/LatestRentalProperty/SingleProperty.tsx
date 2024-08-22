import {Badge, Card, Col, Row} from "react-bootstrap";
import {PropertyDetailsDto} from "../../../../data/product/PropertyDetails.type.ts";
import {useNavigate} from "react-router-dom";

type Props ={
  getPropertyDetailsDto:PropertyDetailsDto
}

export default function SingleProperty({getPropertyDetailsDto}:Props){
    const navigate = useNavigate();

    return(
    <>
      <Card style={{
        cursor:"pointer"
      }} className="propertyCard"
      onClick={()=>{navigate(`/property/detail/${getPropertyDetailsDto.pid}`)}}
      >
        <div className="singlePropertyPadding">
        <Card.Img variant="top" src={getPropertyDetailsDto.imageUrl} />
        <div className="propertyRentStatus">
          <h5>{

          }
            {getPropertyDetailsDto.isRent
              ? <Badge bg="success">放租中</Badge>
              : <Badge bg="secondary">已放租</Badge>} &nbsp;
            HKD{getPropertyDetailsDto.rental} / 每月
          </h5>
        </div>
        <Card.Body>
          <Card.Title>{getPropertyDetailsDto.floor}</Card.Title>
          <div className="addressSection">
          <div className="propertyLocation"></div>&nbsp;
          <Card.Text>
            {getPropertyDetailsDto.address}
          </Card.Text>
          </div>
          <Row className="propertyDetails">
            <Col>實用面積 <br/>
              {getPropertyDetailsDto.saleableSize}
            </Col>
            <Col>房間<br/>
              {getPropertyDetailsDto.Room}</Col>
            <Col>聽<br/>
              {getPropertyDetailsDto.livingRoom}</Col>
          </Row>
          <Row className="propertyIssueDate">
            <Col>刊登日期:</Col>
            <Col>{getPropertyDetailsDto.date}</Col>
          </Row>
          {/*<Button variant="primary">Go somewhere</Button>*/}
        </Card.Body>
        </div>
      </Card>
    </>
  )
}