import "./style.css"
import SingleProperty from "./SingleProperty.tsx";
import {Col, Container, Row} from "react-bootstrap";
import {PropertyDetailsDto} from "../../../../data/PropertyDetails.type.ts";

type Props = {
  getPropertyDetailsDtoList:PropertyDetailsDto[]
}


export default function LatestRentalProperty({getPropertyDetailsDtoList}:Props) {
    return (
      <Container>
        <div className="single-property">
        </div>
        <Row>
          {
            getPropertyDetailsDtoList.map((value)=> (
              <Col xs={12} sm={6} md={4}>
              <SingleProperty key={value.pid} getPropertyDetailsDto={value}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    );
}