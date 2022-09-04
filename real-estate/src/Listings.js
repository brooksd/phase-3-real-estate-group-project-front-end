import React, {useState} from "react";

const [listing, setListing] = useState()



function Listings(){
    return (
        <div>
            <div>
                <form>
                <label> Filter by type of house
                <select>
                    <option value="All">All</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Mansion">Mansion</option>
                </select>
                </label>
                </form>
            </div>
            {/* <h2>This is our listings page</h2> */}
        </div>
    )
}

export default Listings;