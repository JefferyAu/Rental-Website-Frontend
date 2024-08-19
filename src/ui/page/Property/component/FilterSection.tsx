import {Button, Col, Form, Row} from "react-bootstrap";


export default function FilterSection(){
  return(
    <>
      {/*<h3>搜尋條件</h3><br/>*/}
      {/*<div className="searchSection">*/}
      {/*  <label>地址/大廈名稱/街道</label><br/>*/}
      {/*  <input type="text" placeholder="例如：將軍澳大廈"/><br/><br/>*/}
      {/*  <label>地區</label>*/}
      {/*  <DropdownButton id="dropdown-basic-button" title="黃大仙區">*/}
      {/*    <Dropdown.Item href="#/action-1">黃大仙區</Dropdown.Item>*/}
      {/*    <Dropdown.Item href="#/action-2">香港島</Dropdown.Item>*/}
      {/*    <Dropdown.Item href="#/action-3">中西區</Dropdown.Item>*/}
      {/*    <Dropdown.Item href="#/action-3">九龍城區</Dropdown.Item>*/}
      {/*    <Dropdown.Item href="#/action-3">觀塘區</Dropdown.Item>*/}
      {/*  </DropdownButton>*/}
      {/*</div>*/}
      <div className="searchSection">
      <h3>搜尋條件</h3><br/>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>地址/大廈名稱/街道</Form.Label>
          <Form.Control type="email" placeholder="例如：將軍澳大廈" />
        </Form.Group>


        <Form.Label>地區</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>黃大仙區</option>
          <option value="1">香港島</option>
          <option value="2">中西區</option>
          <option value="3">九龍城區</option>
        </Form.Select>
        <br/>
        <div className="search-btn">
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">搜尋</Button>
          </Col>
        </Form.Group>
        </div>
      </Form>
      </div>
    </>
  )
}