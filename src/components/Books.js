import React, { useEffect, useState } from 'react';




function Books(props) {
    const [books, setBooks] = useState([])
    useEffect(() => {
        if (props.user) {
            const fetchData = async () => {
                try {
                    const booksRaw = await fetch(`${process.env.REACT_APP_API_URL}books/getUserAndBooks/${props.user}`, {
                        method: 'GET',
                        headers: {"Content-Type": "application/json"}
                    });;
                    const data = await booksRaw.json();
                    setBooks(data.usersBooks.Books.length < 1 ? [{title: "There are no books found."}] : data.usersBooks.Books);
                } catch (error) {
                    console.error({"Error fetching data": error});
                }
            };
            fetchData();
        }
    },[props.user]);

  return (
    <div className='booksWrap'>
        {books.map((book, index) => {
            return (
                <div key={index} className='eachBookWrap'>
                    <h3>{book.title}</h3>
                    <h5>{book.author}</h5>
                </div>
            )
        })}
    </div>
  );
}

export default Books;