# Project Snake

### Notes

- Current method of drawing snake head draws rows from top to bottom, and indicates rows with squares occupied by the snake body segments.
This can cause problems when trying to distinguish and style the snake head segment, as the order in which rows are drawn is not guaranteed to be the order in which the snake body segments are laid out (i.e. no guarantee of snake position being top to bottom e.g. if the snake is coiled, a middle body segment may be near the top of the board and drawn first)

### BUGS & FIXES

<!-- - Move snake function:
At the moment, every segment of the snake is moved in the direction set by controls. This is not problematic if only the head exists. However, when the snake body segment makes turns, then the segments must travel through the path history of the head. -->
=> Fixed by recording path history, and filling in squares occupied by snake according to snake length, starting from most recent path history entry.

<!-- - Potential bypassing of movement functions: currently movement in directions the head came from is not allowed (i.e. if going upwards, cannot suddenly reverse direction and go down). However, if controls are applied such that in the aforementioned case, the direction is set to left, or right, before going down, then the snake can reverse course within 1 tick. Additional checks are required. -->
=> Will be fixed by checking direction of "neck" segment.

<!-- - In Clock.jsx, inProgress variable is stale before component updates with intervalRef (stale variable can be seen by toggling state from "Play" to "Pause", the inProgress variable will be logged as true before component re-renders to false). Unsure if it will impact other parts of the app as of yet. -->
=> Fixed by setting property dependencies in hook.

<!-- - When repeatedly playing and pausing, it appears that sometimes MOVE_SNAKE is dispatched multiple times (i.e. twice when it should be once). This results in the snake moving at double the speed. Perhaps related to mismanagement of state, or reading stale state. TO RECREATE BUG, CLICK PAUSE THEN PLAY QUICKLY. Then the Clock's dispatches will not be proper. -->
=> Fixed by returning () => clearInterval(timer) inside the useEffect hook.
=> If function inside useEffect returns a function, React will execute it during clean up.
=> React performs clean up when component unmounts. Without returning clearInterval, setInterval from previous renders was not being cleaned up.
