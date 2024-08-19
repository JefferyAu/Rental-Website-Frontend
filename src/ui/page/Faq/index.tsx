import {Component} from "react";
import Header from "../../layout/component/Header";
import Footer from "../../layout/component/Footer";
import Banner from "./component/Banner.tsx";
import "./component/style.css"
import FaqSection from "./component/FaqSection.tsx";

type Props = {}

type State = {}

export default class Faq extends Component<Props, State>{
  render() {
    return (
      <>
        <Header/>
        <Banner/>
        <FaqSection/>
        <Footer/>
      </>
    );
  }
}