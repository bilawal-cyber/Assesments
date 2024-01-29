const fs = require('fs');
const path = require('path');

function listFileExtensions(directoryPath) {
  // Read the contents of the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      return;
    }

    // Extract and print the extensions of all files
    if (files.length > 0) {
      console.log(`File extensions in ${directoryPath}:`);
      files.forEach(file => {
        const fileExtension = path.extname(file);
        console.log(`File Name: ${file}, File Extention ${fileExtension}`);
      });
    } else {
      console.log(`No files found in ${directoryPath}`);
    }
  });
}


// Command-line argument: Provide the directory path as an argument
const args = process.argv.slice(2); // Exclude the first two elements (node and script name)
const directoryPath = args[0] || __dirname + '/folderToread'; // Use the provided directory path or the current script's directory
listFileExtensions(directoryPath);
