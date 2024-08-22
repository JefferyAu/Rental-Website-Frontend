import {Badge, Col, Container, Row, Spinner} from "react-bootstrap";
import {PropertyDetailsDto} from "../../../../data/product/PropertyDetails.type.ts";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {LoginUserContext} from "../../../../context/LoginUserContext.ts";

type Props={
  getPropertyDetailsDto:PropertyDetailsDto
}

export default function PropertyDetailContainer({getPropertyDetailsDto}:Props){

  const navigate = useNavigate();
  const loginUser = useContext(LoginUserContext);

  const renderOwnInfo = () =>{
    if(loginUser){
      return(
          <div className="owner-info"><h5>業主聯絡方法</h5>
            <hr/>
            <p>稱呼: {getPropertyDetailsDto.ownerName}</p>
            <p>WhatsApp: {getPropertyDetailsDto.ownerPhone}</p>
          </div>
      )
    } else if (loginUser === null) {
      return (
        <div className="owner-info"
             style={{
               cursor:"pointer"
             }}
        onClick={()=>{navigate(`/login`)}}
        >
          <h5>業主聯絡方法</h5>
          <hr/>
          <p>你必須登入才能看見資料</p>
        </div>
      )
    }else {
      return (
        <Spinner animation="border" variant="dark" />
      )
    }
  }

  return (
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
            {
              renderOwnInfo()
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}