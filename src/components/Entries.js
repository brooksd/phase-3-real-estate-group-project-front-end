import React, {useEffect, useState} from "react";



function Entries(){

    const[entries, setEntries] = useState([]);

    // fetching of entries
    useEffect(() => {
        fetch("http://localhost:9292/entries")
        .then((r) => r.json())
        .then((data) => setEntries(data))
    }, []);
    
    const[formData, setFormData] = useState({
        name: '',
        no_of_rooms: '',
        rent_price: '',
        contact: '',
        listing_id: '',
        location_id: ''
    })
// handling submission of the form.
    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/entries`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((data) => registerHouse(data))
        setFormData(
            {
                name: '',
                no_of_rooms: '',
                rent_price: '',
                contact: '',
                listing_id: '',
                location_id: ''
            }
        )
    }

    // function for handling input of data.
    function handleChange(e){
        setFormData({...formData, [e.target.id]: e.target.value});
    }

    // function for adding a new house
    function registerHouse(data){
        setEntries([...entries, data])
    }

    // function handling the deleting functionality
    function handleDelete(id){
        fetch(`http://localhost:9292/entries/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => {
            const updateList = entries.filter((entry) => entry.id !== id)
            setEntries(updateList)

        })
    }

    return(
        <div>
            {/* // registering of a new house. */}
            <form className="row g-3" onSubmit={handleSubmit}>
                <h2>Register a new house with us:</h2>
                <div className="col-md-6">
                    <label className="form-label">Name of House</label>
                    <input type="text" className="form-control" id="name" onChange={handleChange} value={formData.name} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Enter Number of rooms:</label>
                    <input type="text" className="form-control" id="no_of_rooms" onChange={handleChange} value={formData.no_of_rooms} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Enter the rent price</label>
                    <input type="text" className="form-control" id="rent_price" placeholder="Rent Price" onChange={handleChange} value={formData.rent_price} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Contact</label>
                    <input type="text" className="form-control" id="contact" placeholder="Enter your number" onChange={handleChange} value={formData.contact} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" id="location_id" onChange={handleChange} value={formData.location_id} required/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Type of House</label>
                    <select id="listing_id" className="form-select" onChange={handleChange}>
                    <option value="Choose">Choose...</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Mansion">Mansion</option>
                    <option value="Hostel">Hostel</option>
                    </select>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
            {/* // registering of a new house. */}


            {/* displaying of entries form backend */}

            <section>
                {
                    entries.map((entry) => {
                        return(
                            <table className="table table-striped table-hover" key={entry.id} >
                            <thead>
                                <tr>
                                <th scope="col">Name of House</th>
                                <th scope="col">Number of Rooms</th>
                                <th scope="col">Rent price</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Type of house</th>
                                <th scope="col">Location</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                <td>{entry.name}</td>
                                <td>{entry.no_of_rooms}</td>
                                <td>{entry.rent_price}</td>
                                <td>{entry.contact}</td>
                                <td>{entry.listing_id}</td>
                                <td>{entry.location_id}</td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(entry.id)}>DELETE</button>
                                </td>
                                </tr>
                            </tbody>
                            </table>                   
                        )
                    })
                }
            </section>

               {/* displaying of entries form backend */}
        </div>
    )

}

export default Entries;