
import React, { Component } from 'react';

import { getRecommendedBooks } from './../../utils/bookAPI';
import RecommendedList from './RecommendedList';

class Recommended extends Component {

    constructor() {
        super();

        this.state = {
            recommendedBooks: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        getRecommendedBooks().then((recommendedBooks) => {
            this.setState({ recommendedBooks: recommendedBooks.items, isLoaded: true });
        });
    }

    render() {
        const { isLoaded, recommendedBooks } = this.state;
        if (!isLoaded) {
            return (<div className="spinner">
                      hahhah
                    </div>);
        } else {
            return (
                <div>
                    <header>
                        <h3>Recommended books</h3>
                    </header>
                    <RecommendedList books={recommendedBooks} />
                </div>
            );
        }

    }
}

export default Recommended;


