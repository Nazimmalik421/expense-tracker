import React, { useState } from 'react'
import Expenses from './Expenses/Expenses'
import NewExpense from './NewExpense/NewExpense'

// const dummyExpenses = [
//   { id: 'e1', title: 'Toilet paper', amount: '94.12', date: new Date(2020, 7, 14) },
//   { id: 'e2', title: 'New TV', amount: '799', date: new Date(2021, 2, 12) },
//   { id: 'e3', title: 'Bike Insurace', amount: '52.36', date: new Date(2021, 4, 7) },
//   { id: 'e4', title: 'New Computer', amount: '1100', date: new Date(2020, 4, 28) },
//   { id: 'e4', title: 'New Computer', amount: '1100', date: new Date(2019, 10, 19) },
// ]

function App() {

  const [expense, setExpense] = useState([])

  const addExpenseHandler = (expense) => {
    setExpense(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
