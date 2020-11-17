import React from 'react';
import { getBook } from '../../../utils/bookAPI'

import './BookDetail.css'

import {
  Col,
  Card,
  CardBody,
  Row,
  Container,
  Button
} from "reactstrap";

import NavbarPage from '../../../components/Navbar/NavbarPage';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInfo: {},
      id: this.props.match.params.id
    };
  } 

  componentDidMount() {
    let id = this.state.id

    getBook(id)
    .then((bookInfo) => {
        this.setState({ bookInfo: bookInfo.volumeInfo, bookId: bookInfo.id, isLoaded: true });
    });
  }

  render() {
    const { bookInfo } = this.state;
    // const { classes } = this.props;

    const Books = () => {
      let google = window.google;
      return (
          <div id="viewer" style={{ height: "500px" }}>
          {google.books.load()}
          {google.books.setOnLoadCallback(function initialize() {
              let viewer = new google.books.DefaultViewer(
              document.getElementById("viewer")
              );
          viewer.load("ISBN:6026940340");
          })}
      </div>
      );
    };

    const isbn = bookInfo.industryIdentifiers && bookInfo.industryIdentifiers.map((isbn, index) => {
      console.log(isbn.identifier)
      console.log(index)
      return <span key={index}>{isbn.identifier}</span>;
    });

    const authors = getAuthorList(bookInfo);
    
    function getAuthorList(bookInfo) {
      let authorList = bookInfo.authors;
      if (!authorList) {
          return <span>No authors to display</span>;
      }
      return authorList.map((author, index) => {
          return <span key={index}>{author}{index + 1 !== authorList.length ? ', ' : ''}</span>;
      });
    }

    const categories = bookInfo.categories && bookInfo.categories.map((category, index) => {
        console.log(category)
        return <span key={index}>{category}</span>;
    });

    const strippedDescription = bookInfo && bookInfo.description && bookInfo.description.replace(/<(.|\n)*?>/g, '');

    function getSmallImage(bookInfo) {
      let bookImageUrl = bookInfo.imageLinks && (bookInfo.imageLinks.small || bookInfo.imageLinks.thumbnail);
      return bookImageUrl ? bookImageUrl.replace(/^http:\/\//i, 'https://') : '';
    } 
    
    return (
      <div className="section">
      <NavbarPage/>
      <Container>
      <Row>
        <Col lg="6" className="text-center">
            <img className="ml-auto" src={getSmallImage(bookInfo)} alt={bookInfo.title} />
        </Col>
        <Col lg="6">
          <Card>
            <CardBody className="p-4">
              <h3>{bookInfo.title}</h3>
              <p>Oleh {authors}</p>
              <p>{bookInfo.author}</p>
              <p>{bookInfo.publishYear}</p>
              <div>
                <span>
                {/* Categories :   */}
                </span>
                <Button>
                {categories ? categories : 'No categories to display'}
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg="6">
          <Books/>
        </Col>
        <Col lg="6">
          <p>{strippedDescription}</p>
        </Col>
      </Row>
      </Container>
      </div>
     );
  }
}

export default BookDetail;
