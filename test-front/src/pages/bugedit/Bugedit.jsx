import React from 'react'

export default function Bugedit() {
    const queryParameters = new URLSearchParams(window.location.search)
    const type = queryParameters.get("id")
    console.log(type)
    return (
        <div>
            <h1>{type}</h1>            
        </div>
    )
}
