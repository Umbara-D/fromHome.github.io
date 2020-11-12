// import React from 'react';
// import { Container, Row } from 'reactstrap';
// import BookDetail from './BookDetail';


// const BookDetailList = (props) => {
//   return(
//     <Container>
//       <Row> 
//         {
//           props.books.map((book, i) => {
//             return <BookDetail
//                         key={i}
//                         cover={((book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : undefined)}
//                         title={book.volumeInfo.title}
//                         author={book.volumeInfo.authors}
//                         id={book.id}
//                         publishYear={book.volumeInfo.publishedDate}
//             />
//           })
//         }
//       </Row>
//     </Container>
//   )
// }

// export default BookDetailList;