# Autofill
The goal of this challenge is to make a textbox that will autofill/suggest possibilities for you. 

### Information
- [index.html](./wwwroot/index.html)
 - Use the `autofill_input` input as the textbox for user input.
 - Use `autofill_result` div to display suggestions.
 - Do not remove any of the existing `script` tags.
- [words.js](./wwwroot/words.js)
 - This file contains a list of possible words that should be used for the suggestions.
 - This file cannot be editted.
- [index.js](./wwwroot/index.js)
 - You can freely use this file for any JavaScript code.
- [custom.css](./wwwroot/custom.css)
 - You can freely use this file for additional styling.

### Goal
In this challenge you will be provided a list of fruits. 
Based on this list you need to provide the user with possible suggestions.
For example, if the user fills in "A" in the textbox, the suggestions should contain "Apple".

Though the suggestions should only be based on if the input matches up from the first characters.
This means if the user fills in "pple", the suggestions should NOT contain "Apple", even though both are nearly the same.

The suggestion also should not be case sensitive, so both "a" and "A" give the same suggestions.
