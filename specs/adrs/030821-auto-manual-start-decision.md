# Auto transition manual transition toggle

* Status: [implemented locally; waiting on approval]
* Deciders: [whole team]
* Date: [2021-03-08 when the decision was last updated]


## Context and Problem Statement

Would users rather have the timer automatically start each cycle after the previous, manually start it with the start button, or have a toggle function to choose whether the timer automatically or manually starts.

## Considered Options

* Automatic [initial implementation of timer]
* Manual [current implementation]
* Toggle switch

## Decision Outcome

Chosen option: "Manual", because it forces the user to physically change cycle, snapping them out of their current workflow for a break/from their break to begin their next pomo.

Note: "Toggle" is fully completed on a local branch, but may require further discussion and testing before implementing.

## Pros and Cons of the Options <!-- optional -->

### Automatic Start

* Good, because aligns with initial implementation of timer.
* Good, because allows timer to be an absolute minimum distraction, as does not require user input to transition/start cycles
* Bad, because does not draw user's attention at the end of each cycle in order for them to mentally transition out of their current work/break.

### Manual Start

* Good, because requires user input/interaction, therefore breaking them out of their current break/work to begin their work/break.
* Bad, because if user is distracted and forgets to start timer, paired with the tabs not being clickable, means that they cannot correctly move to the next cycle.

### Toggle Manual/Auto

* Good, because best of both worlds, allows user to pick between automatic or manual start.
* Bad, because implementation on base page makes the UI look cluttered
