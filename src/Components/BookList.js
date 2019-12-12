import React from 'react';
import BookItem from './BookItem';

//Loops over the props books that is passed in on App level. book is then passed its properties as props to BookItem to render
function BookList ({ books }) {
  return (
    <div className='book-list-wrapper'>
        {books.map((book, index) => (
            <BookItem key={index}
                    title={book.title}
                    coverImage={book.imageLinks.smallThumbnail}
                    subtitle={book.subtitle}
                    pages={book.pageCount}
                    authors={book.authors}
                    description={book.description}
            />
        ))};
    </div>
    
  )
}

export default BookList;