import{ React} from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Entry() {


    function handleDeleteClick(){
        fetch(`http://localhost:9292/entries/${id}`,{
        method: "DELETE",
        })
        onEntryDelete(id)
    }
  return (
    <div>
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {name}
      </Typography>
      <Typography variant="h5" component="div">
      
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {no_of_rooms}
      </Typography>
      <Typography variant="body2">
      {contact}
      </Typography>
      <Typography variant="body2">
      {rent_price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={handleDeleteClick}>Click to Delete</Button>
    </CardActions>
  </Card>
  </div>
   
  )
}

export default Entry