import {Button, Col, Form, Row} from "react-bootstrap";

export default function ContactForm(){
  return(
    <>
      <Row className="submitForm">
        <Col sm={4} >
          <h3>聯絡方法</h3><br/>
          <p>如有任何查詢, 歡迎致電或電郵我們。</p>
          <p>電話: (852) 1234-5678</p>
          <p>電郵: xxx@gmail.com</p>
        </Col>
        <Col sm={8}>
          <h3>查詢表單</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="你的名字" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="你的電郵" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Control type="text" placeholder="你的電話" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="你的查詢"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              提交
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}
