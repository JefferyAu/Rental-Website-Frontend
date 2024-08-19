import Header from "../../layout/component/Header";
import Hero from "./component/Hero.tsx";
import "./component/style.css";
import Footer from "../../layout/component/Footer";
import {PropertyDetailsDto} from "../../../data/PropertyDetails.type.ts";
import mockData from "../response.json"
import LatestRentalProperty from "../../layout/component/LatestRentalProperty";
import {Component} from "react";

type Props ={}

type State ={
  getPropertyDetailsDtoList:PropertyDetailsDto[] | undefined
}

export default class HomePage extends Component<Props,State>{

constructor(props:Props) {
  super(props);
  this.state ={
    getPropertyDetailsDtoList:  undefined
  }
}

componentDidMount() {
  this.setState({
    getPropertyDetailsDtoList:mockData
  })
}

  render() {
  return (
    <>
      <Header/>
      <Hero/>
      <div className="latest-text">
        <h1>最新租盤</h1><br/>
      </div>
      {
        this.state.getPropertyDetailsDtoList &&
          <LatestRentalProperty getPropertyDetailsDtoList={this.state.getPropertyDetailsDtoList}/>
      }
      <Footer/>
    </>
  );
}

}