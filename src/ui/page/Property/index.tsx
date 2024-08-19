import {Component} from "react";
import Header from "../../layout/component/Header";
import Footer from "../../layout/component/Footer";
import Banner from "./component/Banner.tsx";
import "./component/style.css"
import {PropertyDetailsDto} from "../../../data/PropertyDetails.type.ts";
import mockData from "../response.json";
import LatestRentalProperty from "../../layout/component/LatestRentalProperty";
import FilterProperty from "./component/FilterProperty.tsx";

type Props = {}

type State ={
  getPropertyDetailsDtoList:PropertyDetailsDto[] | undefined
}

export default class Property extends Component<Props, State>{

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
        <Banner/>
        <FilterProperty/>
        {
          this.state.getPropertyDetailsDtoList &&
            <LatestRentalProperty getPropertyDetailsDtoList={this.state.getPropertyDetailsDtoList}/>
        }
        <Footer/>
      </>
    );
  }
}