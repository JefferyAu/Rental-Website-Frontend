import Header from "../../layout/component/Header";
import Footer from "../../layout/component/Footer";
import Banner from "./component/Banner.tsx";
import "./component/style.css"
import {PropertyDetailsDto} from "../../../data/PropertyDetails.type.ts";
import mockData from "../response.json";
import LatestRentalProperty from "../../layout/component/LatestRentalProperty";
import {useEffect, useState} from "react";
import FilterSection from "./component/FilterSection.tsx";
import { Container} from "react-bootstrap";
import LoadingContainer from "../../layout/component/LoadingContainer.tsx";

export default function Property(){

  const [propertyDetailsDto, setPropertyDetailsDto] = useState<PropertyDetailsDto[] | undefined>(undefined);
  const [locationFilter,setLocationFilter] = useState<string>("");
  const [districtTypeFilter,setDistrictTypeFilter] = useState<string>("");

  const handleLocationFilterChange = (locationFilter:string) =>{
    setLocationFilter(locationFilter)
  }

  const handleDistrictFilterChange = (districtTypeFilter:string) =>{
    setDistrictTypeFilter(districtTypeFilter)
  }

  useEffect(()=>{
    setPropertyDetailsDto(mockData);
  },[])

    return (
      <>
        <Header/>
        <Banner/>
        <Container>
          <FilterSection locationFilter={locationFilter}
                         handleLocationFilterChange={handleLocationFilterChange}
                         districtTypeFilter={districtTypeFilter}
                         handleDistrictFilterChange={handleDistrictFilterChange}
          />

            {
              propertyDetailsDto ?
                <LatestRentalProperty getPropertyDetailsDtoList={propertyDetailsDto}
                                      locationFilter={locationFilter}
                                      districtTypeFilter={districtTypeFilter}
                />
                :<LoadingContainer/>
            }

        </Container>
        <Footer/>
      </>
    );
}