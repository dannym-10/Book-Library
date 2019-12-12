import React from 'react';
import BookItem from './BookItem';

//Hard coved values for now. Ideally it would pull from items props and loop over the contained array
function FeaturedList({ items }) {
    return (
        <div className='featured-list-wrapper'>
            <BookItem title='This is a title fo a book' coverImage='dd' authors={['ddd', 'wdd']} pages={300} description='This is the description which needs to be cut off itf it gets anything over 140 characters. This is the description which needs to be cut off itf it gets anything over 140 characters.' />
            <BookItem title='This is a title fo a book' coverImage='dd' authors={['ddd', 'wdd']} pages={300} description='This is the description which needs to be cut off itf it gets anything over 140 characters. This is the description which needs to be cut off itf it gets anything over 140 characters.' />
        </div>
    )
}

export default FeaturedList;