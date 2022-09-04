
import React from 'react'
import Entry from './Entry'
import { Grid } from '@mui/material'
function EntryList({entries,onEntryDelete}) {
  return (
    
       
    <Grid container spacing={4}>
      
      {entries.map((entry)=>(
        <Entry
        key={entry.id}
        entry={entry}
        onEntryDelete={onEntryDelete}
        
        
        />
      ))

      }

          


    </Grid>
  )
}

export default EntryList