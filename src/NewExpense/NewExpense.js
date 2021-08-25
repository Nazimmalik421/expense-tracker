import React, { useState } from 'react'
import './newExpense.css'   
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [isFormVisible, setFormVisible] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setFormVisible(false)
    }

    const showFormEditor = () => {
        setFormVisible(true)
    }

    const hideFormEditor = () => {
        setFormVisible(false)
    }

    return (
        <div className="new-expense">
            { !isFormVisible && <button onClick={showFormEditor}>Add New Expense</button>}
            {isFormVisible && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={hideFormEditor} />}
        </div>
    )

}

export default NewExpense;