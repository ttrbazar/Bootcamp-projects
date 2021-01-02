import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = ({users}) => {
    return (
        <tbody>
            {users.map((user, index) => {
                return (<tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.job}</td>
                </tr>)
            })}
        </tbody>
    )
}

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody users={this.props.users} />
            </table>
        )
    }
}

export default Table;