import React from 'react'






function AddEntry() {
  return (
    <form onSubmit={handleSubmit} className="form">
    <input
      type="text"
      style={{ background: "white" }}
      id="name"
      onChange={handleChange}
      value={formData.name}
      placeholder="name"
    />
    <input
      type="text"
      pattern="[0-9]*"
      style={{ background: "white" }}
      id="no_of_rooms"
      onChange={handleChange}
      value={formData.no_of_rooms}
      placeholder="no_of_rooms"
    />
    <input
      type="text"
      pattern="[0-9]*"
      style={{ background: "white" }}
      id="rent_price"
      onChange={handleChange}
      value={formData.rent_price}
      placeholder="rent_price"
    />
    <input
      type="text"
      pattern="[0-9]*"
      style={{ background: "white" }}
      id="tell"
      onChange={handleChange}
      value={formData.tell}
      placeholder="tell"
    />
 
    <button style={{ background: "green" }} type="submit">
      Submit
    </button>
  </form>



  )
}

export default AddEntry