import React from 'react'
import User from "./User"

const Users = ({userData}) => {
    return (
        <div>
            {userData.sort((a,b) => b.last_name - a.last_name).map((user) => <User key={user._id} user={user} />)} 
        </div>
    )
}

export default Users