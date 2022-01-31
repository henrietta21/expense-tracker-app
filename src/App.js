import './App.css';
import Logo from './logo.svg'
import React, { useState , useEffect} from 'react'
import { Container } from 'reactstrap'
import Form from './component/form/form';
import List from './component/list/list';



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

  
  return (
    <Container className="text-center">
      
        <h3 className="display-6">
          Expense Tracker React App
          <img src={Logo} style={{ width: 50, height: 50 }} alt="react-logo" />
        </h3>
        <div>
          <p>
            Total Expense:{' '}
            <span className="text-success">
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
        <Form 
        name={name}
        amount={amount}
        handleName={handleName}
        handleAmount={handleAmount}
        handleSubmitForm={handleSubmitForm} 
        handleDelete={handleDelete}/>
        <List  expenses={expenses} />
      
    </Container>
  );
}

export default App;
