# DISCLAIMER: We had to rename all files to fit the naming format. As a result, creation dates may not match the actual time of ADR creation.
# [Styling Inconsistencies]

* Status: [accepted]
* Deciders: [whole team] 

## Context and Problem Statement
Some styling inconsistencies not mentioned in the best-practices document that we decided on later on. Also from feedback from Chad.

### 3/1/2021  Styling Decisions
- Double quotes, not single quotes
- Use innerText, not innerHTML (reason: innerText included the formatting of the text)

### 3/2/2021 Styling Decisions
- Use let instead of var in controller.js (let restricts the scope of the variable to where you declare it)
- Name button variables '_button' instead of '_btn'
  