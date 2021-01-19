import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({ value, onChange, options, handleRefresh, isFetching }) => (
    <span>
        <h1>{value === "select" ? "Please select an option" : value}</h1>
        <select onChange={e => onChange(e.target.value)} value={value} disabled={isFetching}>
            {options.map(option =>
                <option value={option} key={option}>
                    {option === "select" ? "Please select" : option}
                </option>)
            }
        </select>
        <button onClick={handleRefresh} disabled={isFetching}>Refresh</button>
    </span>
)

Picker.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    handleRefresh: PropTypes.func.isRequired
}

export default Picker
