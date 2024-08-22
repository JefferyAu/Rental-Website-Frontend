import Header from "../../layout/component/Header";
import {Alert, Button, Container, Form} from "react-bootstrap";
import {useState} from "react";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"
import {useNavigate} from "react-router-dom";


export default function LoginPage(){

  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const [isLoginFailed,setIsLoginFailed] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setPassword(event.target.value);
  }

  const handleSignInWithEmailAndPassword = async (event:  React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email,password);
    if(loginResult){
      navigate(-1);
    }else {
      setIsLoginFailed(true);
    }
  }

  const handleSignInWithGoogle = async  (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    event.preventDefault()
    const loginResult = await FirebaseAuthService.handleSignInWithGoogle();
    if(loginResult){
      navigate(-1);
    }else {
      setIsLoginFailed(true);
    }
  }

  return(
    <>
      <Header/>
      <Container>
        <Form style={{
          marginTop: "50px"
        }}
        onSubmit={handleSignInWithEmailAndPassword}
        >
          {
            isLoginFailed &&
              <Alert variant="danger">Login failed, please try again</Alert>
          }
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmailChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
          <hr/>
          <Button
            variant="light"
            onClick={handleSignInWithGoogle}
          >
            <img style={{width: "40px"}} src="/src/assets/img/images.png"/>
          </Button>
        </Form>
      </Container>
    </>
  )
}