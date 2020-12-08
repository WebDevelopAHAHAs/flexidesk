import React from 'react'
import DisplayUser from "./DisplayUser"

const DisplayUsers = (userData) => {
    return (
        <div>
            {userData.sort((a,b) => b.last_name - a.last_name).map((user) => <DisplayUser key={user._id} user={user} />)} 
        </div>
    )
}

export default DisplayUsers;
