import React from 'react'
import { List, ListItemText, ListItem,Divider} from '@mui/material'


const ListDisplay = ({ expenses,}) => (
  <div>
    <List >
      {expenses.map(item => (
      <div>
      <ListItem key={item.id}  component="div" >
      <ListItemText sx={{textAlign:'center'}}>{item.name} - $ {item.amount}</ListItemText>
      </ListItem>
      <Divider />
      </div>
      ))}
    </List>
  </div>
)

export default ListDisplay