import {Button, Card} from "react-bootstrap";

export default function SingleBlog(){
  return(
    <>
      <Card className="mt-3 mb-5">
        <Card.Img variant="top" src="https://www.dataplugs.com/wp-content/uploads/2024/08/dp-blog-2024-09-18.jpg.webp" />
        <Card.Body>
          <Card.Title>Blog Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}