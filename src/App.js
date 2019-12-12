import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import './App.scss';
import Footer from './Components/Footer';
import BookList from './Components/BookList';
import Description from './Components/Description';
import FeaturedList from './Components/FeaturedList';

function App () {
  const [ theData, setTheData ] = useState();

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5&id=2027a432-a940-4665-830e-313e62a311f4&project=myapplication-196313')
      .then((resp) => resp.json())
      .then(function (data) {
        let tempArray = [];
        //pushing the volume info object to state to pass down to relevant components to render
        data.items.forEach(item => {
          tempArray.push(item.volumeInfo);
        });
        setTheData(tempArray);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <div className='app'>
      <Header />
      <Description />
      <div className='books-homepage'>
        
        {theData !== undefined ? <FeaturedList books={theData} /> : <p>Loading...</p>}
        {theData !== undefined ? <BookList books={theData} /> : <p>Loading...</p>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
