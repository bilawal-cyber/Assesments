const axios = require('axios');

async function fetchDataFromApi(apiEndpoint) {
  try {
    const response = await axios.get(apiEndpoint);

    // Check if the response status is within the 2xx range (successful)
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      // Log error for unexpected HTTP status codes
      console.error(`Unexpected HTTP status code: ${response.status}`);
      throw new Error('Unexpected HTTP status code');
    }
  } catch (error) {
    // Handle network errors or Axios-related errors
    if (error.response) {
      // The request was made and the server responded with a non-2xx status
      console.error(`HTTP error for: ${error.response.status}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from the server');
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error in making the request:', error.message);
    }

    throw error; // Rethrow the error for further handling if needed
  }
}

// Example usage:
const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts/a';

fetchDataFromApi(apiEndpoint)
  .then((data) => {
    console.log('Fetched data:', data);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });