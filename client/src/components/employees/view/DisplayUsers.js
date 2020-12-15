import React from 'react'
import User from "./DisplayUser"

const DisplayUsers = ({userData}) => {
    return (
        <div>
            {userData.sort((a,b) => b.last_name - a.last_name).map((user) => <User key={user._id} user={user} />)} 
        </div>
    )
}

export default DisplayUsers