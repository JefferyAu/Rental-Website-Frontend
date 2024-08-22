import "./style.css"
import Header from "../../layout/component/Header";
import Footer from "../../layout/component/Footer";
import PropertyDetailsByID from "./component/PropertyDetailsByID.tsx";
import {useEffect, useState} from "react";
import {PropertyDetailsDto} from "../../../data/PropertyDetails.type.ts";
import mockData from "../response.json";
import LoadingContainer from "../../layout/component/LoadingContainer.tsx";

export default function PropertyDetail(){

  const [propertyDetailsDto, setPropertyDetailsDto] = useState<PropertyDetailsDto[] | undefined>(undefined);

  useEffect(()=>{
    setPropertyDetailsDto(mockData);
  },[])

  return(
    <>
      <Header/>
      {
        propertyDetailsDto ?
          <PropertyDetailsByID getPropertyDetailsDtoList={propertyDetailsDto}/>
          :<LoadingContainer/>
      }
      <Footer/>
    </>
  )
}