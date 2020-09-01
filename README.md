# Project Snake

### Major bugs

- Move snake function:
At the moment, every segment of the snake is moved in the direction set by controls. This is not problematic if only the head exists. However, when the snake body segment makes turns, then the segments must travel through the path history of the head.

### TODO

- Digest function:
Keep a counter that increments when food has been eaten. The snake should grow in the tick AFTER eating, so the moment it has eaten food, it remains the same size.
The digest function should keep a memory of where head has been.

### Minor bugs

- Potential bypassing of movement functions: currently movement in directions the head came from is not allowed (i.e. if going upwards, cannot suddenly reverse direction and go down). However, if controls are applied such that in the aforementioned case, the direction is set to left, or right, before going down, then the snake can reverse course within 1 tick. Additional checks are required.

- In Clock.jsx, inProgress variable is stale before component updates with intervalRef (stale variable can be seen by toggling state from "Play" to "Pause", the inProgress variable will be logged as true before component re-renders to false). Unsure if it will impact other parts of the app as of yet.

- When repeatedly playing and pausing, it appears that sometimes MOVE_SNAKE is dispatched multiple times (i.e. twice when it should be once). This results in the snake moving at double the speed. Perhaps related to mismanagement of state, or reading stale state. TO RECREATE BUG, CLICK PAUSE THEN PLAY QUICKLY. Then the Clock's dispatches will not be proper.