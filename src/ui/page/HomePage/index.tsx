import Header from "../../layout/component/Header";
import Hero from "./component/Hero.tsx";
import "./component/style.css";
import Footer from "../../layout/component/Footer";
import {PropertyDetailsDto} from "../../../data/product/PropertyDetails.type.ts";
import mockData from "../response.json"
import LatestRentalProperty from "../../layout/component/LatestRentalProperty";
import {useEffect, useState} from "react";
import LoadingContainer from "../../layout/component/LoadingContainer.tsx";



export default function HomePage() {

  const [propertyDetailsDto, setPropertyDetailsDto] = useState<PropertyDetailsDto[] | undefined>(undefined);
  const [locationFilter] = useState<string>("");
  const [districtTypeFilter] = useState<string>("");
  // // const handleLocationFilterChange = (locationFilter:string) =>{
  // //   setLocationFilter(locationFilter)
  // // }

  useEffect(()=>{
   setPropertyDetailsDto(mockData);
  },[])

  return (
    <>
      <Header/>
      <Hero/>
      <div className="latest-text">
        <h1>熱門租盤</h1><br/>
      </div>
      {
        propertyDetailsDto ?
          <LatestRentalProperty getPropertyDetailsDtoList={propertyDetailsDto}
          locationFilter={locationFilter}
          districtTypeFilter={districtTypeFilter}
          />
          :<LoadingContainer/>
      }
      <Footer/>
    </>
  );

}