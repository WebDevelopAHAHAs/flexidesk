import React from 'react'

const DisplayUser = ({user}) => {
    if (!user) return null

    const {first_name, last_name} = user
    return (
        <div>
            <h1>{first_name} {last_name}</h1>
        </div>
    )
}

export default DisplayUser