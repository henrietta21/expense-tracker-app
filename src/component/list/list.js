import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const List = ({ expenses,}) => (
  <div>
    <ListGroup>
      {expenses.map(item => (
        <ListGroupItem key={item.id}  >
        <span>{item.name} - $ {item.amount}</span>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default List