import React from 'react';

function SocialIcons ({ items, additionalClass }) {
    return (
        <ul className={`social-icons-wrapper ${additionalClass}`}>
            {items.map((item, index) => {
                return <li className='social-icon' key={index}>
                    <a href={item.url}><img src={item.image} alt={`social icon ${item.name}`} /></a>
                </li>
            })}
        </ul>
    );
}

export default SocialIcons;