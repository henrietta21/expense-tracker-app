import React from 'react';
import { Grid,Button,TextField } from '@mui/material'


function Form({ name, amount, handleName, handleAmount, handleSubmitForm,handleDelete }) {
  return(
    <form  onSubmit={handleSubmitForm}>
     <Grid  container direction='column'   justifyContent="space-between" spacing={2}
     >
      <Grid item direction='column' my={2} >
        <TextField
         variant= 'outlined'
          type="text"
          name="name"
          id="expenseName"
          label="Expenses"
          value={name}
          onChange={handleName}
        />{' '}
        <TextField
         variant= 'outlined'
          type="number"
          name="amount"
          id="expenseAmount"
          label="amount"
          value={amount}
          onChange={handleAmount}
        />
      </Grid>
      <Grid item direction='row' mb={2}>
        <Button  type="submit" variant="contained"  color="primary">Add</Button>{' '}
        <Button variant="contained"  color="error" onClick={handleDelete}>Delete</Button>
      </Grid>
     </Grid>
   </form>
  )
}

export default Form;


