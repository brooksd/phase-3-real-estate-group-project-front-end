import React from 'react'


function Display({name,no_of_rooms,rent_price,tell}) {
  return (
  
    <div className="card" style={{backgroundColor:'#eefcff' , opacity:0.5}} >
    <ul className="list-group list-group-flush" >
      <li className="list-group-item">name: <em>{name}</em></li>
      <li className="list-group-item" >no_of_rooms: <em >{no_of_rooms}</em></li>
      <li className="list-group-item" >rent_price: <em>{rent_price}</em></li>
      <li className="list-group-item" >contact: <em>{tell}</em></li>
    </ul>
   
  </div>
 

  )
}

export default Display