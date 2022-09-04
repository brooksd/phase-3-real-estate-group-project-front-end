import React from 'react'


function Display({name,no_of_rooms,rent_price,tell}) {
  return (
    
    <div  >
    <ul >
      <li >name: <em>{name}</em></li>
      <li >no_of_rooms: <em >{no_of_rooms}</em></li>
      <li >rent_price: <em>{rent_price}</em></li>
      <li >contact: <em>{tell}</em></li>
    </ul>
  </div>
  
  )
}

export default Display