import React from 'react'






function Home() {
  return (

    <div>
    <AddEntry onAddEntry={handleAddEntry} addEntry={setEntries}/>
   
    <EntryList
    entries={entries}
    onEntryDelete={handleDeleteEntry}
    />
    
    
  </div>




  )
}

export default Home