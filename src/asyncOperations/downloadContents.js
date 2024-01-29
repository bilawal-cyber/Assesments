const axios = require('axios');

const downloadContentsFromUrls = async (urls) => {
  try {

    const downloadPromises = []

    downloadPromises.push(...urls.map(async (url) => {
        const response = await axios.get(url);
        return response.data;
      }))

    const downloadedContents = await Promise.all(downloadPromises);
    return downloadedContents;

  } catch (error) {
    console.error('Error during download:', error.message);
    throw error;
  }
}


// Example usage:
const dummyUrls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
];
  

downloadContentsFromUrls(dummyUrls)
  .then((result) => {
    console.log('Downloaded contents:', result);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });