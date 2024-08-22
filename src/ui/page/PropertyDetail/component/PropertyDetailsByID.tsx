import {PropertyDetailsDto} from "../../../../data/product/PropertyDetails.type.ts";
import {useParams} from "react-router-dom";
import PropertyDetailContainer from "./PropertyDetailContainer.tsx";

type Params ={
  propertyId:string
}

type Props ={
  getPropertyDetailsDtoList:PropertyDetailsDto[]
}

export default function PropertyDetailsByID({getPropertyDetailsDtoList}:Props){

  const params = useParams<Params>()

  return(
    <>
      {

        getPropertyDetailsDtoList.filter((value)=>(
          value.pid == Number(params.propertyId)
        )).map((value)=>(
          <PropertyDetailContainer key={value.pid} getPropertyDetailsDto={value}/>
        ))
      }
    </>
  )
}