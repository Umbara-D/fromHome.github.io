// let options = {
//   headers: {
//       'Authorization': 'Bearer '
//   }
// }

let baseUrl = "https://www.googleapis.com/books/v1";

export function getRecommendedBooks() {
  let url = `${baseUrl}/volumes/recommended`;

  const error = new Error();
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        error.message = `Error getting recommended books`;
        throw error;
      }
    })
    .then((response) => {
      console.log(response);
      console.log("haah");
      return response || {};
    });
}

export function getBook(bookId) {
  let url = `${baseUrl}/volumes/${bookId}`;

  const error = new Error();
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        error.message = `Error getting a book with id: ${bookId}`;
        throw error;
      }
    })
    .then((response) => {
      console.log(response);
      return response || {};
    });
}

// export function setAccessToken(accessToken) {
//   options.headers.Authorization = `Bearer ${accessToken}`;
// }
