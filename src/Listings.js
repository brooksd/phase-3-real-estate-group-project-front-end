import React, {useState,useEffect} from "react"


function Listings(){
    
const [entry, setEntry] = useState([]);

useEffect(()=> {
fetch('http://localhost:9292/entries')
.then((res)=>res.json())
.then((entryData)=>setEntry(entryData))
},[]);

// function deleteElement(id)
// {
//     fetch(`http://localhost:9292/entries${id}`,{
//      method: 'DELETE'   
//     }) .then ((result)=>{
//         result.json().then((resp)=>{
//            console.warn(resp)
//         })
//     })
// }


    return (
        <div>
            <div>
            {/* <button onClick={()=>deleteElement(Entries.id)}>Delete</button> */}
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