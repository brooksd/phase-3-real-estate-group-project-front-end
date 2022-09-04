import {React,useState,useEffect} from 'react'
import  EntryList  from '../components/EntryList'
import AddEntry from '../components/AddEntry';




function Home() {
  const [entries,setEntries]= useState([])


  useEffect (()=>{
    fetch("http://localhost:9292/entries")
      .then((r)=>r.json())
      .then((entries)=>setEntries(entries))
  
  
  },[]);
  function handleDeleteEntry(id){
    const updatedEntries = entries.filter((entry)=>entry.id !== id)
    setEntries(updatedEntries)
  }

  function handleAddEntry (newEntry){
    setEntries([...entries,newEntry]);
  }
  
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