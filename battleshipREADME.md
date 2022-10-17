# Web

Battleship Game; 

Used HTML, CSS and JS to build simple 7x7 grid battleship game. Used unique ID of elements to update with graphics, showing a hit or a miss.
Added sound effects to JS
The program uses an input button from the user and event handlers to determine in the code what the guess is. Used CSS postioning to position 
elements precisely.
organised main body of code into 3 objects which are the game model, the controller and the view or display. Each object in the game has
one primary responsibility. The model stores the game state and logic which modifies that state. 
The view object is responsible for updating the display, when there are changes to the model.
The controller object essentially stitches everything together, it ends a user guess to the model which updates the state,
it also checks when the game is complete or all battleships have been sunk.

By creating objects with separate responsibilty I was able to build and test each part of the game independently 
I hardcoded the position of the ships initially and moved to a random generation after I was satisfied the game functioned
