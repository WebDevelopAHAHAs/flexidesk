import React from 'react'
import Button from '@material-ui/core/Button'

export default function NavBar() {
    return (
        <div className="navbar">

            {/* <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/admin/dashboard">Admin Dashboard</a></li>
                <li><a href="/viewbookings">View Bookings</a></li>
                <li><a href="/newbooking">New Bookings</a></li>
                <li><a href="/admin/viewemployees">View Employees</a></li>
                <li><a href="/viewdesks">View Desks</a></li>
                <li><a href="/analytics">Analytics</a></li>
            </ul> */}
            <ul className="navbar-button-list">
            <li><Button color="primary" href="/">Home</Button></li>
            <li><Button color="default" href="/admin/dashboard">Admin Dashboard</Button></li>
            <li><Button color="secondary" href="/admin/viewemployees">View Employees</Button></li>
            <li><Button color="link" href="/">Home</Button></li>
            </ul>
        </div>
    )
}
