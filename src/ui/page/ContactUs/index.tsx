import {Component} from "react";
import Header from "../../layout/component/Header";
import Footer from "../../layout/component/Footer";
import Banner from "./component/Banner.tsx";
import "./component/style.css"
import ContactForm from "./component/ContactForm.tsx";
import {Container} from "react-bootstrap";

type Props = {}

type State = {}

export default class ContactUs extends Component<Props, State>{
  render() {
    return (
      <>
        <Header/>
        <Banner/>
        <Container>
        <ContactForm/>
        </Container>
        <Footer/>
      </>
    );
  }
}