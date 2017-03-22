import { Component, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { Operation } from "app/common/operation.model";

@Component({
  selector: 'app-operations-list',
  templateUrl: './operations-list.component.html',
  styleUrls: ['./operations-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class OperationsListComponent {
  @Input()
  operations: Array<Operation>;
  @Output()
  deleteOperation = new EventEmitter();
  @Output()
  incrementOperation = new EventEmitter();
  @Output()
  decrementOperation = new EventEmitter();

  constructor() { }


}
