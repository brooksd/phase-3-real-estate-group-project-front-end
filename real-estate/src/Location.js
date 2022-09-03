import React from "react";

function Location(){
    return(
        <div>
            <div>
                <form>
                <label>
                    Filter by Location
                    <select>
                        <option value="All place">All places</option>
                        <option value="Nairobi">Nairobi</option>
                        <option value="Diani">Diani</option>
                        <option value="Syokimau">Syokimau</option>
                        <option value="Kisumu">Kisumu</option>
                        <option value="Jamhuri">Jamhuri</option>
                    </select>
                </label>
                </form>
            </div>
            <h2><em>Location page</em></h2>
        </div>
    )
}

export default Location;