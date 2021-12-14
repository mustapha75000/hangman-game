import React from 'react'

export default function Button({ onClick: handleClick, value = "anouar" }) {
    return (
    <button className="btn-home" onClick={handleClick}>{value}</button>
    )
}
