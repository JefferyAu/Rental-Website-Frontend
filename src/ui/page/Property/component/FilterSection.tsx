import {Col, Form, Row} from "react-bootstrap";
import React from "react";

type Props ={
  locationFilter:string
  handleLocationFilterChange:(locationFilter:string)=> void
  districtTypeFilter:string
  handleDistrictFilterChange:(districtTypeFilter:string)=>void
}

export default function FilterSection({locationFilter,
                                        handleLocationFilterChange,
                                        districtTypeFilter,
                                        handleDistrictFilterChange}:Props){


  const handleInputFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
    handleLocationFilterChange(event.target.value)
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
    handleDistrictFilterChange(event.target.value)
  }

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
        {/*<h3>搜尋條件</h3><br/>*/}
        <br/>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>地址/大廈名稱/街道</Form.Label>
            <Form.Control
              type="text"
              value={locationFilter}
              placeholder="例如：將軍澳大廈"
              onChange={handleInputFieldChange}
            />
          </Form.Group>


          <Form.Label>地區</Form.Label>
          <Form.Select aria-label="Default select example"
            value={districtTypeFilter}
            onChange={handleSelectChange}
          >
            <option value="">全部地區</option>
            <option value="黃大仙區">黃大仙區</option>
            <option value="香港島">香港島</option>
            <option value="中西區">中西區</option>
            <option value="九龍城區">九龍城區</option>
          </Form.Select>
          <br/>
          <div className="search-btn">
            <Form.Group as={Row} className="mb-3">
              <Col sm={{span: 10, offset: 2}}>
                {/*<Button type="submit">搜尋</Button>*/}
              </Col>
            </Form.Group>
          </div>
        </Form>
      </div>
    </>
  )
}