import qs from 'qs';

// Define the query parameters
const queryParams = { userId: 1 };

// Convert the query parameters to a query string
const queryString = qs.stringify(queryParams);

console.log('queryString:', queryString);

export default queryString;
