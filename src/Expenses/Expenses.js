import React, { useState } from 'react'
import './expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2021')

    const filterYearChangeHandler = (chosenYear) => {
        setFilterYear(chosenYear)
        // console.log(chosenYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear
    })

    return (
        <li>
            <div>
                <Card className='expenses'>
                    <ExpensesFilter defaultYear={filterYear} onYearChange={filterYearChangeHandler} />
                    <ExpensesChart expenses={filteredExpenses} />
                    <ExpensesList items={filteredExpenses} />
                </Card>
            </div>
        </li>
    )
}

export default Expenses;
//  {/*✅ 3 ways of displaying content conditionally -> Written below the export line */ }

// return (
//     <div>
//         <Card className='expenses'>
//             <ExpensesFilter defaultYear={filterYear} onYearChange={filterYearChangeHandler} />

//             {/*✅ 3 ways of displaying content conditionally */}

//             {/* First way -> Ternary operator */}
//             {/* {filteredExpenses.length === 0 ? <p>No Expenses to display</p> :
//                 filteredExpenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
//                 )} */}

//             {/* Second Way ->Short circuiting -> If first condition is met then it will return the last value after &&*/}
//             {/* {filteredExpenses.length === 0 && <p>No Expenses to display</p>}
//             {filteredExpenses.length > 0 && filteredExpenses.map(expense => {
//                 return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
//             })} */}
//             {/* Third way -> This approach is recommended as it keeps the JSX lean */}
//             {expensesContent}
//             {/* This is also a good solution but I am passing so much of javaScript into JSX which is not recommended*/}
//             {/* {props.items.filter(expense => expense.date.getFullYear().toString() === filterYear).map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />)} */}
//         </Card>
//     </div>
// )