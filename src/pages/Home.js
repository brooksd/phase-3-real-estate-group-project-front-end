import {React,useState,useEffect} from 'react'
import  EntryList  from './EntryList'
import AddEntry from './AddEntry';




function Home() {
  const [entries,setEntries]= useState([])


  useEffect (()=>{
    fetch("http://localhost:9292/entries")
      .then((r)=>r.json())
      .then((entries)=>setEntries(entries))
  
  
  },[]);
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