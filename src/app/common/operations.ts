import { ActionReducer, Action, State } from '@ngrx/store';
import { Operation } from "./operation.model";


//definitions of the actions that alter the state
export const ADD_OPERATION = 'Add an operation';
export const REMOVE_OPERATION = 'Remove an operation';
export const INCREMENT_OPERATION = 'Increment an operation';
export const DECREMENT_OPERATION = 'Decrement an operation';


//the initial state of the operations
const initialState: Operation[] = Array<Operation>();

//the operationsReducer function: a pure function that is responsible for maintaining the 
//financial operations state of your store
export const operationsReducer: ActionReducer<Operation[]> = (state = initialState, action: Action) => {
    switch (action.type) {
        //In Redux, you cannot mutate the state. In this case using .push(), .pop(), 
        // .shift() or .unshift() is against the convention. 
        case ADD_OPERATION://Action type 
            const operation1: Operation = action.payload;//the contents of an operation
            return [...state, operation1];

        case INCREMENT_OPERATION:
            const operation2 = ++action.payload.amount;
            return state.map(item => {
                return item.id === action.payload.id ? Object.assign({}, item, operation2) : item;
            });

        case DECREMENT_OPERATION:
            const operation3 = --action.payload.amount;
            //update the state by creating a new object using Object.assign()
            return state.map(item => {
                return item.id === action.payload.id ? Object.assign({}, item, operation3) : item;
            });

        case REMOVE_OPERATION:
            return state.filter(operation => {
                //filter items to exclude the item in the payload
                return operation.id !== action.payload.id;
            });


        default://if the action.type is unknown, return the state
            return state;
    }

};