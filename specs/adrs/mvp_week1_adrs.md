

# DISCLAIMER: We had to rename all files to fit the naming format. As a result, creation dates may not match the actual time of ADR creation.

 
### Best Practices

* CSS Best Practices
 - Use flexible/relative units
 - Avoid overriding
 - Formatting:
   - Include a space between the selector(s) and the opening curly brace.
   - Always include a semi-colon at the end of the last declaration, even though it isn't strictly necessary.
   - Put the closing curly brace on a new line.
   - In each declaration, put a space after the separating colon, but not before.
   - Use 2 spaces for code indentation.
 - Favor longhand rules over terse shorthand
 - Use double quotes around values
 - CSS comments, comment sections through ```/*----Section Name-----*/```
 - Don't use !important
 - Don't use ID selectors
 
 
* JS Best Practices
  - Avoid Global Variables
  - Always Declare Local Variables
    - All variables used in a function should be declared as local variables.
    - Local variables must be declared with the var keyword or the let keyword, otherwise they will become global variables.
  - Declarations on Top and Initialize Variables
  - Don't Use new Object()
    - Use {} instead of new Object()
    - Use "" instead of new String()
    - Use 0 instead of new Number()
    - Use false instead of new Boolean()
    - Use [] instead of new Array()
    - Use /()/ instead of new RegExp()
    - Use function (){} instead of new Function()

* File Structure
``` .
├── media
│   └── favicon.ico
|   └── audio files
├── index.html
├── js
│   └── buttons.js
│   └── controller.js
│   └── timer.js
└── styles
    └── styles.css
```

    
