import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Operation } from "app/common/operation.model";

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewOperationComponent {
  @Output()
  addOperation = new EventEmitter();

  public operation: Operation; 
  
  constructor() {
    this.operation = new Operation();
  }

  addNewOperation() {
    console.log("Emitting new operation: " + JSON.stringify(this.operation));
    this.addOperation.emit(this.operation);
  }
}
