# Overall CSS Styling Decisions/Goals

* Status: [resolved]
* Deciders: Elizabeth Morris, Eric Pham
* Date: 2021-03-09

## Context and Problem Statement

Overall styling goals for CSS team including readability, and resizing functionality. Most of the page layout is already laid out by UI mockup, but how the objects fit on the page (whether they resize with the page or not) is to be determined.

## Considered Options

* Fixed dimensions (PC only)
* Relative dimensions (resizes with window)

Note: Overall layout already predetermined by UI mockup, though may be tweaked to better fit.

## Decision Outcome

Chosen option: "Relative dimensions (resizes with window)", because allows for greatest accessibility cross platform.

### Positive Consequences

* Increased usability cross platform
* Avoids overlapping elements by instead resizing elements to fit.

### Negative Consequences

* If user makes window too small, may not be able to read page text
* Sizing elements relative to each other instead of screen size may have strange behaviors.
* Prevents users from zooming in if they are having a hard time reading the text, as is sized according to the window size instead of absolute units.
  