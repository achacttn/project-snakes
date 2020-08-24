# Project Snake

### Major bugs

### Minor bugs

- In Clock.jsx, inProgress variable is stale before component updates with intervalRef (stale variable can be seen by toggling state from "Play" to "Pause", the inProgress variable will be logged as true before component re-renders to false). Unsure if it will impact other parts of the app as of yet.

- When repeatedly playing and pausing, it appears that sometimes MOVE_SNAKE is dispatched multiple times (i.e. twice when it should be once). This results in the snake moving at double the speed. Perhaps related to mismanagement of state, or reading stale state. TO RECREATE BUG, CLICK PAUSE THEN PLAY QUICKLY. Then the Clock's dispatches will not be proper.