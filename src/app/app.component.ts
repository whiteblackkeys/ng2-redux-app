import { Component } from '@angular/core';
import { Operation } from "./common/operation.model";
import { State, Store } from "@ngrx/store";
import { ADD_OPERATION, INCREMENT_OPERATION, DECREMENT_OPERATION, REMOVE_OPERATION } from "app/common/operations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public id: number = 0; //simulating IDs 
  public operations: Array<Operation>;

  //initialize a new operation class instance
  public operation: Operation = new Operation();

  constructor(private _store: Store<State<Operation>>) {
    //By using observables, @ngrx/store lets you have access to the most recent state in real time 
    _store.select<Operation[]>('operations').subscribe((state) => {
      console.log("operations changed: " + JSON.stringify(state));
      return this.operations = state;
    });
    //this.operations = _store.select('operations');

  }

  addOperation(operation) {
    this._store.dispatch({
      type: ADD_OPERATION, payload: {
        id: ++this.id,//simulating ID increments 
        reason: operation.reason,
        amount: operation.amount
      }
    });
  }

  incrementOperation(operation) {
    this._store.dispatch({ type: INCREMENT_OPERATION, payload: operation })

  }

  decrementOperation(operation) {
    this._store.dispatch({ type: DECREMENT_OPERATION, payload: operation })
  }

  deleteOperation(operation) {
    this._store.dispatch({ type: REMOVE_OPERATION, payload: operation })
  }
}
