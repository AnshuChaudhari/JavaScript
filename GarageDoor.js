'use strict';

var previousDirection = null;
var currentDirection = null;

const MOVING_UP = 'moving_up';
const MOVING_DOWN = 'moving_down';
const STOPPED_MIDWAY = 'stopped_midway';
const CLOSED = 'closed';
const OPEN = 'open';

function onClick(state) {

    switch (state) {
        case CLOSED:
            state = MOVING_UP;
            currentDirection = MOVING_UP;
            previousDirection = null;
            break;
        case MOVING_UP:
            state = STOPPED_MIDWAY;
            previousDirection = currentDirection;
            currentDirection = null;
            break;
        case MOVING_DOWN:
            state = STOPPED_MIDWAY;
            previousDirection = currentDirection;
            currentDirection = null;
            break;
        case STOPPED_MIDWAY:
            if (previousDirection === MOVING_UP) {
                state = MOVING_DOWN;
                currentDirection = MOVING_DOWN;
                previousDirection = null;
            } else {
                state = MOVING_UP;
                currentDirection = MOVING_UP;
                previousDirection = null;
            }
            break;

        case OPEN:
            state = MOVING_DOWN;
            currentDirection = MOVING_DOWN;
            previousDirection = null;
            break;

    }
    return state;

}

var state = STOPPED_MIDWAY;
state = onClick(state);
console.log('state: '+state+', currentDirection: '+currentDirection+' , previousDirection: '+previousDirection);

state = onClick(state);
console.log('state: '+state+', currentDirection: '+currentDirection+' , previousDirection: '+previousDirection);

state = onClick(state);
console.log('state: '+state+', currentDirection: '+currentDirection+' , previousDirection: '+previousDirection);

state = onClick(state);
console.log('state: '+state+', currentDirection: '+currentDirection+' , previousDirection: '+previousDirection);