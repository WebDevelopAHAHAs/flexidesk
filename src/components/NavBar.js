import React from 'react'
import Button from '@material-ui/core/Button'

export default function NavBar() {
    return (
        <div>
            <ul className="navbar-button-list">
            <li><Button color="primary" href="/">Home</Button></li>
            <li><Button color="default" href="/admin/dashboard">Admin Dashboard</Button></li>
            <li><Button color="secondary" href="/admin/viewemployees">View Employees</Button></li>
            <li><Button color="link" href="/">Home</Button></li>
            </ul>
        </div>
    )
}
