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

### Test Results *before* solving the challenge  
```
codecheck: Finish with code 4
codecheck: tests  : 7
codecheck: success: 3
codecheck: failure: 4
```

### Test Results *after* solving the challenge
```
codecheck: Finish with code 0
codecheck: tests  : 7
codecheck: success: 7
codecheck: failure: 0
```
--- --- ---
## Run Tests
To run tests locally install `codecheck` by running the following command in terminal.
```
$ npm install codecheck -g
```
To run tests in web editor please click in `RUN` button on left side of web editor.

## Explain your code
In [answer.md](answer.md) write a brief explanation 
- About how your code works
- Problems faced while solving the challenge
- How you solved those problems
- Improvements/Feedbacks are also welcomed
