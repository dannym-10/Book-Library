import React, { useState } from 'react';

function BookItem ({ title, coverImage, subtitle, authors, pages, description }) {
    const [ isClicked, setIsClicked ] = useState(false);

    const displayAuthors = () => {
        // authors.forEach(author => {
        //     return <p>{author}</p>
        // });
    }

    const getDescription = ()  => {
    //Will cut any string to 140 characters and add ... at the end of the string
        if (description !== undefined) {
            if (description.length > 140) {
                return description.substring(0, 140) + '...';
            }
        } else {
            return '';
        }
    }

    const toggleClass = () => {
        setIsClicked(!isClicked);
    }

    return(
        <div className={`book-item-wrapper ${isClicked ? 'is-selected' : ''}`} onClick={toggleClass}>
            <div className='image-wrapper'>
                <img src={coverImage} alt={`${title}-image`} />
            </div>
            <div className='book-info'>
                <h3 className='book-title'>{title}</h3>
                <h3 className='book-sub-title'>{subtitle}</h3>
                <h3 className='book-authors'>{displayAuthors()}</h3>
                <h3 className='book-pages'>Pages: {pages}</h3>
                <h3 className='book-description'>{getDescription()}</h3>
            </div>
        </div>
    );
}

export default BookItem;
