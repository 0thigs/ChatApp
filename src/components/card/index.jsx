import React from 'react';
import './style.css'

export default function Card() {
    return (
        <div className='card'>
            <div className='image-name'>
                <img className='image' src="https://i.pinimg.com/originals/f5/d9/8b/f5d98b3e305d45533bd32d558c70c5d9.jpg" alt='Profile'/>
                <p className='name'>pablo</p>
            </div>
            <div className='content'>   
                <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. lore</p>
            </div>
        </div> 
    )
}