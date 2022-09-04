
import React, {useState,useEffect} from "react"


function Entries(){
    
const [list, setList] = useState([]);
const[houseInfo, setHouseInfo] = useState([]);

useEffect(()=> {
fetch("http://localhost:9292/entries")
.then((res)=>res.json())
.then((res)=>setHouseInfo(res))
},[]);

const[formData, setFormData] = useState({
    name:'',
    no_of_rooms:'',
    rent_price:'',
    contact:'',
    listing_id:'',
    location_id:''
})

function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/entries",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(
            {
                name: formData.name,
                no_of_rooms: formData.no_of_rooms,
                rent_price: formData.rent_price,
                contact: formData.contact,
                listing_id: formData.listing_id,
                location_id: formData.location_id
            }
        )
    })
    .then((r) => r.json())
    .then((newData) => registerHouse(newData))
    e.target.reset();
}

function registerHouse(newHouse){
    setHouseInfo([...houseInfo, newHouse])
}

function handleChange(e){
    setFormData({...formData,[e.target.name]: e.target.value})
}

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

            <section className="register">
                <div className="registerHouse">
                    <form onSubmit = {handleSubmit}>
                        <h2>Register a new house with us</h2>
                        <input type="text" 
                        name="name" 
                        className="field" 
                        placeholder="Enter name of the house" 
                        onChange={handleChange} 
                        value={formData.name} />

                        <label>Number of rooms
                            <select onChange={handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6 and more">6 and more</option>
                            </select>
                        </label>
                        <br/>

                        <input type="text" 
                        name="rent_price" 
                        className="field" 
                        placeholder="Enter rent price" 
                        onChange={handleChange} 
                        value={formData.rent_price} />

                        <input type="text" 
                        name="contact" 
                        className="field" 
                        placeholder="Enter your number" 
                        onChange={handleChange} 
                        value={formData.contact} />

                        <label>House Location
                            <select onChange={handleChange}>
                                <option value="Nairobi">Nairobi</option>
                                <option value="Mombasa">Mombasa</option>
                                <option value="Nakuru">Nakuru</option>
                                <option value="Kisumu">Kisumu</option>
                                <option value="Eldoret">Eldoret</option>
                                <option value="Machakos">Machakos</option>
                            </select>
                        </label>
                        <br/>

                        <label>Type of House 
                            <select onChange={handleChange}>
                                <option value="Apartment">Apartment</option>
                                <option value="Bungalow">Bungalow</option>
                                <option value="Mansion">Mansion</option>
                                <option value="Hostel">Hostel</option>
                            </select>
                        </label>
                        <br/>

                        <div>
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </section>

            <section className="house-list">
                <div>
                    {houseInfo.map(house => {
                        return(
                            <div className="properties">
                                <ul>
                                    <li>Name of House: {house.name}</li>
                                    <li>Number of rooms: {house.no_of_rooms}</li>
                                    <li>Rent price: {house.rent_price}</li>
                                    <li>Contact: {house.contact}</li>
                                    <li>Type of House: {house.listing_id}</li>
                                    <li>Location of House: {house.location_id}</li>
                                </ul>

                            </div>
                        )
                    })}
                </div>

            </section>
    </div>
)
}

export default Entries;