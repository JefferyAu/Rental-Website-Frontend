import {Component} from "react";
import Header from "../../layout/component/Header";
import Footer from "../../layout/component/Footer";
import Banner from "./component/Banner.tsx";
import "./component/style.css";
import LatestBlog from "../../layout/component/LatestBlog";

type Props = {}

type State = {}

export default class Blog extends Component<Props, State>{
  render() {
    return (
      <>
        <Header/>
        <Banner/>
        <LatestBlog/>
        <Footer/>
      </>
    );
  }
}