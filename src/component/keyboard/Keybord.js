import React from 'react'
import './Keybord.css'

export default function Keyboard() {
    return "abcdefghijklmnopqrstuvwwxyz".split("").map(letter => (
        <button 
            className="Keybord">
            {letter}
        </button>
    )) 
}