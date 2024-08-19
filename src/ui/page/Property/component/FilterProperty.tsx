import {Col, Container, Dropdown, DropdownButton, Row} from "react-bootstrap";


export default function FilterProperty(){
  return (
    <>
      <Row>
        {/*<Col sm={4} className="filter-section">*/}
        {/*  <FilterSection/>*/}
        {/*</Col>*/}
        <Col>
          <Container>
          <div className="filter-btn">
          <DropdownButton id="dropdown-basic-button" title="預設排序">
            <Dropdown.Item href="#/action-1">預設排序</Dropdown.Item>
            <Dropdown.Item href="#/action-2">租金 (由低至高)</Dropdown.Item>
            <Dropdown.Item href="#/action-3">租金 (由高至低)</Dropdown.Item>
            <Dropdown.Item href="#/action-3">實用面積 (由低至高)</Dropdown.Item>
            <Dropdown.Item href="#/action-3">實用面積 (由高至高低)</Dropdown.Item>
          </DropdownButton>
          </div>
          </Container>
        </Col>
      </Row>
    </>
  )
}