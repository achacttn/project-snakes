# Project Snake

### Major bugs

### Minor bugs

- In Clock.jsx, inProgress variable is stale before component updates with intervalRef (stale variable can be seen by toggling state from "Play" to "Pause", the inProgress variable will be logged as true before component re-renders to false). Unsure if it will impact other parts of the app as of yet.