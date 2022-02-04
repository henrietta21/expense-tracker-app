import './App.css';
import Logo from './logo.svg'
import React, { useState , useEffect} from 'react'
import Form from './component/form/form';
import ListDisplay from './component/list/list';
import { Typography,Box } from '@mui/material';
import Chart from './component/chart/chart';






function App() {
  const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [expenses, setExpenses] = useState(ALL_EXPENSES)


  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const handleName = event => {
    console.log('Name ', event.target.value)
    setName(event.target.value)
  }
  
  const handleAmount = event => {
    console.log('Amount ', event.target.value)
    setAmount(event.target.value)
  }

  const handleSubmitForm = event => {
    event.preventDefault()
    
    if (name !== '' && amount > 0) {
      
      const expense = { name, amount }
      setExpenses([...expenses, expense])
      setName('')
      setAmount('')
    } else {
      console.log('Invalid expense name or the amount')
    }
  }

  const handleDelete = () => {
    setExpenses([])
  }


  const chartDataPoints = [
    { label: 'Jan', value: 1 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 5 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 8 },
    { label: 'Jul', value: 20 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 10 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 }
  ]
  
  return (
    <Box sx={{ textAlign: 'center', width:'80%', m:'0 auto', pt:'2rem'}}>
        <Typography variant="h3" >
          Expense Tracker React App
          <img src={Logo} style={{ width: 50, height: 50 }} alt="react-logo" />
        </Typography>
        <Box>
          <Typography variant='subtitle1'>
            Total Expense:{' '}
            <Box component="span" sx={{color: 'green'}}>
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </Box>
          </Typography>
        </Box>
        <Form 
        name={name}
        amount={amount}
        handleName={handleName}
        handleAmount={handleAmount}
        handleSubmitForm={handleSubmitForm} 
        handleDelete={handleDelete}/>
        <ListDisplay  expenses={expenses} /> 
        <Chart chartsData={ chartDataPoints  } />
    </Box>
  );
}

export default App;
