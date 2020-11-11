import React from 'react';
import { Container, Row } from 'reactstrap';
import SearchResult from './SearchResult';


const SearchResultList = (props) => {
  return(
    <Container>
      <Row> 
        {
          props.books.map((book, i) => {
            return <SearchResult
                        key={i}
                        cover={((book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : undefined)}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        publishYear={book.volumeInfo.publishedDate}
            />
          })
        }
      </Row>
    </Container>
  )
}

export default SearchResultList;