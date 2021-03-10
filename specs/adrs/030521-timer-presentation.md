# DISCLAIMER: We had to rename all files to fit the naming format. As a result, creation dates may not match the actual time of ADR creation.
# [Timer Presentation Decisions]

* Status: [accepted]
* Deciders: [whole team] 

## Context and Problem Statement
We originally had the timer reset to 00:00 when you click the stop button and the window tab didn't show the time.

## Decision Outcome
We decided to go make the timer show the total time after you reset so that the user can see what the total time is instead of 00:00 which looks like you finished. Also we added the time to the windows tab so that it will show the time remaining.

### Positive Consequences
- Users can see total time
- Users can see remaining time without being on this tab

### Negative Consequences
- No negatives so far