import "./style.css"
import SingleProperty from "./SingleProperty.tsx";
import {Col, Container, Row} from "react-bootstrap";
import {PropertyDetailsDto} from "../../../../data/PropertyDetails.type.ts";

type Props = {
  getPropertyDetailsDtoList:PropertyDetailsDto[]
  locationFilter:string
  districtTypeFilter:string
}


export default function LatestRentalProperty({getPropertyDetailsDtoList,
                                               locationFilter,
                                               districtTypeFilter}:Props) {
    return (
      <Container>
        <div className="single-property">
        </div>
        <Row>
          {
            getPropertyDetailsDtoList.filter((value)=>(
              value.address.includes(locationFilter) && value.district.includes(districtTypeFilter)
            ))
              .map((value)=> (

              <Col lg={4} sm={12} md={6}>
              <SingleProperty key={value.pid} getPropertyDetailsDto={value}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    );
}