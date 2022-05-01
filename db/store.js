// // require the util and fs needed
// const util = require('util');
// const fs = require('fs');

// // require the uuid/v1 package in your package.json
// const uuidv1 = require('uuid/v1');

// // write to file

// // read to file

// class Store {
//     constructor(noteTitle, noteText, noteID){
//         this.noteTitle = noteTitle;
//         this.noteText = noteText;
//         this.noteID = noteID;
//     }

//     read() {
//         fs.readFile(file, 'utf8', (err, data) => {
//             if (err) {
//               console.error(err);
//             } else {
//               const parsedData = JSON.parse(data);
//               parsedData.push(content);
//               writeToFile(file, parsedData);
//             }
//           });
//     }

//     write() {
//         fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//         err ? console.error(err) : console.info(`\nData written to ${destination}`)
//       );
//     }

//     // get notes
//     // add notes
//     // delete notes which isn't required
// }

// module.exports = new Store();