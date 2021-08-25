import React from 'react'
import './expensesFilter.css'

const ExpensesFilter = (props) => {

    const filterYearChangeHandler = (e) => {
        props.onYearChange(e.target.value)
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter By Year</label>
                <select onChange={filterYearChangeHandler} value={props.defaultYear}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;