import queryString from './query-string';

const url = `https://jsonplaceholder.typicode.com/posts?${queryString}`;

fetch(url)
  .then((response: { json: () => any; }) => response.json())
  .then((data: any) => {
    console.log(data);
  })
  .catch((error: any) => {
    console.error('Error:', error);
  });
