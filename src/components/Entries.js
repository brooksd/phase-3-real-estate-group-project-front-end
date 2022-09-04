
import React, {useState,useEffect} from "react"


function Entries(){
    
const [list, setList] = useState([]);

useEffect(()=> {
fetch('http://localhost:9292/entries')
.then((res)=>res.json())
.then((res)=>console.log(res))

},[]);

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

export default Entries;