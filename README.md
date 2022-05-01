# note-taler
A note taking tool that utilizes persistent data

---
## Table of Contents
  * [Objective](#objective)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Contact](#contact)
  * [Repository](#repository)
  * [Demonstration](#demonstration)

---
## Objective

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

---

## Usage
To install this program, please copy the below SSH Link to clone it to your machine. Once cloned, you should then use your command terminal and enter "node server.js" (or your can use "nodemon"), this will initiate the main script. 

`git@github.com:Guzzemetti/note-taker.git`

After initiating the server, the localhost HTTP location will load with a Note-Taker webpage. Clicking on the "Get Started" link will direct you to a page that contains all previously written notes and a space to enter new notes.

When the "Note Title" section of the notes page is click, the user may then type in a new title for their note, the "Note Text" field works the same. Once the desired notes have been entered into these fields, simply click on the floppy disk (save) icon on the top-right of the page, this will save the notes as persistent data and these notes can be accessed later by clicking on their title from the list on the left-side of the screen.

Additionally, should there be a note in which the user no longer requires, they can simply click on the red trashcan icon next to the text title to delete the saved note.

---

## Contributors

John Guzzetta

---
## Contact

Email: johnguzzettaiv@gmail.com

GitHub: [Guzzemetti](#https://github.com/Guzzemetti/)

---
## Repository

`https://github.com/Guzzemetti/note-taker`

---
## Demonstration

![DemonstrationGif](./Assets/Untitled_%20May%201%2C%202022%202_20%20PM.gif)