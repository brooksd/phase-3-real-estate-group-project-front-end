import React, {useState,useEffect} from "react"


function Listings(){
    
const [list, setList] = useState([]);

useEffect(()=> {
fetch('http://localhost:9292/listings')
.then((res)=>res.json())
.then((res)=>console.log(res))

},[]);

// 
//  return (
//     <div ClassName="col-md-3">
//             <div class="card p-2">
//                 <div class="text-right"> <small>{element.typeofHouse}, Number of Bedrooms : {element.numberOfBedrooms}</small> </div>
//                 <div class="text-center mt-2 p-3"> <img src={element.pictureLink} width="250" height="200"/> <span class="d-block font-weight-bold">{element.houseLocation}</span>
//                     <hr/> <span>{element.name}</span>
//                     <div class="d-flex flex-row align-items-center justify-content-center"> <i class="fa fa-map-marker"></i> <small class="ml-1">{element.phonenumber}</small> </div>
//                     <div class="d-flex justify-content-between mt-3"> <span>{element.estimatedCost}</span> </div>
//                 </div>
//             </div>
//         </div>
// )})

    return (
        <div>
            <div>
                <form>
                <label> Filter by type of house
                <select value={list} onChange={e=>setList(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Mansion">Mansion</option>
                </select>
                </label>
                </form>
            </div>
            {/* <h2>This is our listings page</h2> */}
            {/* <div class="row mt-2 g-1">
                {displayListings}</div> */}
        </div>
    )
    }

export default Listings;