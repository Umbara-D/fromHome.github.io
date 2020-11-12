import React from 'react';
import { Link } from 'react-router-dom';
import { getBook } from '../../../utils/bookAPI'


import {
  Col,
  Card,
  CardBody
} from "reactstrap";

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
    const { classes } = this.props;

    function getSmallImage(bookInfo) {
      let bookImageUrl = bookInfo.imageLinks && (bookInfo.imageLinks.small || bookInfo.imageLinks.thumbnail);
      return bookImageUrl ? bookImageUrl.replace(/^http:\/\//i, 'https://') : '';
    } 

    return (
      <Col lg="3">
        <Card>
          <CardBody>
            <img src={getSmallImage(bookInfo)} alt={bookInfo.title} />
            <h3>{bookInfo.title}</h3>
            <p>{bookInfo.author}</p>
            <p>{bookInfo.publishYear}</p>
          </CardBody>
        </Card>
      </Col>
     );
  }
}

export default BookDetail;
